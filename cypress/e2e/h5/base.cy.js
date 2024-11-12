import { componentTest } from './utils'

describe('base components test', () => {
  componentTest('Button', () => {})
  componentTest('Cell', () => {})
  componentTest('ConfigProvider', () => {})
  componentTest('Icon', () => {})
  componentTest('Image', () => {})
  componentTest('Overlay', () => {})
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
