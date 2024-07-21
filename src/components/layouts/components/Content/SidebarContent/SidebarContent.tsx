import classNames from 'classnames/bind'
import styles from './SidebarContent.module.scss'
import ListCourse from '~/components/Course/ListCourse'
import { mockDataCourse } from '~/data/mockData'

const cx = classNames.bind(styles)
const SidebarContent = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slideShow')}></div>
      {/* Show list course */}
      <ListCourse datas={mockDataCourse} />
    </div>
  )
}

export default SidebarContent
