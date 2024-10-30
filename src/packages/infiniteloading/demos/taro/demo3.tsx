import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: pxTransform(200),
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  marginTop: pxTransform(10),
  fontSize: pxTransform(14),
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const Demo3 = () => {
  const [customList, setCustomList] = useState<string[]>([])
  const [customHasMore, setCustomHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    for (let i = 0; i < 10; i++) {
      customList.push(`${i}`)
    }
    setCustomList([...customList])
  }

  const customLoadMore = async () => {
    await sleep(2000)
    const curLen = customList.length
    for (let i = curLen; i < curLen + 10; i++) {
      customList.push(`${i}`)
    }
    if (customList.length >= 30) {
      setCustomHasMore(false)
    } else {
      setCustomList([...customList])
    }
  }

  return (
    <>
      <Cell>
        <View id="customScroll" style={InfiniteUlStyle}>
          <InfiniteLoading
            target="customScroll"
            loadingText="loading"
            loadMoreText="没有啦～"
            hasMore={customHasMore}
            onLoadMore={customLoadMore}
          >
            {customList.map((item, index) => {
              return (
                <View key={index} style={InfiniteLiStyle}>
                  {item}
                </View>
              )
            })}
          </InfiniteLoading>
        </View>
      </Cell>
    </>
  )
}
export default Demo3
