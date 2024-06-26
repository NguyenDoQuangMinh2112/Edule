import { Outlet } from 'react-router-dom'
import Navbar from '~/components/layouts/components/Navbar/Navbar'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
const cx = classNames.bind(styles)
const Home = () => {
  return (
    <>
      {' '}
      <Navbar />
      <div className={cx('wrapper')}>
        <Outlet />
      </div>
    </>
  )
}

export default Home
