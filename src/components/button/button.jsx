import Styles from './button.module.scss';

export default function Button({ variant = 'primary',
    className = '', onClick,
    children, ...rest
}) {
    const classes = `${Styles.btn} ${Styles[variant]} ${className}`;

    return (
        <button
            className={classes}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}