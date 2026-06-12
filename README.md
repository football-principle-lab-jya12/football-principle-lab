# Football Principle Lab

> Discover the Principles Behind the Game.

サッカー戦術・指導論メディア「Football Principle Lab（FPL）」の静的Webサイトです。

## 構成

```
/
├── index.html          # トップページ
├── about.html          # Aboutページ
├── articles.html       # 記事一覧
├── article-1.html      # 個人戦術とは何か
├── article-2.html      # マークの原則とは何か
├── article-3.html      # カバーリングの原則とは何か
├── article-4.html      # なぜ失点分析が必要なのか
├── article-5.html      # 良いプレッシングとは何か
├── contact.html        # お問い合わせ
├── sitemap.xml
├── robots.txt
├── css/
│   └── style.css       # 全スタイル（Google Fonts使用）
└── js/
    ├── components.js   # 共通コンポーネント
    └── data.js         # 記事データ
```

## GitHub Pages での公開方法

1. このリポジトリを GitHub に push する
2. Settings → Pages → Source: `Deploy from a branch`
3. Branch: `main` / `(root)` を選択して Save
4. しばらくすると `https://<username>.github.io/<repo>/` で公開される

## ドメイン設定（カスタムドメイン）

1. DNS プロバイダーで CNAME を `<username>.github.io` に向ける
2. GitHub Pages の Custom domain に `footballprinciplelab.com` を入力
3. Enforce HTTPS にチェックを入れる

## 新規記事の追加

1. `article-N.html` をコピーして新しい記事ページを作成
2. `articles.html` の記事グリッドに `<article class="article-card">` を追加
3. `index.html` の最新記事・人気記事セクションを更新
4. `sitemap.xml` に新しい URL を追加
5. `js/data.js` の `ARTICLES` 配列にデータを追加

## SEO チェックリスト

- [ ] 各ページの `<title>` と `<meta name="description">` を確認
- [ ] Open Graph タグ（`og:title`, `og:description`, `og:url`）を設定
- [ ] 記事ページの構造化データ（`Article` スキーマ）を設定
- [ ] `sitemap.xml` を更新
- [ ] Google Search Console に登録

## 広告（Google AdSense）の導入

現在は広告枠がダミー表示になっています。AdSense 審査通過後：

1. AdSense のスクリプトを `<head>` に追加
2. 各広告ブロック（`.ad-block`）の HTML を AdSense コードに置き換える

広告枠の種類：
- 記事上部：728×90（リーダーボード）
- 記事下部：728×90（リーダーボード）
- サイドバー：300×250 / 300×600（レクタングル / ハーフページ）
