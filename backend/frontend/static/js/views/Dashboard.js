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
    `
  }
}
