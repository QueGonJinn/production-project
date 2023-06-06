import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button className={classNames(cls.Button, {}, [cls[theme], className])} {...otherProps}>
			{children}
		</button>
	);
};
