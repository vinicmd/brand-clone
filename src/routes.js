import { Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import Contatct from './pages/Contact'
import Blog from './pages/Blog'
import Works from './pages/Works'
import NotFound from './pages/NotFound'

function AppRoutes () {
  return (
    <Switch>
        <Route path="/" exact component={ Landing } />
        <Route path="/works" component={ Works } />
        <Route path="/blog" component={ Blog } />
        <Route path="/contact" component={ Contatct } />
        <Route path="*" component={ NotFound } />
    </Switch>
  )
}

export default AppRoutes