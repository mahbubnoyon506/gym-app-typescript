
import {createBrowserRouter} from 'react-router-dom'
import Benefits from '../pages/OurBenefits'
import OurClasses from '../pages/Classes'
import Contact from '../pages/Contact'
import Main from '../layout/Main'
import Home from '../pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/benefits',
          element: <Benefits />
        },
        {
          path: '/classes',
          element: <OurClasses />
        },
        {
          path: '/contact',
          element: <Contact />
        }
    ]
  }
])

export default routes;