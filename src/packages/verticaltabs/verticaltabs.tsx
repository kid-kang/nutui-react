import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane'
import raf from '@/utils/raf'
import { usePropsValue } from '@/utils/use-props-value'
import { useForceUpdate } from '@/utils/use-force-update'
import { useRtl } from '../configprovider'
import { TabsTitle, TabsProps } from '../tabs'

const defaultProps = {
  ...ComponentDefaults,
  tabStyle: {},
  activeColor: '',
  activeType: 'line',
  duration: 300,
  autoHeight: false,
} as TabsProps

const classPrefix = 'nut-tabs'
export const VerticalTabs: FunctionComponent<Partial<TabsProps>> & {
  TabPane: typeof TabPane
} = (props) => {
  const rtl = useRtl()
  const {
    activeColor,
    tabStyle,
    activeType,
    duration,
    align,
    title,
    children,
    onClick,
    onChange,
    className,
    autoHeight,
    value: outerValue,
    defaultValue: outerDefaultValue,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = usePropsValue<string | number>({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: 0,
    onChange,
  })
  const titleItemsRef = useRef<HTMLDivElement[]>([])
  const navRef = useRef<HTMLDivElement>(null)
  const scrollDirection = (nav: any, to: number, duration: number) => {
    let count = 0
    const from = nav.scrollTop
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

    function animate() {
      nav.scrollTop += (to - from) / frames
      if (++count < frames) {
        raf(animate)
      }
    }
    animate()
  }
  const scrollIntoView = (index: number, immediate?: boolean) => {
    const nav = navRef.current
    const titleItem = titleItemsRef.current
    const titlesLength = titles.current.length
    const itemLength = titleItemsRef.current.length
    if (!nav || !titleItem || !titleItem[itemLength - titlesLength + index]) {
      return
    }
    const title = titleItem[itemLength - titlesLength + index]
    const runTop = title.offsetTop - nav.offsetTop + 10
    const to = runTop - (nav.offsetHeight - title.offsetHeight) / 2
    scrollDirection(nav, to, immediate ? 0 : 0.3)
  }

  const getTitles = () => {
    const titles: TabsTitle[] = []
    React.Children.forEach(children, (child: any, idx) => {
      if (React.isValidElement(child)) {
        const props: any = child?.props
        if (props?.title || props?.value) {
          titles.push({
            title: props.title,
            value: props.value || idx,
            disabled: props.disabled,
          })
        }
      }
    })
    return titles
  }
  const titles = useRef<TabsTitle[]>(getTitles())
  const forceUpdate = useForceUpdate()
  useEffect(() => {
    titles.current = getTitles()
    let current: string | number = ''
    titles.current.forEach((title) => {
      // eslint-disable-next-line eqeqeq
      if (title.value == value) {
        current = value
      }
    })
    if (current !== '' && current !== value) {
      setValue(current)
    } else {
      forceUpdate()
    }
  }, [children])

  const classes = classNames(classPrefix, `${classPrefix}-vertical`, className)
  const classesTitle = classNames(`${classPrefix}-titles`, {
    [`${classPrefix}-titles-${activeType}`]: activeType,
    [`${classPrefix}-titles-scrollable`]: true,
    [`${classPrefix}-titles-${align}`]: align,
  })

  const tabsActiveStyle = {
    color: activeType === 'smile' ? activeColor : '',
    background: activeType === 'line' ? activeColor : '',
  }
  const getContentStyle = () => {
    // eslint-disable-next-line eqeqeq
    let index = titles.current.findIndex((t) => t.value == value)
    index = index < 0 ? 0 : index
    return {
      transform: `translate3d( 0,-${index * 100}%, 0)`,
      transitionDuration: `${duration}ms`,
    }
  }
  useEffect(() => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    setTimeout(() => {
      scrollIntoView(index)
    })
  }, [value])

  const tabChange = (item: TabsTitle) => {
    onClick && onClick(item.value)
    if (item.disabled) {
      return
    }
    setValue(item.value)
  }
  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={{ ...tabStyle }} ref={navRef}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item) => {
              return (
                <div
                  onClick={() => {
                    tabChange(item)
                  }}
                  className={classNames(`${classPrefix}-titles-item`, {
                    [`nut-tabs-titles-item-active`]:
                      !item.disabled && String(item.value) === String(value),
                    [`nut-tabs-titles-item-disabled`]: item.disabled,
                    [`nut-tabs-titles-item-${align}`]: align,
                  })}
                  ref={(ref: HTMLDivElement) => titleItemsRef.current.push(ref)}
                  key={item.value}
                >
                  {activeType === 'line' && (
                    <div
                      className={classNames(`${classPrefix}-titles-item-line`, {
                        [`${classPrefix}-titles-item-line-vertical`]: true,
                      })}
                      style={tabsActiveStyle}
                    />
                  )}
                  {activeType === 'smile' && (
                    <div
                      className={`${classPrefix}-titles-item-smile`}
                      style={tabsActiveStyle}
                    >
                      <JoySmile color={activeColor} width={40} height={20} />
                    </div>
                  )}
                  <div
                    className={classNames(
                      `${classPrefix}-ellipsis`,
                      `${classPrefix}-titles-item-text`
                    )}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
      </div>
      <div className={`${classPrefix}-content-wrap`}>
        <div className={`${classPrefix}-content`} style={getContentStyle()}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) {
              return null
            }

            let childProps = {
              ...child.props,
              active: value === child.props.value,
            }

            if (
              String(value) !== String(child.props.value || idx) &&
              autoHeight
            ) {
              childProps = {
                ...childProps,
                autoHeightClassName: 'inactive',
              }
            }
            return React.cloneElement(child, childProps)
          })}
        </div>
      </div>
    </div>
  )
}

VerticalTabs.displayName = 'NutVerticalTabs'
VerticalTabs.TabPane = TabPane
