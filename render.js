/* ============================================================
   Football Principle Lab — render.js
   ----------------------------------------------------------
   data.js (CATEGORIES, ARTICLES) を読み込んで、各ページの
   記事カード・関連記事・件数表示などを自動生成します。

   このファイルは編集不要です。記事の追加/削除/カテゴリー変更は
   data.js のみを編集してください。

   読み込み順: data.js → render.js → (各ページ既存のスクリプト)
   ============================================================ */

(function () {

  function getCategory(slug) {
    return CATEGORIES.find(function (c) { return c.slug === slug; }) || null;
  }

  function categoryCount(slug) {
    return ARTICLES.filter(function (a) { return a.category === slug; }).length;
  }

  function formatDate(iso) {
    return iso.replace(/-/g, '.');
  }

  // 日付が古い順に並べたコピー。発行順の連番（No.001, No.002...）に使う
  var byDateAsc = ARTICLES.slice().sort(function (a, b) {
    return new Date(a.date) - new Date(b.date) || a.id - b.id;
  });

  function publishNumber(article) {
    var idx = byDateAsc.indexOf(article);
    return 'No. ' + String(idx + 1).padStart(3, '0');
  }

  // 新しい順に並べたコピー。最新記事一覧・記事一覧ページの表示順に使う
  function byDateDesc() {
    return ARTICLES.slice().sort(function (a, b) {
      return new Date(b.date) - new Date(a.date) || b.id - a.id;
    });
  }

  function tagPillsHTML(tags) {
    return tags.map(function (t) {
      return '<span style="font-family:var(--font-mono);font-size:0.6rem;color:var(--gray-400);' +
        'background:var(--gray-100);padding:0.15rem 0.5rem;">#' + t + '</span>';
    }).join('');
  }

  // opts: { featured, showExcerpt, showTags, withFilterAttrs, imgWidth, loading }
  function articleCardHTML(article, opts) {
    opts = opts || {};
    var cat = getCategory(article.category);
    var classes = 'article-card' + (opts.featured ? ' article-card--featured' : '');
    var filterAttrs = opts.withFilterAttrs
      ? ' data-cat="' + article.category + '" data-tags="' + article.tags.join(',') + '"'
      : '';
    var imgW = opts.imgWidth || 600;
    var loading = opts.loading || 'lazy';
    var excerptHTML = opts.showExcerpt
      ? '<p class="card-excerpt">' + article.excerpt + '</p>'
      : '';
    var tagsHTML = opts.showTags
      ? '<div style="margin-top:0.75rem;display:flex;flex-wrap:wrap;gap:0.35rem;">' + tagPillsHTML(article.tags) + '</div>'
      : '';

    return (
      '<article class="' + classes + '"' + filterAttrs + '>' +
        '<img class="card-thumbnail" src="' + article.thumbnail.replace(/w=\d+/, 'w=' + imgW) + '" alt="' + article.title + '" loading="' + loading + '">' +
        '<div class="card-body">' +
          '<div class="card-number mono">' + publishNumber(article) + '</div>' +
          '<span class="card-category">' + (cat ? cat.label : '') + '</span>' +
          '<h3 class="card-title"><a href="' + article.url + '">' + article.title + '</a></h3>' +
          excerptHTML +
          '<div class="card-meta"><span>' + formatDate(article.date) + '</span><span>' + article.readTime + '</span></div>' +
          tagsHTML +
        '</div>' +
      '</article>'
    );
  }

  function relatedCardHTML(article) {
    var cat = getCategory(article.category);
    return (
      '<article class="article-card">' +
        '<img class="card-thumbnail" src="' + article.thumbnail + '" alt="' + article.title + '" loading="lazy">' +
        '<div class="card-body">' +
          '<span class="card-category">' + (cat ? cat.label : '') + '</span>' +
          '<h3 class="card-title"><a href="' + article.url + '">' + article.title + '</a></h3>' +
          '<div class="card-meta"><span>' + formatDate(article.date) + '</span><span>' + article.readTime + '</span></div>' +
        '</div>' +
      '</article>'
    );
  }

  // ---- index.html: 最新記事 ----
  var latestGrid = document.getElementById('latestArticlesGrid');
  if (latestGrid) {
    var latest = byDateDesc().slice(0, 2);
    latestGrid.innerHTML = latest.map(function (a, i) {
      return articleCardHTML(a, { featured: i === 0, showExcerpt: true, imgWidth: i === 0 ? 900 : 600, loading: i === 0 ? 'eager' : 'lazy' });
    }).join('');
  }

  // ---- index.html: ヒーロー統計（公開記事数・カテゴリー数） ----
  var heroArticleCount = document.getElementById('heroArticleCount');
  if (heroArticleCount) heroArticleCount.textContent = ARTICLES.length;
  var heroCategoryCount = document.getElementById('heroCategoryCount');
  if (heroCategoryCount) heroCategoryCount.textContent = CATEGORIES.length;

  // ---- index.html: クイックアクセスナビ ----
  var quickAccessNav = document.getElementById('quickAccessNav');
  if (quickAccessNav) {
    var qaHTML = '<a href="articles.html" class="quick-access-item"><span class="dot"></span>All Articles</a>';
    CATEGORIES.forEach(function (c) {
      qaHTML += '<a href="articles.html?cat=' + c.slug + '" class="quick-access-item"><span class="dot"></span>' + c.label + '</a>';
    });
    quickAccessNav.innerHTML = qaHTML;
  }

  // ---- index.html: カテゴリーグリッド ----
  var categoryGrid = document.getElementById('categoryGrid');
  if (categoryGrid) {
    categoryGrid.innerHTML = CATEGORIES.map(function (c, i) {
      var count = categoryCount(c.slug);
      return (
        '<a href="articles.html?cat=' + c.slug + '" class="category-item">' +
          '<div class="category-num mono">' + String(i + 1).padStart(2, '0') + '</div>' +
          '<div class="category-name">' + c.label + '</div>' +
          '<div class="category-count mono">' + count + ' articles</div>' +
          '<p class="category-desc">' + c.desc + '</p>' +
        '</a>'
      );
    }).join('');
  }

  // ---- articles.html: 記事一覧 + 件数 + フィルターボタン ----
  var articlesList = document.getElementById('articlesList');
  if (articlesList) {
    var all = byDateDesc();
    articlesList.innerHTML = all.map(function (a) {
      return articleCardHTML(a, { showExcerpt: true, showTags: true, withFilterAttrs: true, imgWidth: 600, loading: 'lazy' });
    }).join('');

    var articleCountEl = document.getElementById('articleCount');
    if (articleCountEl) articleCountEl.textContent = all.length;

    var filterBar = document.getElementById('filterBar');
    if (filterBar) {
      var fbHTML = '<button class="filter-btn active" data-cat="all">All</button>';
      CATEGORIES.forEach(function (c) {
        fbHTML += '<button class="filter-btn" data-cat="' + c.slug + '">' + c.label + '</button>';
      });
      filterBar.innerHTML = fbHTML;
    }
  }

  // ---- 記事ページ: 関連記事（同カテゴリーから自動選出・公開中のみ） ----
  var relatedGrid = document.getElementById('relatedArticlesGrid');
  if (relatedGrid) {
    var currentFile = location.pathname.split('/').pop();
    var current = ARTICLES.find(function (a) { return a.url === currentFile; });

    if (!current) {
      var section = relatedGrid.closest('.related');
      if (section) section.style.display = 'none';
    } else {
      var related = ARTICLES
        .filter(function (a) { return a.category === current.category && a.id !== current.id; })
        .sort(function (a, b) { return new Date(b.date) - new Date(a.date); })
        .slice(0, 3);

      if (related.length === 0) {
        var sectionEmpty = relatedGrid.closest('.related');
        if (sectionEmpty) sectionEmpty.style.display = 'none';
      } else {
        relatedGrid.innerHTML = related.map(relatedCardHTML).join('');
      }
    }
  }

})();
