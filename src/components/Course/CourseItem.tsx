import classNames from 'classnames/bind'
import styles from './Course.module.scss'
import { FaCirclePlay } from 'react-icons/fa6'
import { GoClockFill } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
const cx = classNames.bind(styles)

interface CourseItemInterface<T> {
  data: T
  isHide?: boolean
}
const CourseItem = <
  T extends {
    id: number
    thumbnail: string
    title: string
    avatarAuthor: string
    nameAuthor: string
    oldPrice?: number
    newPrice?: number
    totalVideo?: number
    totalHoure?: string
    description?: string
  }
>({
  data,
  isHide = false
}: CourseItemInterface<T>) => {
  return (
    <>
      <NavLink to="course/c" className={cx('wrapper')} key={data.id}>
        <div className={cx('thumbnail')}>
          <img src={data.thumbnail} alt="thumbnail" />
        </div>
        <div className={cx('info')}>
          <h5>{data.title}</h5>
          {!isHide && (
            <div className={cx('prices')}>
              {' '}
              <span className={cx('old-price')}>{data.oldPrice}đ</span>
              <span className={cx('new-price')}>{data.newPrice}đ</span>
            </div>
          )}
          <div className={cx('details')}>
            <div className={cx('moreInfo')}>
              <div className={cx('teacher')}>
                <img className={cx('images')} src={data.avatarAuthor} alt="" />
              </div>
              <span className={cx('name')}>{data.nameAuthor}</span>
            </div>
            {!isHide && (
              <div className={cx('moreInfo')}>
                <FaCirclePlay />
                <span className={cx('students')}>{data.totalVideo}</span>
              </div>
            )}
            {!isHide && (
              <div className={cx('moreInfo')}>
                <GoClockFill />
                <span className={cx('duration')}>{data.totalHoure}</span>
              </div>
            )}
          </div>
        </div>
      </NavLink>
    </>
  )
}

export default CourseItem
