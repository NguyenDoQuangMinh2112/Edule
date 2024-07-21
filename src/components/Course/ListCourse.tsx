import classNames from 'classnames/bind'
import styles from './Course.module.scss'
import CourseItem from './CourseItem'
import { mockDataBlog, mockDataCourseInterface } from '~/data/mockData'
const cx = classNames.bind(styles)
interface ListCourseInterface {
  datas: mockDataCourseInterface[]
}
const ListCourse = ({ datas }: ListCourseInterface) => {
  return (
    <>
      <h1>The course has a fee</h1>
      <div className={cx('list_wrapper')}>
        {datas?.map((item) => (
          <CourseItem data={item} />
        ))}
      </div>

      <h1>Featured article</h1>
      <div className={cx('list_wrapper')}>
        {mockDataBlog?.map((item) => (
          <CourseItem data={item} isHide={true} />
        ))}
      </div>
    </>
  )
}

export default ListCourse
