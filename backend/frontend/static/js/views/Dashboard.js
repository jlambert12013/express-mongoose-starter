import AbstractView from './AbstractView.js'

export default class extends AbstractView {
  constructor() {
    super()
    this.setTitle('Dashboard')
  }

  async getHtml() {
    return `
    <h1>Welcome, Jim</h1>
    <p>Dashboard</p>
    <p>An extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. Are they small words? I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. This placeholder text is gonna be HUGE.</p>
    `
  }
}
