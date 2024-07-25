import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

import { BsApple, BsGooglePlay } from 'react-icons/bs'
import logoImg from '~/assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { footerData } from '~/data/mockData'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <>
      <section className={cx('advertising')}>
        <div className={cx('left')}>
          <h1>
            Start Learning by <br /> Dowloading Apps
          </h1>
        </div>

        <div className={cx('right')}>
          <div className={cx('box')}>
            <BsApple />
            <label>App Store</label>
          </div>
          <div className={cx('box')}>
            <BsGooglePlay />
            <label className="text-sm">Play Store</label>
          </div>
        </div>
      </section>

      <footer className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('logo')}>
            <img src={logoImg} alt="logImg" className={cx('img')} />
            <span style={{ fontSize: '14px', display: 'block', color: 'white' }}>
              Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
            </span>
          </div>
          {footerData.map((val, idx) => (
            <li className={cx('item')} key={idx}>
              <h4 className={cx('headingTitle')}>{val.header}</h4>
              {val.subtitle.map((val, index) => (
                <NavLink key={index} to={''}>
                  {val.header}
                </NavLink>
              ))}
            </li>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
