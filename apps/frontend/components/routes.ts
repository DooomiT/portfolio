import { About } from '../pages/About'

interface Route {
  path: string
  page: JSX.Element
}
export const routes = [
  {
    about: About,
  },
]
