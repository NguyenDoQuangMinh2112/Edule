import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import images from '~/assets/images/logo.png'
import Search from '../Search/Search'
import Menu from '../Popper/Menu/Menu'
import Button from '~/components/Button/Button'

import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'

import { useState } from 'react'

const cx = classNames.bind(styles)
interface NavbarPropInterface {
  isHideSearch?: boolean
}
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

const Navbar = ({ isHideSearch = false }: NavbarPropInterface) => {
  const [modal, setModal] = useState<boolean>(false)
  const user = false
  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add(cx('active-modal'))
  } else {
    document.body.classList.remove(cx('active-modal'))
  }

  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('logo')}>
          <Link to="/" className={cx('logo-link')}>
            <img src={images} alt="Edule" />
          </Link>
        </div>
        <div className={cx('body', 'd-flex-center')}>{!isHideSearch && <Search />}</div>
        <div className={cx('action')}>
          {user && (
            <>
              {' '}
              <Button className={cx('myCourse')}>My course</Button>
              <div className={cx('notification_button')}>
                <IoNotifications className={cx('notification')} />
              </div>
            </>
          )}
          {user ? (
            <Menu items={userMenu}>
              <div className={cx('fallbackAvatar')}>
                <img
                  className={cx('avatar')}
                  src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                  alt="avatar"
                />
              </div>
            </Menu>
          ) : (
            <div className={cx('auth_action')}>
              <Button onClick={toggleModal}>Sign up</Button>
              <Button className={cx('rounded_login')} onClick={toggleModal}>
                Sign In
              </Button>
            </div>
          )}
        </div>
        {modal && (
          <div className={cx('modal')}>
            <div onClick={toggleModal} className={cx('overlay')}></div>
            <div className={cx('modal-content')}>
              <div className={cx('wrapper_login')}>
                <header>
                  <a href="/">
                    <img src="https://accounts.fullstack.edu.vn/assets/logo-lV2rGpF0.png" alt="logo" />
                  </a>
                  <h1>Đăng nhập vào F8</h1>
                  <p>Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.</p>
                </header>
                <main className={cx('main')}>
                  <div className={cx('content')}>
                    <Button className={cx('rounded_logins')} to="login/email">
                      Sử dụng email / số điện thoại
                    </Button>
                    <Button className={cx('rounded_logins')}>Đăng nhập với Google</Button>
                    <Button className={cx('rounded_logins')}>Đăng nhập với Facebook</Button>
                    <Button className={cx('rounded_logins')}>Đăng nhập với Github</Button>
                  </div>
                </main>
              </div>
              <button className={cx('close-modal')} onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
