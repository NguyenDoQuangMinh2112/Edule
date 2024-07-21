import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { IoIosCloseCircle } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { FaSpinner } from 'react-icons/fa'

import { useRef, useState } from 'react'

import 'tippy.js/dist/tippy.css'

import Tippy from '@tippyjs/react/headless'
import PopperWrapper from '../Popper/PopperWrapper'
import CourseItem from '../CourseItem/CourseItem'

const cx = classNames.bind(styles)

const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Tippy
      visible={searchValue?.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <div className={cx('search-header')}>
              <FiSearch />
              <span>Kết quả cho '{searchValue}'</span>
            </div>
            <div className={cx('search-heading')}>
              <h5 className={cx('search-title')}>COURSE</h5>
              <span>See more</span>
            </div>
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search course, video,..."
          spellCheck={false}
        />
        <button
          className={cx('clear')}
          onClick={() => {
            setSearchValue(''), inputRef.current?.focus()
          }}
        >
          <IoIosCloseCircle />
        </button>
        <FaSpinner className={cx('loading')} />

        <button className={cx('search-btn')}>
          <FiSearch />
        </button>
      </div>
    </Tippy>
  )
}

export default Search
