const componentTest = (comName, fn) => {
  const getPath = (component) =>
    `${Cypress.env('baseUrl')}nav/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(1000)
    fn()
  })
}
describe('nav components test', () => {
  componentTest('BackTop', () => {})
  componentTest('HoverButton', () => {})
  componentTest('NavBar', () => {})
})
