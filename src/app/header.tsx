import Image from "next/image"
import Link from "next/link"
 
export default function Header() {
    return (
        <div className="bg-blue-500 h-12 flex items-center">
            <div className="w-1/4 text-center text-white">
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/images/manaken0522.jpg" width={32} height={32} alt="icon" className="mr-2"></Image>
                    manaken0522
                </Link>
            </div>
            <div className="w-2/4 flex justify-evenly">
                <Link href="/">Home</Link>
            </div>
            <div className="w-1/4 text-center text-white">
                <Link href="https://github.com/manaken0522/manaken0522.com" target="_blank">Repository</Link>
            </div>
        </div>
    )
}