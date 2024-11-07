import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: 'manaken0522',
    description: 'のサイト',
    openGraph: {
        images: '/images/manaken0522.jpg',
    },
    icons: {
        icon: '/favicon.ico'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'manaken0522',
        description: 'のサイト',
        creator: '@manaken0522',
        creatorId: '1764669515210891264',
        images: ['/images/manaken0522.jpg']
    }
}

export const viewport: Viewport = {
    themeColor: 'skyblue',
    width: 'device-width',
    initialScale: 1
}

export default function Page() {
    return (
        <span>作成中</span>
    )
}
