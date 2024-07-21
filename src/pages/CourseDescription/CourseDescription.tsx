import classNames from 'classnames/bind'
import styles from './CourseDescription.module.scss'
import Accordion from '~/components/layouts/components/Accordion/Accordion'

const cx = classNames.bind(styles)

const CourseDescription = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <article className={cx('col', 'col-9')}>
          <div className={cx('content')}>
            <div>
              {' '}
              <h1>Lập trình C++ cơ bản, nâng cao</h1>
              <div className={cx('text-content')}>
                Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm
                giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh
                phục con đường trở thành một lập trình viên.
              </div>
            </div>
            <div className={cx('curriculumOfCourse')}>
              <div className={cx('headingTitle')}>
                <h2>Nội dung khóa học</h2>
              </div>

              <div className={cx('subHead')}>
                <ul>
                  <li>
                    <strong>11</strong> chương
                  </li>
                  <li className={cx('dot')}>•</li>
                  <li>
                    <strong>138</strong> bài học
                  </li>
                  <li className={cx('dot')}>•</li>
                  <li>
                    Thời lượng <strong>10 giờ 29 phút</strong>
                  </li>
                </ul>
                <div className={cx('openMore')}>Mở rộng tất cả</div> {/* (su dung redux de hanlde) */}
              </div>
            </div>
          </div>

          {/* accordion */}
          <Accordion />
          <Accordion />
        </article>

        <div className={cx('col', 'col-3')}>Right</div>
      </div>
    </div>
  )
}

export default CourseDescription
