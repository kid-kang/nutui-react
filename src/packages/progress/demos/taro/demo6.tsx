import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import { Checked, Tips } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo6 = () => {
  const iconStyle = {
    marginTop: 0,
    marginLeft: pxTransform(5),
    marginRight: pxTransform(5),
  }
  return (
    <>
      <Cell>
        <Progress
          percent={30}
          color={
            harmonyAndRn()
              ? 'blue'
              : 'linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)'
          }
          animated
        />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        <Checked color="green" style={iconStyle} />
      </Cell>
      <Cell align="center">
        <Progress percent={100} color="#AAFF00" strokeWidth="15" />
        <Tips color="#FF0000" style={iconStyle} />
      </Cell>
    </>
  )
}
export default Demo6
