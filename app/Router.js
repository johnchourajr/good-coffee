import {
  createRouter,
} from '@expo/ex-navigation'

import Home from './scenes/Home'
import About from './scenes/About'

export default createRouter(() => ({
  home: () => Home,
  about: () => About,
}))
