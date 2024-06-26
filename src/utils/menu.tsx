import { SideBarMenuItem } from '~/interfaces/menu'
import icons from './icons'

const { IoHome, FaRoad, FaRegNewspaper } = icons
export const sideBarMenu: SideBarMenuItem[] = [
  {
    id: 1,
    icons: <IoHome />,
    text: 'Home',
    path: '/'
  },
  {
    id: 2,
    icons: <FaRoad />,
    text: 'Roadmap',
    path: '/roadmap'
  },
  {
    id: 3,
    icons: <FaRegNewspaper />,
    text: 'Post',
    path: '/post'
  }
]
