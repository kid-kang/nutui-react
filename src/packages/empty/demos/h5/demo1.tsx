import React from 'react'
import { Empty } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Empty
        title="全屏缺省标题"
        description="内容描述内容描述内容描述"
        actions={[{ text: '操作按钮' }, { text: '操作按钮', type: 'primary' }]}
      />
      <Empty
        description="内容描述内容描述内容描述"
        actions={[{ text: '操作按钮' }]}
        style={{ marginTop: '10px' }}
      />
      <Empty
        description="内容描述内容描述内容描述"
        style={{ marginTop: '10px' }}
      />
    </>
  )
}
export default Demo1
