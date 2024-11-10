import React, { useState } from 'react'
import { Cell, Video } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const [source] = useState({
    src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
    type: 'video/mp4',
  })
  const options = {
    controls: true,
  }
  const play = (elm: any) => console.log('play', elm)
  const pause = (elm: any) => console.log('pause', elm)
  const playend = (elm: any) => console.log('playend', elm)
  return (
    <>
      <Cell style={{ padding: 0 }}>
        <Video
          source={source}
          options={options}
          onPlay={play}
          onPause={pause}
          onPlayEnd={playend}
          style={{ height: pxTransform(163) }}
        />
      </Cell>
    </>
  )
}
export default Demo1
