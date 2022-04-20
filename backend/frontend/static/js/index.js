//  Modules
import Dashboard from './views/Dashboard.js'

// Handle History (back button)
const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

// Vanilla JS router
const router = async () => {
  const routes = [
    {
      path: '/',
      view: Dashboard,
    },
    // {
    //   path: '/posts',
    //   view: () => console.log('Viewing Post'),
    // },
    // {
    //   path: '/settings',
    //   view: () => console.log('Viewing Settings'),
    // },
  ]

  // Test each route for match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    }
  })

  //  Handling Matches
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch)
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  // Updating the veiw by getting HTML
  const view = new match.route.view()
  document.querySelector('#app').innerHTML = await view.getHtml()
}

// Listen for events
window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })
  router()
})
