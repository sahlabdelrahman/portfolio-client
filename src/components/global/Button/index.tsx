import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    id?: string;
    name?: string;
    title?: string;
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    StartIcon?: ReactNode;
    EndIcon?: ReactNode;
    isLoading?: boolean;
    LoadingIndicator?: ReactNode;
}

const Button = ({
    type = "button",
    LoadingIndicator = <>Loading...</>,
    name = "Button",
    title = "Button",
    ariaLabel = "Button",
    disabled = false,
    className = "",
    id,
    onClick,
    children,
    StartIcon,
    EndIcon,
    isLoading,
    ...rest
}: ButtonProps) => {
    const content = isLoading ? LoadingIndicator : children;

    return (
        <button
            className={`${styles.button} ${className}`.trim()}
            type={type}
            id={id}
            disabled={disabled || isLoading}
            onClick={onClick}
            name={name}
            title={title || name}
            aria-label={ariaLabel || name}
            {...rest}
        >
            {StartIcon && StartIcon}
            {content}
            {EndIcon && EndIcon}
        </button>
    );
};

export default Button;
