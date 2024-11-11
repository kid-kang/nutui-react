const componentTest = (comName, fn) => {
  const baseArr = ['Button', 'Cell', 'ConfigProvider', 'Image']
  const getPath = (component) => `base/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('base components test', () => {
  componentTest('Button', () => {})
  componentTest('Cell', () => {})
  componentTest('ConfigProvider', () => {})
  componentTest('Image', () => {})
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
