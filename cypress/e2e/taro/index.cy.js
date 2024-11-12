import './base.cy'
import './layout.cy'
import './nav.cy'
import './dentry.cy'
import './bussiness.cy'
import './exhibition.cy'
import './feedback.cy'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
