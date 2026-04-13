import styles from "./button.module.css";

interface ButtonProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button({ children, type = "button", disabled, onClick }: ButtonProps) {
    return (
        <button className={styles.container} type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
