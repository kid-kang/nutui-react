import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'
import Demo6 from './demos/taro/demo6'
import Demo7 from './demos/taro/demo7'
import Demo8 from './demos/taro/demo8'

const TabsDemo = () => {
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
      <Header />
      <ScrollView
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web  full' : ''}`}
      >
        <View className="h2">{translated.basic}</View>
        <Demo1 />
        <View className="h2">{translated.titleLite}</View>
        <Demo2 />
        <View className="h2">{translated.titleCard}</View>
        <Demo3 />
        <View className="h2">{translated.titleButton}</View>
        <Demo4 />
        <View className="h2">{translated.title1}</View>
        <Demo5 />
        <View className="h2">{translated.title4}</View>
        <Demo6 />
        <View className="h2">{translated.title12}</View>
        <Demo7 />
        <View className="h2">{translated.title13}</View>
        <Demo8 />
      </ScrollView>
    </>
  )
}

export default TabsDemo
