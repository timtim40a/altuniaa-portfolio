"use client";

import { useState } from "react";
import Button from "@/app/_components/button/button";
import styles from "./contact.module.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setStatus("error");
        }
    }

    return (
        <div className={styles.container}>
            <h1>Contact me!</h1>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className={styles.textarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Send"}
                </Button>
                {status === "success" && (
                    <p className={styles.successMessage}>Message sent! I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                    <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
}
