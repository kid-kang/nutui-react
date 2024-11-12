const componentTest = (comName, fn) => {
  const getPath = (component) =>
    `${Cypress.env('baseUrl')}base/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(1000)
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
