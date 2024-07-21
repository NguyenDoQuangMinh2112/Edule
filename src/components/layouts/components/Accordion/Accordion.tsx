import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { useState } from 'react'
import LessonItem from './Lesson/LessonItem'

const cx = classNames.bind(styles)

const Accordion = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')} onClick={() => setToggle(!toggle)}>
        <h5 className={cx('title')}>
          <div className={cx('headline')}>
            <strong>1. Khái niệm kỹ thuật cần biết</strong>
            <span className={cx('timeOfSection')}>3 bài học</span>
          </div>
        </h5>
      </div>
      {/* content */}
      <div className={cx('content', { active: toggle })}>
        <LessonItem />
        <LessonItem />
      </div>
    </div>
  )
}

export default Accordion
