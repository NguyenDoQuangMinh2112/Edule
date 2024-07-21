import ListCourseDetails from '~/components/layouts/components/ListCourseDetails/ListCourseDetails'
import styles from './CourseDetail.module.scss'
import classNames from 'classnames/bind'

import ReactPlayer from 'react-player'
import Button from '~/components/Button/Button'

import { FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'

const cx = classNames.bind(styles)

const CourseDetails = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState<boolean>(false)

  const handleCloseMenuLesson = () => {
    setIsSidebarClosed(true)
  }
  return (
    <div className={cx('wrapper')}>
      {/* <div>Header</div> */}
      <div className={cx('left')}>
        {/* video */}
        <div className={cx('wrapper_video')}>
          <div className={cx('learning-center')}>
            <div className={cx('container1')}>
              <ReactPlayer
                className={cx('react-player')}
                controls
                height="100%"
                width="100%"
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              />
            </div>
          </div>
        </div>
        {/* video */}
        <div className={cx('wrapper_content')}>
          <div className={cx('content_top')}>
            <header className={cx('wrapper')}>
              <h1 className={cx('heading')}>Cài đặt môi trường</h1>
              <p className={cx('updated')}>Cập nhật tháng 11 năm 2022</p>
            </header>
            <Button className={cx('add_note')} leftIcon={<FaPlus />}>
              Them ghi chu tai 00:00
            </Button>
          </div>
        </div>
      </div>
      <div className={cx('right', { close: isSidebarClosed })}>
        <div className={cx('container')}>
          <header className={cx('headWrapper')}>
            <h1 className={cx('headWrapper_title')}>Course content</h1>
            <IoClose onClick={handleCloseMenuLesson} />
          </header>
          <ListCourseDetails />
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
