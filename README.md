# このプロジェクトについて

## 概要
プロジェクト名：PoiTech (ぽいてっく)

`Qiita` や `Zenn` のような**技術系ブログサイト**を模倣したものです。

## 環境
- npm v.10.9.2
### React 関連
- React19 + TypeScript
- react-server
- react-md-editor
### スタイル
- Tailwind CSS
### クラウドデータベース
- Convex

## 起動方法
このプロジェクトのルートディレクトリで
```bash
npm install
```
を実行してください。

Convex のアカウントが無い方は以下のリンクから作成してください。

[Convex](https://www.convex.dev/ "Convex公式")

またプロジェクトのルートディレクトリで、
```bash
npx convex dev
```
を実行してください。

すると、以下の様にプロジェクト名を聞き返されるので任意の名前を記入します。
```bash
? What would you like to configure? create a new project
? Project name: tech-article
? Use cloud or local dev deployment? For more see 
https://docs.convex.dev/cli/local-deployments cloud deployment
✔ Created project tech-article, manage it at https://dashboard.convex.dev/t/watanabe-jin/tech-article
✔ Provisioned a dev deployment and saved its:
    name as CONVEX_DEPLOYMENT to .env.local
    URL as VITE_CONVEX_URL to .env.local
```

２回目以降の実行では、`npx convex dev` を実行しても聞き返されません。

この状態で別のターミナルを開き、プロジェクトのルートディレクトリで
```bash
npm run dev
```
を実行してください。

ブラウザで `http://localhost:3000/` にアクセスすれば、ブログアプリケーションを立ち上げられます。


## 参考
以下のサイトで `react-server` `convex` について、ハンズオン形式で説明してくれています。
私はこのチュートリアルをもとに `React` について勉強し、このブログサイトを作りました。

https://qiita.com/Sicut_study/items/1d5c4f2ddac621565ce2