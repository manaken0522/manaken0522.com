---
title: "モバイル版Discordアプリで複数アカウントを使う方法"
date: "2025-08-22T11:42:07.322Z"
tags: ["Discord", "Android"]
---

ネット用とリアル用、または界隈ごとなど、Discord のアカウントを複数個使い分けている方は多いと思います。  
Web ブラウザ版と PC 向けの Discord アプリであれば 2023 年の 4 月ごろに公式にアカウントの切り替え機能が実装されていますが、モバイル向けの Discord アプリでは 2025 年 8 月現在でもアカウントの切り替え機能は使えません。  
しかし改造クライアントを使うことでモバイル版でもアカウント切り替え機能を使うことができます。

改造クライアントとは…名前の通り Discord の公式クライアントに追加で拡張機能を入れたりカスタムテーマを入れたりすることができるように改造されたクライアントです(改造クライアント関連でアカウントが制限食らったという話は聞いたことありませんが、一応規約違反ということになっています)

モバイル版の改造クライアントはいろいろありますが、今回は[Revenge](https://github.com/revenge-mod)を使いましょう。

## どうすればいいの

Revenge を入れてください。
Android の場合[Xposed Module](https://github.com/revenge-mod/revenge-xposed)として導入するか、もしくは[Manager](https://github.com/revenge-mod/revenge-manager)で apk をパッチしてからインストールすることになると思います。  
iOS の場合[Tweak](https://github.com/revenge-mod/revenge-tweak)なるものがあるようです。が、リポジトリはアーカイブ状態にされています。

インストールしたら適当なアカウントでログインを済ませて、設定を開いて Revenge > Activate Discord Experiments を有効にします。  
次に Show Dev Tools > Experiment Overrides の検索バーに account switcher と入れると Mobile Account Switcher という項目が二つほど出てくるので Notifications じゃない方をタップして Treatment 1: Enable Account Switcher on Mobile に変更します。

ホームに戻り、プロフィールタブで自分のディスプレイネームをタップするとアカウントの切り替えという項目が追加されていると思います。

しかし、この Experiments という機能はテスト中の機能を有効化できるというものですから、アカウント切り替え機能の実装自体はされているということになります(裏に何かバグなどがあるのかもしれませんが)ので、今後のアップデートで使えるようになることがあるかもしれないです。
