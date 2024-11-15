import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react-taro'
import { User } from '@nutui/icons-react-taro'

const Demo3 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon={<User />} />
      <Avatar>N</Avatar>
    </Cell>
  )
}
export default Demo3
