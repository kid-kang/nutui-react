const componentTest = (comName, fn) => {
  const getPath = (component) =>
    `feedback/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('feedback components test', () => {
  componentTest('Empty', () => {})
  componentTest('ResultPage', () => {})
  componentTest('InfiniteLoading', () => {})
  componentTest('Notify', () => {})
  componentTest('Popup', () => {})
  componentTest('PullToRefresh', () => {})
  componentTest('Skeleton', () => {})
  componentTest('Swipe', () => {})
  componentTest('Toast', () => {})
})
