import React, { useState } from 'react'
import { Tabs, VerticalTabs } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [tab8value, setTab8value] = useState<number | string>('0')
  const [tab9value, setTab9value] = useState<number | string>('0')
  return (
    <>
      <Tabs
        value={tab8value}
        onChange={(value) => {
          setTab8value(value)
        }}
        autoHeight
      >
        <Tabs.TabPane title="Tab 1">
          <VerticalTabs
            value={tab9value}
            onChange={(value) => {
              setTab9value(value)
            }}
          >
            <VerticalTabs.TabPane title="Tab 1"> Tab 1 </VerticalTabs.TabPane>
            <VerticalTabs.TabPane title="Tab 2"> Tab 2 </VerticalTabs.TabPane>
            <VerticalTabs.TabPane title="Tab 3"> Tab 3 </VerticalTabs.TabPane>
          </VerticalTabs>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo8
