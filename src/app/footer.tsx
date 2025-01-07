import { headers } from "next/headers";
import Link from "next/link";

export default async function Footer() {
    let mirror_link;
    const hostname = (await headers()).get("X-Hostname");
    console.log(hostname);

    if (hostname != undefined) {
        if (hostname.split('.').slice(-1)[0] == 'onion') {
            mirror_link = "manaken0522.com";
        }
        else {
            mirror_link = "manakeneftm57kz5673nu6mzzhvw2tjlh4ruhb43hufy7shtqgxztyyd.onion";
        }
    }
    return (
        <div className="text-center bg-blue-500 text-white py-2">
            <span className="text-lg">
                Mirror: <Link href={"https://"+mirror_link}>{mirror_link}</Link>
            </span>
        </div>
    )
}