const componentTest = (comName, fn) => {
  const getPath = (component) =>
    `business/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('exhibition components test', () => {
  componentTest('TrendArrow', () => {})
})
