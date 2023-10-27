import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    big = false,
    small = false,
    outline = false,
    onClick,
    disable = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    primary = false,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', { primary, outline, small, big, disable, rounded });
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}
export default Button;
