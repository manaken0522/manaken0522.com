import Image from 'next/image';
import Link from 'next/link';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: 'manaken0522',
    description: 'manaken0522.com',
    icons: {
        icon: '/favicon.ico'
    },
    openGraph: {
        images: '/images/manaken0522.jpg',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'manaken0522',
        description: 'manaken0522.com',
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

export default function Page() {
    return (
        <div className='h-full' style={{backgroundImage: "url('/images/background_photo.jpg')", backgroundRepeat: "no-repeat", backgroundPositionX: "center", backgroundPositionY: "25%"}}>
            <div className='w-full h-full backdrop-blur-sm'>
                <div className="pt-32">
                    <h1 className="text-white font-bold text-5xl text-center" style={{textShadow: "#000000 0px 0 15px"}}>Profile</h1>
                    <Image className='mx-auto rounded-full my-4' src="/images/manaken0522.jpg" alt='icon' width={256} height={256} />
                    <h2 className="text-white font-bold text-4xl text-center my-4" style={{textShadow: "#000000 0px 0 15px"}}>Contacts</h2>
                    <span className='flex justify-center m-auto px-96'>
                        <Link className='mx-2' href="mailto:manaken0522.0u767@slmail.me" target="_blank"><Image src="/images/email.png" alt="Email" width={80} height={64} /></Link>
                        <Link className='mx-2' href="https://www.youtube.com/@manaken0522" target="_blank"><Image src="/images/youtube.png" alt="YouTube" width={90} height={64} /></Link>
                        <Link className='mx-2' href="https://x.com/manaken0522" target="_blank"><Image src="/images/x.png" alt="X" width={62} height={64} /></Link>
                        <Link className='mx-2' href="https://discord.gg/RMgmPRDbRQ" target="_blank"><Image src="/images/discord.png" alt="Discord" width={84} height={64} /></Link>
                        <Link className='mx-2' href="https://github.com/manaken0522" target="_blank"><Image src="/images/github.png" alt="GitHub" width={64} height={64} /></Link>
                        <Link className='mx-2' href="https://t.me/manaken0522" target="_blank"><Image src="/images/telegram.png" alt="Telegram" width={64} height={64} /></Link>
                    </span>
                    <Link href="https://maps.app.goo.gl/sYDQzej61JEZaBzG8" target="_blank"><Image className="justify-self-end" src="/images/pin_drop.png" alt='Pin Drop' width={48} height={48} /></Link>
                </div>
            </div>
        </div>
    )
}
