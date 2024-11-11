import './taro/base.cy'
import './taro/layout.cy'
import './taro/nav.cy'
import './taro/dentry.cy'
import './taro/bussiness.cy'
import './taro/exhibition.cy'
import './taro/feedback.cy'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
