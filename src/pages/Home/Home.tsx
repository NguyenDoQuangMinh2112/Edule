import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '~/components/layouts/components/Navbar/Navbar'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Footer from '~/components/layouts/components/Footer/Footer'
const cx = classNames.bind(styles)
const Home = () => {
  const location = useLocation()
  const showFooter = location.pathname !== '/a'
  return (
    <>
      {' '}
      <Navbar />
      <div className={cx('wrapper')}>
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </>
  )
}

export default Home
