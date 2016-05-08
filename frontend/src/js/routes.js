import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import About from './views/About/about_index.js'
import Contact from './views/Contact/contact_index.js'
import Faq from './views/Faq/faq_index.js'
import Blog from './views/Blog/blog_index.js'
import Resources from './views/Resources/resources_index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/faq' component={Faq} />
    <Route path='/blog' component={Blog} />
    <Route path='/resources' component={Resources} />
  </Route>
)
