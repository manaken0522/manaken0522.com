<svelte:head>
    <title>manaken0522</title>
    <meta name="description" content="manaken0522のサイト" />
    <meta property="og:title" content="manaken0522" />
    <meta property="og:description" content="manaken0522のサイト" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://manaken0522.com" />
    <meta property="og:image" content="https://manaken0522.com/images/manaken0522.jpg" />
    <style>
        body {
            background-image: url("/images/background_photo.jpg");
            background-repeat: no-repeat;
            background-position-x: center;
            background-position-y: 25%;
            backdrop-filter: blur(4px);
        }

        div.main {
            color: white;
            font-size: 24px;
            text-shadow: black 1px 0 10px;
        }

        div.contacts > a > img {
            height: 48px;
        }
    </style>
</svelte:head>

<div class="main">
    <h1>Profile</h1>
    <img style="width: 256px; border-radius: 50%;" src="/images/manaken0522.jpg" alt="icon">
    <p>
        Name: <span style="font-weight: bold;">manaken0522</span><br>
        Country: <span style="font-weight: bold;">Japan</span><br>
        Birthday: <span style="font-weight: bold;">2007/05/22</span>
    </p>
    <div class="contacts">
        <h2>Contacts</h2>
        <a href="mailto:contact@manaken0522.com" target="_blank"><img src="/images/email.png" alt="Email"></a>
        <a href="https://www.youtube.com/@manaken0522" target="_blank"><img src="/images/youtube.png" alt="YouTube"></a>
        <a href="https://x.com/manaken0522" target="_blank"><img src="/images/x.png" alt="X/Twitter"></a>
        <a href="https://discord.gg/RMgmPRDbRQ" target="_blank"><img src="/images/discord.png" alt="Discord"></a>
        <a href="https://github.com/manaken0522" target="_blank"><img src="/images/github.png" alt="GitHub"></a>
        <a href="https://t.me/manaken0522" target="_blank"><img src="/images/telegram.png" alt="Telegram"></a>
        <a href="https://mastodon.social/@manaken0522" target="_blank"><img src="/images/mastodon.png" alt="Mastodon"></a>
        <a href="https://misskey.io/@manaken0522" target="_blank"><img src="/images/misskey.png" alt="Misskey"></a>
        <a href="https://bsky.app/profile/manaken0522.com" target="_blank"><img src="/images/bluesky.png" alt="Bluesky"></a>
    </div>
    <div style="text-align: right;">
        <a href="https://maps.app.goo.gl/sYDQzej61JEZaBzG8" target="_blank">
            <img src="/images/pin_drop.png" alt="Pin Drop" style="width: 48px;"><br>
        </a>
    </div>
</div>