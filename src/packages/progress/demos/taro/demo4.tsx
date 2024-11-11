import React from 'react'
import { Progress, Image, Cell } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo4 = () => {
  return (
    <Cell>
      <Progress percent={60} showText>
        <Image
          width={pxTransform(20)}
          height={pxTransform(20)}
          src="https://img12.360buyimg.com/imagetools/jfs/t1/229362/18/22746/11607/669f8bfeF5fcbeaab/d4162bbf29bb1b00.png"
        />
      </Progress>
    </Cell>
  )
}
export default Demo4
