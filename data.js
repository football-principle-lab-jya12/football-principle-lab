/* ============================================================
   Football Principle Lab — data.js
   ----------------------------------------------------------
   記事・カテゴリーの唯一の管理場所です。

   ■ 記事を追加するとき
     ARTICLES 配列の先頭付近に新しいオブジェクトを追加してください。
     id は他の記事と重複しない番号にしてください（ファイル名の
     article-XX.html の数字と合わせるのが分かりやすいです）。

   ■ 記事を削除するとき
     ARTICLES 配列から該当オブジェクトを削除するだけでOKです。
     トップページの最新記事・記事一覧ページ・各記事の関連記事欄は
     すべてここから自動生成されるため、他のHTMLを手で直す必要は
     ありません。

   ■ カテゴリーを追加/変更するとき
     CATEGORIES 配列を編集してください。順番はこの配列の順番が
     そのまま表示順になります。
   ============================================================ */

const CATEGORIES = [
  { slug: 'principles', label: 'Principles',         desc: 'サッカーの本質' },
  { slug: 'individual',  label: 'Individual Tactics', desc: '個人戦術（サポート・マークなど）' },
  { slug: 'skill',       label: 'Individual Skill',   desc: '個人スキルの習得と向上' },
  { slug: 'training',    label: 'Training',           desc: 'コーチング・セッションデザイン' },
  { slug: 'analysis',    label: 'Analysis',            desc: '試合分析・得点・失点分析' },
  { slug: 'playmodels',  label: 'Play Models',         desc: '監督・チームのプレーモデル解析' },
  { slug: 'special',     label: 'Special',             desc: '他の指導者・分析担当者による寄稿' }
];

/*
  各記事オブジェクトの項目:
    id        : 数値。article-{id}.html というファイル名と対応させる
    url       : 記事ページのファイル名
    title     : 記事タイトル
    excerpt   : 一覧やカードに表示する要約文
    category  : CATEGORIES の slug のいずれか
    date      : 'YYYY-MM-DD' 形式（並び替え・表示に利用）
    readTime  : 表示用の読了時間文字列
    tags      : タグの配列（検索・カード下部のタグ表示に利用）
    thumbnail : カード表示用サムネイル画像URL
*/
const ARTICLES = [
  {
    id: 7,
    url: 'article-7.html',
    title: '優位性の本質を考える',
    excerpt: '数的優位・位置的優位・質的優位・関係的優位性・方向的優位性。それぞれの優位性がどのようにつながり、何を生み出すのかを考察する。',
    category: 'principles',
    date: '2025-06-13',
    readTime: '8 min read',
    tags: ['優位性', '数的優位'],
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&auto=format&fit=crop&q=70'
  },
  {
    id: 6,
    url: 'article-6.html',
    title: 'サッカーにおける「原理」と「原則」とは何か',
    excerpt: '戦術の前に理解すべき土台。「原理」と「原則」の違いを整理し、本質から逆算して戦術を考えるための第一歩を解説する。',
    category: 'principles',
    date: '2025-06-13',
    readTime: '5 min read',
    tags: ['原理', '原則'],
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&auto=format&fit=crop&q=70'
  }
];
