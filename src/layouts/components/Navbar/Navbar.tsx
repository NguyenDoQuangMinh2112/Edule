import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import images from '../../../assets/images/logo.png'
import Search from '../Search/Search'
import Action from '../Action/Action'

const cx = classNames.bind(styles)
const Header = () => {
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
        <Action />
      </div>
    </div>
  )
}

export default Header
