import { FaCirclePlay } from 'react-icons/fa6'
import classNames from 'classnames/bind'
import styles from './LessonItem.module.scss'
const cx = classNames.bind(styles)

const LessonItem = () => {
  return (
    <>
      <div className={cx('lessonItem')}>
        <span>
          <FaCirclePlay />
          <div className={cx('lessonName')}>1. Mô hình Client - Server là gì?</div>
        </span>
        <span>11:35</span>
      </div>
    </>
  )
}

export default LessonItem
