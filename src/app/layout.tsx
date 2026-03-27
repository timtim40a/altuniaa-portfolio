import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import Nav from "./_components/nav/nav";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Nav />
                <Footer />
            </body>
        </html>
    );
}
