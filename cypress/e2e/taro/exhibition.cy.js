const componentTest = (comName, fn) => {
  const getPath = (component) =>
    `exhibition/pages/${component.toLowerCase()}/index`

  it(`${comName} successfully passes`, () => {
    cy.visit(getPath(comName))
    cy.get('.applets-demo-header').contains(comName)
    cy.wait(400)
    fn()
  })
}
describe('exhibition components test', () => {
  componentTest('Avatar', () => {})
  componentTest('CountDown', () => {})
  componentTest('Indicator', () => {})
  componentTest('Pagination', () => {})
  componentTest('Price', () => {})
  componentTest('Progress', () => {})
  componentTest('Swiper', () => {})
  componentTest('Tag', () => {})
  componentTest('Video', () => {})
})
