import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'manaken0522.com',
    description: '404(NotFound)',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        images: '/images/manaken0522.webp',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'manaken0522.com',
        description: '404(NotFound)',
        images: ['/images/manaken0522.webp'],
        creator: '@manaken0522',
        creatorId: '1764669515210891264'
    },
}

export default function NotFound() {
    return (
        <div>
            存在しないページです
        </div>
    )
}