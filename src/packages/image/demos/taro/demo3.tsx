import React from 'react'
import { Cell, Image } from '@nutui/nutui-react-taro'
import { Loading } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo3 = () => {
  const imageText: React.CSSProperties = {
    width: 80,
    marginTop: 5,
    textAlign: 'center',
    color: '#999',
  }
  return (
    <Cell>
      <View style={{ display: 'flex', flexWrap: 'wrap' }}>
        <View style={{ width: pxTransform(98) }}>
          <Image width={80} height={80} />
          <View style={imageText}>默认</View>
        </View>
        <View style={{ width: pxTransform(98) }}>
          <Image
            width={80}
            height={80}
            loading={<Loading className="nut-icon-loading" />}
          />
          <View style={imageText}>自定义</View>
        </View>
      </View>
    </Cell>
  )
}
export default Demo3
