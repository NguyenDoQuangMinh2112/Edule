import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import images from '~/assets/images/logo.png'
import Search from '../Search/Search'
import Menu from '../Popper/Menu/Menu'

import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

const userMenu = [
  {
    icon: <FaUser />,
    title: 'View profile',
    to: '/@hoaa'
  },
  {
    icon: <IoMdSettings />,
    title: 'Settings',
    to: '/settings'
  },
  {
    icon: <MdLogout />,
    title: 'Log out',
    to: '/logout',
    separate: true
  }
]
const Navbar = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to="/" className={cx('logo-link')}>
          <img src={images} alt="Edule" />
        </Link>
      </div>
      <div className={cx('body', 'd-flex-center')}>
        <Search />
      </div>
      <div className={cx('action')}>
        <Button>My course</Button>
        <div className={cx('notification_button')}>
          <IoNotifications className={cx('notification')} />
        </div>
        <Menu items={userMenu}>
          <div className={cx('fallbackAvatar')}>
            <img
              className={cx('avatar')}
              src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
              alt="avatar"
            />
          </div>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar
