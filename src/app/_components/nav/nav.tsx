"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className={styles.burger}
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
                <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
                <span className={`${styles.bar} ${open ? styles.barBot : ""}`} />
            </button>

            {open && (
                <div
                    className={styles.overlay}
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav
                className={`${styles.nav} ${open ? styles.navOpen : ""}`}
                aria-label="Main navigation"
            >
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
                            onClick={() => setOpen(false)}
                        >
                            {key}
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
