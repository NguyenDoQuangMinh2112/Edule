import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
const cx = classNames.bind(styles)

const Content = () => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      {/* <SidebarContent /> */}
      <Outlet />
    </div>
  )
}

export default Content
