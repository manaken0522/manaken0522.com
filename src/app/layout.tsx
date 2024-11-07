import './global.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';

const SF_Pro = localFont({src: './fonts/sf-pro-text_regular.woff2'});

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ja" className={SF_Pro.className}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <GoogleAnalytics gaId="G-C680912EEE" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}
