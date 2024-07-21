import { Outlet } from 'react-router-dom'
import Navbar from '~/components/layouts/components/Navbar/Navbar'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Footer from '~/components/layouts/components/Footer/Footer'
const cx = classNames.bind(styles)
const Home = () => {
  return (
    <>
      {' '}
      <Navbar />
      <div className={cx('wrapper')}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Home
