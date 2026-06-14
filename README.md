# Football Principle Lab

> Discover the Principles Behind the Game.

サッカー戦術・指導論メディア「Football Principle Lab（FPL）」の静的Webサイトです。

## コンセプト

「現象ではなく原則を語る」をコンセプトとしたサッカー戦術・指導論メディア。フットボールの背後にある原則を言語化し、コーチ・選手・分析担当者が学べる知識を体系化します。

## サイト構成

```
/
├── index.html          # トップページ
├── about.html          # Aboutページ
├── articles.html       # 記事一覧
├── article-6.html      # サッカーにおける「原理」と「原則」とは何か
├── article-7.html      # 優位性の本質を考える
├── contact.html        # お問い合わせ
├── logo.png            # FPLエンブレム
├── sitemap.xml
└── robots.txt
```

## カテゴリー

| No. | カテゴリー | 説明 |
|-----|-----------|------|
| 01 | Principles | サッカーの本質 |
| 02 | Individual Tactics | 個人戦術（サポート・マークなど） |
| 03 | Individual Skill | 個人スキルの習得と向上 |
| 04 | Training | コーチング・セッションデザイン |
| 05 | Analysis | 試合分析・得点・失点分析 |
| 06 | Play Models | 監督・チームのプレーモデル解析 |
| 07 | Special | 他の指導者・分析担当者による寄稿 |

## GitHub Pages での公開方法

1. このリポジトリを GitHub に push する
2. Settings → Pages → Source: `Deploy from a branch`
3. Branch: `main` / `(root)` を選択して Save
4. `https://<username>.github.io/<repo>/` で公開される

## 新規記事の追加

1. 既存の `article-6.html` or `article-7.html` をコピーして新しい記事ページを作成
2. `articles.html` の記事グリッドに追加
3. `index.html` の最新記事セクションを更新
4. `sitemap.xml` に新しい URL を追加

## 広告（Google AdSense）の導入

現在は広告枠がダミー表示。AdSense 審査通過後：

1. AdSense のスクリプトを `<head>` に追加
2. 各広告ブロック（`.ad-block`）を AdSense コードに置き換える

広告枠の種類：
- 記事上部：728×90（リーダーボード）
- 記事下部：728×90（リーダーボード）
- サイドバー：300×250 / 300×600
