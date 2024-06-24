import { ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './PopperWrapper.module.scss'
const cx = classNames.bind(styles)

type PopperWrapperProps = {
  children: ReactNode | string
}

const PopperWrapper = ({ children }: PopperWrapperProps) => {
  return <div className={cx('wrapper')}>{children}</div>
}

export default PopperWrapper
