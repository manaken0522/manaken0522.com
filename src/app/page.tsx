import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div style={{backgroundImage: "url('/images/background_photo.jpg')", backgroundRepeat: "no-repeat", backgroundPositionX: "center", backgroundPositionY: "25%"}}>
            <div className="w-full h-full mt-32 backdrop-blur-sm">
                <span className="text-4xl mx-auto">Profile</span>
                <Image src="/images/manaken0522.jpg" alt='icon' width={256} height={256} />
                <span className="text-3xl mx-auto">Contacts</span>
                <div className='flex justify-evenly'>
                    <Link href="mailto:manaken0522.0u767@slmail.me" target="_blank"><Image src="/images/email.png" alt="Email" width={48} height={48} /></Link>
                    <Link href="https://www.youtube.com/@manaken0522" target="_blank"><Image src="/images/youtube.png" alt="YouTube" width={48} height={48} /></Link>
                    <Link href="https://x.com/manaken0522" target="_blank"><Image src="/images/x.png" alt="X" width={48} height={48} /></Link>
                    <Link href="https://discord.gg/RMgmPRDbRQ" target="_blank"><Image src="/images/discord.png" alt="Discord" width={48} height={48} /></Link>
                    <Link href="https://github.com/manaken0522" target="_blank"><Image src="/images/github.png" alt="GitHub" width={48} height={48} /></Link>
                    <Link href="https://t.me/manaken0522" target="_blank"><Image src="/images/telegram.png" alt="Telegram" width={48} height={48} /></Link>
                </div>
            </div>
        </div>
    )
}
