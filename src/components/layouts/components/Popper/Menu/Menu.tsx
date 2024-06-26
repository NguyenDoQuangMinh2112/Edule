import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { ReactElement } from 'react'
import Tippy from '@tippyjs/react/headless'
import PopperWrapper from '../PopperWrapper'
import MenuItem from './MenuItem'
const cx = classNames.bind(styles)

type MenuProps = {
  children: ReactElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any
}
const Menu = ({ children, items = [] }: MenuProps): ReactElement => {
  const renderItems = () => {
    return items?.map((item, index) => <MenuItem key={index} data={item} />)
  }
  return (
    <Tippy
      interactive
      delay={[0, 300]}
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            <div className={cx('userMenu')}>
              <div className={cx('userMenu_avatar')}>
                <img
                  className={cx('avatar')}
                  src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                  alt="avatar"
                />
              </div>
              <div className={cx('userMenu_info')}>
                <span className={cx('userMenu_name')}>Minh Nguyen Do Quang</span>
                <span className={cx('userMenu_email')}>@nguyendoquangminh2112</span>
              </div>
            </div>
            <hr />
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
