import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from './header';
import localFont from 'next/font/local';

const SF_Pro = localFont({src: './fonts/sf-pro-text_regular.woff2'});

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ja">
            <body className={SF_Pro.className}>
                <Header />
                {children}
            </body>
            <GoogleAnalytics gaId="G-C680912EEE" />
        </html>
    )
}
