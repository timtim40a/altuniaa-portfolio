import styles from "./star.module.css";

interface StarProps {
    size?: string;
    className?: string;
    rotation?: number;
    trail?: boolean;
    trailSize?: string;
}

export default function Star({
    size = "3rem",
    className = "",
    rotation = 0,
    trail = false,
    trailSize = "11rem",
}: StarProps) {
    return (
        <>
            {trail ? (
                <img
                    src="/trail.svg"
                    alt="Trail"
                    className={styles.trail}
                    style={{ width: trailSize, height: trailSize }}
                ></img>
            ) : null}
            <img
                src="/star.svg"
                alt="Star"
                className={`${styles.star} ${className}`}
                style={{
                    width: size,
                    height: size,
                    transform: `rotate(${rotation}deg)`,
                }}
                aria-hidden="true"
            ></img>
        </>
    );
}
