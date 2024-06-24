import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps {
  to?: string
  href?: string
  primary?: boolean
  outline?: boolean
  text?: boolean
  rounded?: boolean
  disabled?: boolean
  small?: boolean
  large?: boolean
  children: string
  className?: string
  onClick?: () => void
  passProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>
}

const cx = classNames.bind(styles)

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  onClick,
  passProps
}: ButtonProps) => {
  let Comp: React.ElementType = 'button'
  const props = { onClick, ...(passProps as ButtonProps) }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className || '']: className,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large
  })

  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  )
}

export default Button
