import React, { useState } from 'react'
import { VerticalTabs as Tabs } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [tab4value, setTab4value] = useState<number | string>('0')
  const list4 = Array.from(new Array(10).keys())
  return (
    <>
      <Tabs
        value={tab4value}
        style={{ height: '300px' }}
        onChange={(value) => {
          setTab4value(value)
        }}
      >
        {list4.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item}`}>
            Tab {item}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo6
