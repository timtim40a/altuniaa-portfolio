"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

const navKeys = ["home", "works", "gallery", "blog", "contact"] as const;

const hrefs: Record<string, string> = {
    home: "/",
    works: "/works",
    gallery: "/gallery",
    collabs: "/collabs",
    blog: "/blog",
    contact: "/contact",
};

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav} aria-label="Main navigation">
            {navKeys.map((key) => {
                const href = hrefs[key];
                const isActive =
                    hrefs[key] === "/"
                        ? pathname === "/"
                        : pathname.startsWith(hrefs[key]);
                return (
                    <Link
                        key={key}
                        href={href}
                        className={`${styles.link} ${isActive ? styles.active : ""}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {key}
                    </Link>
                );
            })}
        </nav>
    );
}
