import React, { useState } from 'react'
import { VerticalTabs as Tabs } from '@nutui/nutui-react'

const Demo1 = () => {
  const [tab5value, setTab5value] = useState<number | string>('0')
  const list5 = Array.from(new Array(3).keys())
  return (
    <>
      <Tabs
        style={{ height: '300px' }}
        value={tab5value}
        onChange={(value) => {
          setTab5value(value)
        }}
      >
        {list5.map((item) => (
          <Tabs.TabPane key={item} title={`Tab ${item + 1}`}>
            Tab {item + 1}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  )
}
export default Demo1
