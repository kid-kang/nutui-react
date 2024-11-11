const componentTest = (comName, fn) => {
  const getPath = (component) => `layout/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('layout components test', () => {
  componentTest('Divider', () => {})
  componentTest('Grid', () => {})
  componentTest('Layout', () => {})
  componentTest('Space', () => {})
})
