import Image from "next/image"
import Link from "next/link"
 
export default function Header() {
    return (
        <div className="bg-blue-500 text-white h-12 flex items-center justify-evenly">
            <div className="w-1/4">
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/images/manaken0522.jpg" width={32} height={32} alt="icon" className="mr-2"></Image>
                    <span className="text-xl">manaken0522</span>
                </Link>
            </div>
            <div className="w-2/4 flex justify-evenly text-lg">
                <Link href="/">Home</Link>
            </div>
            <div className="w-1/4 text-center text-gray-200 text-base">
                <Link href="https://github.com/manaken0522/manaken0522.com" target="_blank">Edit this site</Link>
            </div>
        </div>
    )
}