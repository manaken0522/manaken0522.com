import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    title: 'manaken0522.com',
    description: '404(NotFound)',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        images: '/images/manaken0522.jpg',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'manaken0522.com',
        description: '404(NotFound)',
        images: ['/images/manaken0522.jpg'],
        creator: '@manaken0522',
        creatorId: '1764669515210891264'
    },
}

export const viewport: Viewport = {
    themeColor: 'skyblue',
    width: 'device-width',
    initialScale: 1
}

export default function NotFound() {
    return (
        <div>
            存在しないページです
        </div>
    )
}