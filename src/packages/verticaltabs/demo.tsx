import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'

const VeriticalTabsDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '基础用法-微笑曲线',
      titleLite: '基础用法-简约模式',
      titleCard: '基础用法-卡片模式',
      titleButton: '基础用法-按钮模式',
      titleDivider: '基础用法-分割线模式',
      title4: '数量多,滚动操作',
      title12: '嵌套布局',
      title13: '嵌套布局2',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Basic Usage - Smile Curve',
      titleLite: 'Basic Usage - Simple Mode',
      titleCard: 'Basic Usage - Card Mode',
      titleButton: 'Basic Usage - Button Mode',
      titleDivider: 'Basic Usage - Divider Mode',
      title4: 'A Large Number Of Scrolling Operations',
      title12: 'Tabs In Tabs',
      title13: 'Tabs In Tabs 2',
    },
  })

  return (
    <>
      <div className="demo full no-overflow">
        <h2>{translated.basic}</h2>
        <Demo1 />
        <h2>{translated.titleLite}</h2>
        <Demo2 />
        <h2>{translated.titleCard}</h2>
        <Demo3 />
        <h2>{translated.titleButton}</h2>
        <Demo4 />
        <h2>{translated.title1}</h2>
        <Demo5 />
        <h2>{translated.title4}</h2>
        <Demo6 />
        <h2>{translated.title12}</h2>
        <Demo7 />
        <h2>{translated.title13}</h2>
        <Demo8 />
      </div>
    </>
  )
}

export default VeriticalTabsDemo
