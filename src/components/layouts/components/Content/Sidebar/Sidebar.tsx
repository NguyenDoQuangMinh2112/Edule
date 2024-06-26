import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { sideBarMenu } from '~/utils/menu'
import Button from '~/components/Button/Button'
import { useState } from 'react'
const cx = classNames.bind(styles)
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<number>(1)
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('list_menu')}>
        {sideBarMenu?.map((sidebar) => (
          <li key={sidebar.id}>
            <Button
              to={sidebar.path}
              classNameTitle={cx('title')}
              classNameIcon={cx('icon')}
              leftIcon={sidebar.icons}
              className={cx('item', { active: activeItem === sidebar.id })}
              onClick={() => setActiveItem(sidebar.id)}
            >
              {sidebar.text}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
