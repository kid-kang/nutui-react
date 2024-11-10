import React from 'react'
import { NavBar } from '@nutui/nutui-react-taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: pxTransform(18),
      fontWeight: 'bold',
      lineHeight: pxTransform(26),
    },
    description: {
      fontSize: pxTransform(12),
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      lineHeight: pxTransform(16),
      textAlign: 'center',
    },
  }
  return (
    <>
      <NavBar
        back={
          <>
            <ArrowLeft size={20} />
            <Text>返回</Text>
          </>
        }
        right={
          <View
            style={styles.flexCenter}
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Share size={20} />
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text style={styles.title}>订单详情</Text>
      </NavBar>
      <NavBar
        right={
          <View
            style={styles.flexCenter}
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Share size={20} />
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text style={styles.title}>订单详情</Text>
      </NavBar>
      <NavBar
        right={
          <Text onClick={(e) => Taro.showToast({ title: '清空' })}>清空</Text>
        }
        left={<Close size={20} />}
        back={<ArrowLeft size={20} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View
          style={{
            ...styles.flexCenter,
            flexDirection: 'column',
          }}
        >
          <Text
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '标题' })}
          >
            浏览记录
          </Text>
          <Text style={styles.description}>浏览记录</Text>
        </View>
      </NavBar>
      <NavBar
        back={<ArrowLeft size={20} />}
        right={
          <>
            <Text
              style={{ marginRight: pxTransform(5) }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </Text>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text
          style={styles.title}
          onClick={(e) => Taro.showToast({ title: '标题' })}
        >
          购物车
        </Text>
        <View
          style={{
            ...styles.flexCenter,
            marginLeft: pxTransform(5),
            marginRight: pxTransform(5),
          }}
          onClick={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Cart size={20} />
        </View>
      </NavBar>
    </>
  )
}
export default Demo1
