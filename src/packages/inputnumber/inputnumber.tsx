import React, {
  useState,
  useEffect,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import { Minus, Plus } from '@nutui/icons-react'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  disabled: boolean
  iconSize: string | number
  min: string | number
  max: string | number
  inputWidth: string | number
  readonly: boolean
  modelValue: string | number
  step: string | number
  decimalPlaces: string | number
  isAsync: boolean
  className: string
  style: React.CSSProperties
  onAdd: (e: MouseEvent) => void
  onReduce: (e: MouseEvent) => void
  onOverlimit: (e: MouseEvent) => void
  onBlurFuc: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: FocusEvent<HTMLInputElement>) => void
  onChangeFuc: (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  iconSize: '',
  min: 1,
  max: 9999,
  inputWidth: '',
  readonly: false,
  modelValue: 0,
  step: 1,
  decimalPlaces: 0,
  isAsync: false,
} as InputNumberProps

function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    disabled,
    iconSize,
    min,
    max,
    inputWidth,
    readonly,
    modelValue,
    decimalPlaces,
    step,
    isAsync,
    className,
    style,
    onAdd,
    onReduce,
    onOverlimit,
    onBlurFuc,
    onFocus,
    onChangeFuc,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [inputValue, setInputValue] = useState(modelValue)
  useEffect(() => {
    setInputValue(modelValue)
  }, [modelValue])

  const b = bem('inputnumber')
  const classes = classNames(
    {
      [`${b('')}--disabled`]: disabled,
    },
    className,
    b('')
  )
  const styles = {
    height: pxCheck(iconSize),
    ...style,
  }
  const addAllow = (value = inputValue) => {
    if (value || typeof value === 'number') {
      return value < Number(max) && !disabled
    }
    return false
  }

  const reduceAllow = (value = inputValue) => {
    if (value || typeof value === 'number') {
      return value > Number(min) && !disabled
    }
    return false
  }

  const iconMinusClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !reduceAllow(),
  })

  const iconAddClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !addAllow(),
  })

  const fixedDecimalPlaces = (v: string | number): string => {
    return Number(v).toFixed(Number(decimalPlaces))
  }

  const emitChange = (
    value: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    const outputValue: number | string = fixedDecimalPlaces(value)
    onChangeFuc && onChangeFuc(outputValue, e)
    if (!isAsync) {
      if (Number(outputValue) < Number(min)) {
        setInputValue(Number(min))
      } else if (Number(outputValue) > Number(max)) {
        setInputValue(Number(max))
      } else {
        setInputValue(outputValue)
      }
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    onReduce && onReduce(e)
    if (reduceAllow()) {
      const outputValue = Number(inputValue) - Number(step)
      emitChange(outputValue, e)
    } else {
      onOverlimit && onOverlimit(e)
    }
  }

  const addNumber = (e: MouseEvent) => {
    onAdd && onAdd(e)
    if (addAllow()) {
      const outputValue = Number(inputValue) + Number(step)
      emitChange(outputValue, e)
    } else {
      onOverlimit && onOverlimit(e)
    }
  }

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    onChangeFuc && onChangeFuc(input.valueAsNumber, e)
    if (!isAsync) {
      if (Number.isNaN(input.valueAsNumber)) {
        setInputValue('')
      } else {
        setInputValue(input.valueAsNumber)
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    onFocus && onFocus(e)
  }

  const burValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    const input = e.target as HTMLInputElement
    let value = input.valueAsNumber
    if (value < Number(min)) {
      value = Number(min)
    } else if (value > Number(max)) {
      value = Number(max)
    }
    emitChange(value, e)
    onBlurFuc && onBlurFuc(e)
  }
  return (
    <div className={classes} style={styles} {...restProps}>
      <Minus
        className={iconMinusClasses}
        onClick={(e: any) => reduceNumber(e)}
        width={iconSize}
        height={iconSize}
      />
      <input
        type="number"
        min={min}
        max={max}
        style={{ width: pxCheck(inputWidth) }}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        onInput={changeValue}
        onBlur={burValue}
        onFocus={focusValue}
      />
      <Plus
        className={iconAddClasses}
        onClick={(e: any) => addNumber(e)}
        width={iconSize}
        height={iconSize}
      />
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
