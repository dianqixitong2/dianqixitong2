<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
  <meta name="generator" content="distill" />

  <style type="text/css">
  /* Hide doc at startup (prevent jankiness while JS renders/transforms) */
  body {
    visibility: hidden;
  }
  </style>

 <!--radix_placeholder_import_source-->
 <!--/radix_placeholder_import_source-->

<style type="text/css">code{white-space: pre;}</style>
<style type="text/css" data-origin="pandoc">
pre > code.sourceCode { white-space: pre; position: relative; }
pre > code.sourceCode > span { display: inline-block; line-height: 1.25; }
pre > code.sourceCode > span:empty { height: 1.2em; }
.sourceCode { overflow: visible; }
code.sourceCode > span { color: inherit; text-decoration: inherit; }
div.sourceCode { margin: 1em 0; }
pre.sourceCode { margin: 0; }
@media screen {
div.sourceCode { overflow: auto; }
}
@media print {
pre > code.sourceCode { white-space: pre-wrap; }
pre > code.sourceCode > span { text-indent: -5em; padding-left: 5em; }
}
pre.numberSource code
  { counter-reset: source-line 0; }
pre.numberSource code > span
  { position: relative; left: -4em; counter-increment: source-line; }
pre.numberSource code > span > a:first-child::before
  { content: counter(source-line);
    position: relative; left: -1em; text-align: right; vertical-align: baseline;
    border: none; display: inline-block;
    -webkit-touch-callout: none; -webkit-user-select: none;
    -khtml-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
    padding: 0 4px; width: 4em;
    color: #aaaaaa;
  }
pre.numberSource { margin-left: 3em; border-left: 1px solid #aaaaaa;  padding-left: 4px; }
div.sourceCode
  {   }
@media screen {
pre > code.sourceCode > span > a:first-child::before { text-decoration: underline; }
}
code span.al { color: #ff0000; } /* Alert */
code span.an { color: #008000; } /* Annotation */
code span.at { } /* Attribute */
code span.bu { } /* BuiltIn */
code span.cf { color: #0000ff; } /* ControlFlow */
code span.ch { color: #008080; } /* Char */
code span.cn { color: #585cf6; } /* Constant */
code span.co { color: #4c886b; } /* Comment */
code span.cv { color: #008000; } /* CommentVar */
code span.do { color: #008000; } /* Documentation */
code span.dv { color: #0000cd; } /* DecVal */
code span.er { color: #ff0000; font-weight: bold; } /* Error */
code span.ex { } /* Extension */
code span.fl { color: #0000cd; } /* Float */
code span.im { } /* Import */
code span.in { color: #008000; } /* Information */
code span.kw { color: #0000ff; } /* Keyword */
code span.op { color: #687687; } /* Operator */
code span.ot { color: #ff4000; } /* Other */
code span.pp { color: #ff4000; } /* Preprocessor */
code span.sc { color: #008080; } /* SpecialChar */
code span.ss { color: #008080; } /* SpecialString */
code span.st { color: #036a07; } /* String */
code span.va { } /* Variable */
code span.vs { color: #008080; } /* VerbatimString */
code span.wa { color: #008000; font-weight: bold; } /* Warning */
</style>


  <!--radix_placeholder_meta_tags-->
  <title>Distill for R Markdown: Creating a Blog</title>

  <meta property="description" itemprop="description" content="Create a blog to publish a collection of Distill articles"/>

  <link rel="license" href="https://creativecommons.org/licenses/by/4.0/"/>
  <link rel="icon" type="image/png" href="images/favicon.png"/>


  <!--  https://developers.facebook.com/docs/sharing/webmasters#markup -->
  <meta property="og:title" content="Distill for R Markdown: Creating a Blog"/>
  <meta property="og:type" content="article"/>
  <meta property="og:description" content="Create a blog to publish a collection of Distill articles"/>
  <meta property="og:locale" content="en_US"/>
  <meta property="og:site_name" content="Distill for R Markdown"/>

  <!--  https://dev.twitter.com/cards/types/summary -->
  <meta property="twitter:card" content="summary"/>
  <meta property="twitter:title" content="Distill for R Markdown: Creating a Blog"/>
  <meta property="twitter:description" content="Create a blog to publish a collection of Distill articles"/>

  <!--/radix_placeholder_meta_tags-->
  <!--radix_placeholder_rmarkdown_metadata-->

  <script type="text/json" id="radix-rmarkdown-metadata">
  {"type":"list","attributes":{"names":{"type":"character","attributes":{},"value":["title","description"]}},"value":[{"type":"character","attributes":{},"value":["Creating a Blog"]},{"type":"character","attributes":{},"value":["Create a blog to publish a collection of Distill articles"]}]}
  </script>
  <!--/radix_placeholder_rmarkdown_metadata-->
  <!--radix_placeholder_navigation_in_header-->
  <meta name="distill:offset" content=""/>

  <script type="application/javascript">

    window.headroom_prevent_pin = false;

    window.document.addEventListener("DOMContentLoaded", function (event) {

      // initialize headroom for banner
      var header = $('header').get(0);
      var headerHeight = header.offsetHeight;
      var headroom = new Headroom(header, {
        tolerance: 5,
        onPin : function() {
          if (window.headroom_prevent_pin) {
            window.headroom_prevent_pin = false;
            headroom.unpin();
          }
        }
      });
      headroom.init();
      if(window.location.hash)
        headroom.unpin();
      $(header).addClass('headroom--transition');

      // offset scroll location for banner on hash change
      // (see: https://github.com/WickyNilliams/headroom.js/issues/38)
      window.addEventListener("hashchange", function(event) {
        window.scrollTo(0, window.pageYOffset - (headerHeight + 25));
      });

      // responsive menu
      $('.distill-site-header').each(function(i, val) {
        var topnav = $(this);
        var toggle = topnav.find('.nav-toggle');
        toggle.on('click', function() {
          topnav.toggleClass('responsive');
        });
      });

      // nav dropdowns
      $('.nav-dropbtn').click(function(e) {
        $(this).next('.nav-dropdown-content').toggleClass('nav-dropdown-active');
        $(this).parent().siblings('.nav-dropdown')
           .children('.nav-dropdown-content').removeClass('nav-dropdown-active');
      });
      $("body").click(function(e){
        $('.nav-dropdown-content').removeClass('nav-dropdown-active');
      });
      $(".nav-dropdown").click(function(e){
        e.stopPropagation();
      });
    });
  </script>

  <style type="text/css">

  /* Theme (user-documented overrideables for nav appearance) */

  .distill-site-nav {
    color: rgba(255, 255, 255, 0.8);
    background-color: #0F2E3D;
    font-size: 15px;
    font-weight: 300;
  }

  .distill-site-nav a {
    color: inherit;
    text-decoration: none;
  }

  .distill-site-nav a:hover {
    color: white;
  }

  @media print {
    .distill-site-nav {
      display: none;
    }
  }

  .distill-site-header {

  }

  .distill-site-footer {

  }


  /* Site Header */

  .distill-site-header {
    width: 100%;
    box-sizing: border-box;
    z-index: 3;
  }

  .distill-site-header .nav-left {
    display: inline-block;
    margin-left: 8px;
  }

  @media screen and (max-width: 768px) {
    .distill-site-header .nav-left {
      margin-left: 0;
    }
  }


  .distill-site-header .nav-right {
    float: right;
    margin-right: 8px;
  }

  .distill-site-header a,
  .distill-site-header .title {
    display: inline-block;
    text-align: center;
    padding: 14px 10px 14px 10px;
  }

  .distill-site-header .title {
    font-size: 18px;
    min-width: 150px;
  }

  .distill-site-header .logo {
    padding: 0;
  }

  .distill-site-header .logo img {
    display: none;
    max-height: 20px;
    width: auto;
    margin-bottom: -4px;
  }

  .distill-site-header .nav-image img {
    max-height: 18px;
    width: auto;
    display: inline-block;
    margin-bottom: -3px;
  }



  @media screen and (min-width: 1000px) {
    .distill-site-header .logo img {
      display: inline-block;
    }
    .distill-site-header .nav-left {
      margin-left: 20px;
    }
    .distill-site-header .nav-right {
      margin-right: 20px;
    }
    .distill-site-header .title {
      padding-left: 12px;
    }
  }


  .distill-site-header .nav-toggle {
    display: none;
  }

  .nav-dropdown {
    display: inline-block;
    position: relative;
  }

  .nav-dropdown .nav-dropbtn {
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.8);
    padding: 16px 10px;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    margin-top: 1px;
    z-index: 2;
  }

  .nav-dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 200px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    margin-top: 2px;
    white-space: nowrap;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .nav-dropdown-content hr {
    margin-top: 4px;
    margin-bottom: 4px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .nav-dropdown-active {
    display: block;
  }

  .nav-dropdown-content a, .nav-dropdown-content .nav-dropdown-header {
    color: black;
    padding: 6px 24px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .nav-dropdown-content .nav-dropdown-header {
    display: block;
    padding: 5px 24px;
    padding-bottom: 0;
    text-transform: uppercase;
    font-size: 14px;
    color: #999999;
    white-space: nowrap;
  }

  .nav-dropdown:hover .nav-dropbtn {
    color: white;
  }

  .nav-dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }

  .nav-right .nav-dropdown-content {
    margin-left: -45%;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    .distill-site-header a, .distill-site-header .nav-dropdown  {display: none;}
    .distill-site-header a.nav-toggle {
      float: right;
      display: block;
    }
    .distill-site-header .title {
      margin-left: 0;
    }
    .distill-site-header .nav-right {
      margin-right: 0;
    }
    .distill-site-header {
      overflow: hidden;
    }
    .nav-right .nav-dropdown-content {
      margin-left: 0;
    }
  }


  @media screen and (max-width: 768px) {
    .distill-site-header.responsive {position: relative; min-height: 500px; }
    .distill-site-header.responsive a.nav-toggle {
      position: absolute;
      right: 0;
      top: 0;
    }
    .distill-site-header.responsive a,
    .distill-site-header.responsive .nav-dropdown {
      display: block;
      text-align: left;
    }
    .distill-site-header.responsive .nav-left,
    .distill-site-header.responsive .nav-right {
      width: 100%;
    }
    .distill-site-header.responsive .nav-dropdown {float: none;}
    .distill-site-header.responsive .nav-dropdown-content {position: relative;}
    .distill-site-header.responsive .nav-dropdown .nav-dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }

  /* Site Footer */

  .distill-site-footer {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 3;
    margin-top: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
  }

  /* Headroom */

  d-title {
    padding-top: 6rem;
  }

  @media print {
    d-title {
      padding-top: 4rem;
    }
  }

  .headroom {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .headroom--transition {
    transition: all .4s ease-in-out;
  }

  .headroom--unpinned {
    top: -100px;
  }

  .headroom--pinned {
    top: 0;
  }

  /* adjust viewport for navbar height */
  /* helps vertically center bootstrap (non-distill) content */
  .min-vh-100 {
    min-height: calc(100vh - 100px) !important;
  }

  </style>

  <script src="site_libs/jquery-3.6.0/jquery-3.6.0.min.js"></script>
  <link href="site_libs/font-awesome-5.1.0/css/all.css" rel="stylesheet"/>
  <link href="site_libs/font-awesome-5.1.0/css/v4-shims.css" rel="stylesheet"/>
  <script src="site_libs/headroom-0.9.4/headroom.min.js"></script>
  <script src="site_libs/autocomplete-0.37.1/autocomplete.min.js"></script>
  <script src="site_libs/fuse-6.4.1/fuse.min.js"></script>

  <script type="application/javascript">

  function getMeta(metaName) {
    var metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
    return '';
  }

  function offsetURL(url) {
    var offset = getMeta('distill:offset');
    return offset ? offset + '/' + url : url;
  }

  function createFuseIndex() {

    // create fuse index
    var options = {
      keys: [
        { name: 'title', weight: 20 },
        { name: 'categories', weight: 15 },
        { name: 'description', weight: 10 },
        { name: 'contents', weight: 5 },
      ],
      ignoreLocation: true,
      threshold: 0
    };
    var fuse = new window.Fuse([], options);

    // fetch the main search.json
    return fetch(offsetURL('search.json'))
      .then(function(response) {
        if (response.status == 200) {
          return response.json().then(function(json) {
            // index main articles
            json.articles.forEach(function(article) {
              fuse.add(article);
            });
            // download collections and index their articles
            return Promise.all(json.collections.map(function(collection) {
              return fetch(offsetURL(collection)).then(function(response) {
                if (response.status === 200) {
                  return response.json().then(function(articles) {
                    articles.forEach(function(article) {
                      fuse.add(article);
                    });
                  })
                } else {
                  return Promise.reject(
                    new Error('Unexpected status from search index request: ' +
                              response.status)
                  );
                }
              });
            })).then(function() {
              return fuse;
            });
          });

        } else {
          return Promise.reject(
            new Error('Unexpected status from search index request: ' +
                        response.status)
          );
        }
      });
  }

  window.document.addEventListener("DOMContentLoaded", function (event) {

    // get search element (bail if we don't have one)
    var searchEl = window.document.getElementById('distill-search');
    if (!searchEl)
      return;

    createFuseIndex()
      .then(function(fuse) {

        // make search box visible
        searchEl.classList.remove('hidden');

        // initialize autocomplete
        var options = {
          autoselect: true,
          hint: false,
          minLength: 2,
        };
        window.autocomplete(searchEl, options, [{
          source: function(query, callback) {
            const searchOptions = {
              isCaseSensitive: false,
              shouldSort: true,
              minMatchCharLength: 2,
              limit: 10,
            };
            var results = fuse.search(query, searchOptions);
            callback(results
              .map(function(result) { return result.item; })
            );
          },
          templates: {
            suggestion: function(suggestion) {
              var img = suggestion.preview && Object.keys(suggestion.preview).length > 0
                ? `<img src="${offsetURL(suggestion.preview)}"</img>`
                : '';
              var html = `
                <div class="search-item">
                  <h3>${suggestion.title}</h3>
                  <div class="search-item-description">
                    ${suggestion.description || ''}
                  </div>
                  <div class="search-item-preview">
                    ${img}
                  </div>
                </div>
              `;
              return html;
            }
          }
        }]).on('autocomplete:selected', function(event, suggestion) {
          window.location.href = offsetURL(suggestion.path);
        });
        // remove inline display style on autocompleter (we want to
        // manage responsive display via css)
        $('.algolia-autocomplete').css("display", "");
      })
      .catch(function(error) {
        console.log(error);
      });

  });

  </script>

  <style type="text/css">

  .nav-search {
    font-size: x-small;
  }

  /* Algolioa Autocomplete */

  .algolia-autocomplete {
    display: inline-block;
    margin-left: 10px;
    vertical-align: sub;
    background-color: white;
    color: black;
    padding: 6px;
    padding-top: 8px;
    padding-bottom: 0;
    border-radius: 6px;
    border: 1px #0F2E3D solid;
    width: 180px;
  }


  @media screen and (max-width: 768px) {
    .distill-site-nav .algolia-autocomplete {
      display: none;
      visibility: hidden;
    }
    .distill-site-nav.responsive .algolia-autocomplete {
      display: inline-block;
      visibility: visible;
    }
    .distill-site-nav.responsive .algolia-autocomplete .aa-dropdown-menu {
      margin-left: 0;
      width: 400px;
      max-height: 400px;
    }
  }

  .algolia-autocomplete .aa-input, .algolia-autocomplete .aa-hint {
    width: 90%;
    outline: none;
    border: none;
  }

  .algolia-autocomplete .aa-hint {
    color: #999;
  }
  .algolia-autocomplete .aa-dropdown-menu {
    width: 550px;
    max-height: 70vh;
    overflow-x: visible;
    overflow-y: scroll;
    padding: 5px;
    margin-top: 3px;
    margin-left: -150px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #999;
    border-top: none;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion {
    cursor: pointer;
    padding: 5px 4px;
    border-bottom: 1px solid #eee;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion:last-of-type {
    border-bottom: none;
    margin-bottom: 2px;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item {
    overflow: hidden;
    font-size: 0.8em;
    line-height: 1.4em;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item h3 {
    font-size: 1rem;
    margin-block-start: 0;
    margin-block-end: 5px;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-description {
    display: inline-block;
    overflow: hidden;
    height: 2.8em;
    width: 80%;
    margin-right: 4%;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview {
    display: inline-block;
    width: 15%;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview img {
    height: 3em;
    width: auto;
    display: none;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview img[src] {
    display: initial;
  }

  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion.aa-cursor {
    background-color: #eee;
  }
  .algolia-autocomplete .aa-dropdown-menu .aa-suggestion em {
    font-weight: bold;
    font-style: normal;
  }

  </style>


  <!--/radix_placeholder_navigation_in_header-->
  <!--radix_placeholder_distill-->

  <style type="text/css">

  body {
    background-color: white;
  }

  .pandoc-table {
    width: 100%;
  }

  .pandoc-table>caption {
    margin-bottom: 10px;
  }

  .pandoc-table th:not([align]) {
    text-align: left;
  }

  .pagedtable-footer {
    font-size: 15px;
  }

  d-byline .byline {
    grid-template-columns: 2fr 2fr;
  }

  d-byline .byline h3 {
    margin-block-start: 1.5em;
  }

  d-byline .byline .authors-affiliations h3 {
    margin-block-start: 0.5em;
  }

  .authors-affiliations .orcid-id {
    width: 16px;
    height:16px;
    margin-left: 4px;
    margin-right: 4px;
    vertical-align: middle;
    padding-bottom: 2px;
  }

  d-title .dt-tags {
    margin-top: 1em;
    grid-column: text;
  }

  .dt-tags .dt-tag {
    text-decoration: none;
    display: inline-block;
    color: rgba(0,0,0,0.6);
    padding: 0em 0.4em;
    margin-right: 0.5em;
    margin-bottom: 0.4em;
    font-size: 70%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: 500;
  }

  d-article table.gt_table td,
  d-article table.gt_table th {
    border-bottom: none;
    font-size: 100%;
  }

  .html-widget {
    margin-bottom: 2.0em;
  }

  .l-screen-inset {
    padding-right: 16px;
  }

  .l-screen .caption {
    margin-left: 10px;
  }

  .shaded {
    background: rgb(247, 247, 247);
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shaded .html-widget {
    margin-bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shaded .shaded-content {
    background: white;
  }

  .text-output {
    margin-top: 0;
    line-height: 1.5em;
  }

  .hidden {
    display: none !important;
  }

  d-article {
    padding-top: 2.5rem;
    padding-bottom: 30px;
  }

  d-appendix {
    padding-top: 30px;
  }

  d-article>p>img {
    width: 100%;
  }

  d-article h2 {
    margin: 1rem 0 1.5rem 0;
  }

  d-article h3 {
    margin-top: 1.5rem;
  }

  d-article iframe {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 2.0em;
    width: 100%;
  }

  /* Tweak code blocks */

  d-article div.sourceCode code,
  d-article pre code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  d-article pre,
  d-article div.sourceCode,
  d-article div.sourceCode pre {
    overflow: auto;
  }

  d-article div.sourceCode {
    background-color: white;
  }

  d-article div.sourceCode pre {
    padding-left: 10px;
    font-size: 12px;
    border-left: 2px solid rgba(0,0,0,0.1);
  }

  d-article pre {
    font-size: 12px;
    color: black;
    background: none;
    margin-top: 0;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  d-article pre a {
    border-bottom: none;
  }

  d-article pre a:hover {
    border-bottom: none;
    text-decoration: underline;
  }

  d-article details {
    grid-column: text;
    margin-bottom: 0.8em;
  }

  @media(min-width: 768px) {

  d-article pre,
  d-article div.sourceCode,
  d-article div.sourceCode pre {
    overflow: visible !important;
  }

  d-article div.sourceCode pre {
    padding-left: 18px;
    font-size: 14px;
  }

  d-article pre {
    font-size: 14px;
  }

  }

  figure img.external {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    padding: 18px;
    box-sizing: border-box;
  }

  /* CSS for d-contents */

  .d-contents {
    grid-column: text;
    color: rgba(0,0,0,0.8);
    font-size: 0.9em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
    padding-left: 0.25em;
    justify-self: start;
  }

  @media(min-width: 1000px) {
    .d-contents.d-contents-float {
      height: 0;
      grid-column-start: 1;
      grid-column-end: 4;
      justify-self: center;
      padding-right: 3em;
      padding-left: 2em;
    }
  }

  .d-contents nav h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 1em;
  }

  .d-contents li {
    list-style-type: none
  }

  .d-contents nav > ul {
    padding-left: 0;
  }

  .d-contents ul {
    padding-left: 1em
  }

  .d-contents nav ul li {
    margin-top: 0.6em;
    margin-bottom: 0.2em;
  }

  .d-contents nav a {
    font-size: 13px;
    border-bottom: none;
    text-decoration: none
    color: rgba(0, 0, 0, 0.8);
  }

  .d-contents nav a:hover {
    text-decoration: underline solid rgba(0, 0, 0, 0.6)
  }

  .d-contents nav > ul > li > a {
    font-weight: 600;
  }

  .d-contents nav > ul > li > ul {
    font-weight: inherit;
  }

  .d-contents nav > ul > li > ul > li {
    margin-top: 0.2em;
  }


  .d-contents nav ul {
    margin-top: 0;
    margin-bottom: 0.25em;
  }

  .d-article-with-toc h2:nth-child(2) {
    margin-top: 0;
  }


  /* Figure */

  .figure {
    position: relative;
    margin-bottom: 2.5em;
    margin-top: 1.5em;
  }

  .figure .caption {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    line-height: 1.5em;
  }

  .figure img.external {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    padding: 18px;
    box-sizing: border-box;
  }

  .figure .caption a {
    color: rgba(0, 0, 0, 0.6);
  }

  .figure .caption b,
  .figure .caption strong, {
    font-weight: 600;
    color: rgba(0, 0, 0, 1.0);
  }

  /* Citations */

  d-article .citation {
    color: inherit;
    cursor: inherit;
  }

  div.hanging-indent{
    margin-left: 1em; text-indent: -1em;
  }

  /* Citation hover box */

  .tippy-box[data-theme~=light-border] {
    background-color: rgba(250, 250, 250, 0.95);
  }

  .tippy-content > p {
    margin-bottom: 0;
    padding: 2px;
  }


  /* Tweak 1000px media break to show more text */

  @media(min-width: 1000px) {
    .base-grid,
    distill-header,
    d-title,
    d-abstract,
    d-article,
    d-appendix,
    distill-appendix,
    d-byline,
    d-footnote-list,
    d-citation-list,
    distill-footer {
      grid-template-columns: [screen-start] 1fr [page-start kicker-start] 80px [middle-start] 50px [text-start kicker-end] 65px 65px 65px 65px 65px 65px 65px 65px [text-end gutter-start] 65px [middle-end] 65px [page-end gutter-end] 1fr [screen-end];
      grid-column-gap: 16px;
    }

    .grid {
      grid-column-gap: 16px;
    }

    d-article {
      font-size: 1.06rem;
      line-height: 1.7em;
    }
    figure .caption, .figure .caption, figure figcaption {
      font-size: 13px;
    }
  }

  @media(min-width: 1180px) {
    .base-grid,
    distill-header,
    d-title,
    d-abstract,
    d-article,
    d-appendix,
    distill-appendix,
    d-byline,
    d-footnote-list,
    d-citation-list,
    distill-footer {
      grid-template-columns: [screen-start] 1fr [page-start kicker-start] 60px [middle-start] 60px [text-start kicker-end] 60px 60px 60px 60px 60px 60px 60px 60px [text-end gutter-start] 60px [middle-end] 60px [page-end gutter-end] 1fr [screen-end];
      grid-column-gap: 32px;
    }

    .grid {
      grid-column-gap: 32px;
    }
  }


  /* Get the citation styles for the appendix (not auto-injected on render since
     we do our own rendering of the citation appendix) */

  d-appendix .citation-appendix,
  .d-appendix .citation-appendix {
    font-size: 11px;
    line-height: 15px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 18px;
    border: 1px solid rgba(0,0,0,0.1);
    background: rgba(0, 0, 0, 0.02);
    padding: 10px 18px;
    border-radius: 3px;
    color: rgba(150, 150, 150, 1);
    overflow: hidden;
    margin-top: -12px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /* Include appendix styles here so they can be overridden */

  d-appendix {
    contain: layout style;
    font-size: 0.8em;
    line-height: 1.7em;
    margin-top: 60px;
    margin-bottom: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0,0,0,0.5);
    padding-top: 60px;
    padding-bottom: 48px;
  }

  d-appendix h3 {
    grid-column: page-start / text-start;
    font-size: 15px;
    font-weight: 500;
    margin-top: 1em;
    margin-bottom: 0;
    color: rgba(0,0,0,0.65);
  }

  d-appendix h3 + * {
    margin-top: 1em;
  }

  d-appendix ol {
    padding: 0 0 0 15px;
  }

  @media (min-width: 768px) {
    d-appendix ol {
      padding: 0 0 0 30px;
      margin-left: -30px;
    }
  }

  d-appendix li {
    margin-bottom: 1em;
  }

  d-appendix a {
    color: rgba(0, 0, 0, 0.6);
  }

  d-appendix > * {
    grid-column: text;
  }

  d-appendix > d-footnote-list,
  d-appendix > d-citation-list,
  d-appendix > distill-appendix {
    grid-column: screen;
  }

  /* Include footnote styles here so they can be overridden */

  d-footnote-list {
    contain: layout style;
  }

  d-footnote-list > * {
    grid-column: text;
  }

  d-footnote-list a.footnote-backlink {
    color: rgba(0,0,0,0.3);
    padding-left: 0.5em;
  }



  /* Anchor.js */

  .anchorjs-link {
    /*transition: all .25s linear; */
    text-decoration: none;
    border-bottom: none;
  }
  *:hover > .anchorjs-link {
    margin-left: -1.125em !important;
    text-decoration: none;
    border-bottom: none;
  }

  /* Social footer */

  .social_footer {
    margin-top: 30px;
    margin-bottom: 0;
    color: rgba(0,0,0,0.67);
  }

  .disqus-comments {
    margin-right: 30px;
  }

  .disqus-comment-count {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  #disqus_thread {
    margin-top: 30px;
  }

  .article-sharing a {
    border-bottom: none;
    margin-right: 8px;
  }

  .article-sharing a:hover {
    border-bottom: none;
  }

  .sidebar-section.subscribe {
    font-size: 12px;
    line-height: 1.6em;
  }

  .subscribe p {
    margin-bottom: 0.5em;
  }


  .article-footer .subscribe {
    font-size: 15px;
    margin-top: 45px;
  }


  .sidebar-section.custom {
    font-size: 12px;
    line-height: 1.6em;
  }

  .custom p {
    margin-bottom: 0.5em;
  }

  /* Styles for listing layout (hide title) */
  .layout-listing d-title, .layout-listing .d-title {
    display: none;
  }

  /* Styles for posts lists (not auto-injected) */


  .posts-with-sidebar {
    padding-left: 45px;
    padding-right: 45px;
  }

  .posts-list .description h2,
  .posts-list .description p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
  }

  .posts-list .description h2 {
    font-weight: 700;
    border-bottom: none;
    padding-bottom: 0;
  }

  .posts-list h2.post-tag {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 12px;
  }
  .posts-list {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  .posts-list .post-preview {
    text-decoration: none;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px 0;
  }

  .post-preview-last {
    border-bottom: none !important;
  }

  .posts-list .posts-list-caption {
    grid-column: screen;
    font-weight: 400;
  }

  .posts-list .post-preview h2 {
    margin: 0 0 6px 0;
    line-height: 1.2em;
    font-style: normal;
    font-size: 24px;
  }

  .posts-list .post-preview p {
    margin: 0 0 12px 0;
    line-height: 1.4em;
    font-size: 16px;
  }

  .posts-list .post-preview .thumbnail {
    box-sizing: border-box;
    margin-bottom: 24px;
    position: relative;
    max-width: 500px;
  }
  .posts-list .post-preview img {
    width: 100%;
    display: block;
  }

  .posts-list .metadata {
    font-size: 12px;
    line-height: 1.4em;
    margin-bottom: 18px;
  }

  .posts-list .metadata > * {
    display: inline-block;
  }

  .posts-list .metadata .publishedDate {
    margin-right: 2em;
  }

  .posts-list .metadata .dt-authors {
    display: block;
    margin-top: 0.3em;
    margin-right: 2em;
  }

  .posts-list .dt-tags {
    display: block;
    line-height: 1em;
  }

  .posts-list .dt-tags .dt-tag {
    display: inline-block;
    color: rgba(0,0,0,0.6);
    padding: 0.3em 0.4em;
    margin-right: 0.2em;
    margin-bottom: 0.4em;
    font-size: 60%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .posts-list img {
    opacity: 1;
  }

  .posts-list img[data-src] {
    opacity: 0;
  }

  .posts-more {
    clear: both;
  }


  .posts-sidebar {
    font-size: 16px;
  }

  .posts-sidebar h3 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: 400;
    text-transform: uppercase;
  }

  .sidebar-section {
    margin-bottom: 30px;
  }

  .categories ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .categories li {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
  }

  .categories li>a {
    border-bottom: none;
  }

  .categories li>a:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }

  .categories .active {
    font-weight: 600;
  }

  .categories .category-count {
    color: rgba(0, 0, 0, 0.4);
  }


  @media(min-width: 768px) {
    .posts-list .post-preview h2 {
      font-size: 26px;
    }
    .posts-list .post-preview .thumbnail {
      float: right;
      width: 30%;
      margin-bottom: 0;
    }
    .posts-list .post-preview .description {
      float: left;
      width: 45%;
    }
    .posts-list .post-preview .metadata {
      float: left;
      width: 20%;
      margin-top: 8px;
    }
    .posts-list .post-preview p {
      margin: 0 0 12px 0;
      line-height: 1.5em;
      font-size: 16px;
    }
    .posts-with-sidebar .posts-list {
      float: left;
      width: 75%;
    }
    .posts-with-sidebar .posts-sidebar {
      float: right;
      width: 20%;
      margin-top: 60px;
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }


  /* Improve display for browsers without grid (IE/Edge <= 15) */

  .downlevel {
    line-height: 1.6em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
    margin: 0;
  }

  .downlevel .d-title {
    padding-top: 6rem;
    padding-bottom: 1.5rem;
  }

  .downlevel .d-title h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 1.1em;
    margin: 0 0 0.5rem;
  }

  .downlevel .d-title p {
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.55em;
    margin-top: 0;
  }

  .downlevel .d-byline {
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    font-size: 0.8rem;
    line-height: 1.8em;
  }

  .downlevel .section-separator {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .downlevel .d-article {
    font-size: 1.06rem;
    line-height: 1.7em;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }


  .downlevel .d-appendix {
    padding-left: 0;
    padding-right: 0;
    max-width: none;
    font-size: 0.8em;
    line-height: 1.7em;
    margin-bottom: 0;
    color: rgba(0,0,0,0.5);
    padding-top: 40px;
    padding-bottom: 48px;
  }

  .downlevel .footnotes ol {
    padding-left: 13px;
  }

  .downlevel .base-grid,
  .downlevel .distill-header,
  .downlevel .d-title,
  .downlevel .d-abstract,
  .downlevel .d-article,
  .downlevel .d-appendix,
  .downlevel .distill-appendix,
  .downlevel .d-byline,
  .downlevel .d-footnote-list,
  .downlevel .d-citation-list,
  .downlevel .distill-footer,
  .downlevel .appendix-bottom,
  .downlevel .posts-container {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media(min-width: 768px) {
    .downlevel .base-grid,
    .downlevel .distill-header,
    .downlevel .d-title,
    .downlevel .d-abstract,
    .downlevel .d-article,
    .downlevel .d-appendix,
    .downlevel .distill-appendix,
    .downlevel .d-byline,
    .downlevel .d-footnote-list,
    .downlevel .d-citation-list,
    .downlevel .distill-footer,
    .downlevel .appendix-bottom,
    .downlevel .posts-container {
    padding-left: 150px;
    padding-right: 150px;
    max-width: 900px;
  }
  }

  .downlevel pre code {
    display: block;
    border-left: 2px solid rgba(0, 0, 0, .1);
    padding: 0 0 0 20px;
    font-size: 14px;
  }

  .downlevel code, .downlevel pre {
    color: black;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .downlevel .posts-list .post-preview {
    color: inherit;
  }



  </style>

  <script type="application/javascript">

  function is_downlevel_browser() {
    if (bowser.isUnsupportedBrowser({ msie: "12", msedge: "16"},
                                   window.navigator.userAgent)) {
      return true;
    } else {
      return window.load_distill_framework === undefined;
    }
  }

  // show body when load is complete
  function on_load_complete() {

    // add anchors
    if (window.anchors) {
      window.anchors.options.placement = 'left';
      window.anchors.add('d-article > h2, d-article > h3, d-article > h4, d-article > h5');
    }


    // set body to visible
    document.body.style.visibility = 'visible';

    // force redraw for leaflet widgets
    if (window.HTMLWidgets) {
      var maps = window.HTMLWidgets.findAll(".leaflet");
      $.each(maps, function(i, el) {
        var map = this.getMap();
        map.invalidateSize();
        map.eachLayer(function(layer) {
          if (layer instanceof L.TileLayer)
            layer.redraw();
        });
      });
    }

    // trigger 'shown' so htmlwidgets resize
    $('d-article').trigger('shown');
  }

  function init_distill() {

    init_common();

    // create front matter
    var front_matter = $('<d-front-matter></d-front-matter>');
    $('#distill-front-matter').wrap(front_matter);

    // create d-title
    $('.d-title').changeElementType('d-title');

    // create d-byline
    var byline = $('<d-byline></d-byline>');
    $('.d-byline').replaceWith(byline);

    // create d-article
    var article = $('<d-article></d-article>');
    $('.d-article').wrap(article).children().unwrap();

    // move posts container into article
    $('.posts-container').appendTo($('d-article'));

    // create d-appendix
    $('.d-appendix').changeElementType('d-appendix');

    // flag indicating that we have appendix items
    var appendix = $('.appendix-bottom').children('h3').length > 0;

    // replace footnotes with <d-footnote>
    $('.footnote-ref').each(function(i, val) {
      appendix = true;
      var href = $(this).attr('href');
      var id = href.replace('#', '');
      var fn = $('#' + id);
      var fn_p = $('#' + id + '>p');
      fn_p.find('.footnote-back').remove();
      var text = fn_p.html();
      var dtfn = $('<d-footnote></d-footnote>');
      dtfn.html(text);
      $(this).replaceWith(dtfn);
    });
    // remove footnotes
    $('.footnotes').remove();

    // move refs into #references-listing
    $('#references-listing').replaceWith($('#refs'));

    $('h1.appendix, h2.appendix').each(function(i, val) {
      $(this).changeElementType('h3');
    });
    $('h3.appendix').each(function(i, val) {
      var id = $(this).attr('id');
      $('.d-contents a[href="#' + id + '"]').parent().remove();
      appendix = true;
      $(this).nextUntil($('h1, h2, h3')).addBack().appendTo($('d-appendix'));
    });

    // show d-appendix if we have appendix content
    $("d-appendix").css('display', appendix ? 'grid' : 'none');

    // localize layout chunks to just output
    $('.layout-chunk').each(function(i, val) {

      // capture layout
      var layout = $(this).attr('data-layout');

      // apply layout to markdown level block elements
      var elements = $(this).children().not('details, div.sourceCode, pre, script');
      elements.each(function(i, el) {
        var layout_div = $('<div class="' + layout + '"></div>');
        if (layout_div.hasClass('shaded')) {
          var shaded_content = $('<div class="shaded-content"></div>');
          $(this).wrap(shaded_content);
          $(this).parent().wrap(layout_div);
        } else {
          $(this).wrap(layout_div);
        }
      });


      // unwrap the layout-chunk div
      $(this).children().unwrap();
    });

    // remove code block used to force  highlighting css
    $('.distill-force-highlighting-css').parent().remove();

    // remove empty line numbers inserted by pandoc when using a
    // custom syntax highlighting theme
    $('code.sourceCode a:empty').remove();

    // load distill framework
    load_distill_framework();

    // wait for window.distillRunlevel == 4 to do post processing
    function distill_post_process() {

      if (!window.distillRunlevel || window.distillRunlevel < 4)
        return;

      // hide author/affiliations entirely if we have no authors
      var front_matter = JSON.parse($("#distill-front-matter").html());
      var have_authors = front_matter.authors && front_matter.authors.length > 0;
      if (!have_authors)
        $('d-byline').addClass('hidden');

      // article with toc class
      $('.d-contents').parent().addClass('d-article-with-toc');

      // strip links that point to #
      $('.authors-affiliations').find('a[href="#"]').removeAttr('href');

      // add orcid ids
      $('.authors-affiliations').find('.author').each(function(i, el) {
        var orcid_id = front_matter.authors[i].orcidID;
        if (orcid_id) {
          var a = $('<a></a>');
          a.attr('href', 'https://orcid.org/' + orcid_id);
          var img = $('<img></img>');
          img.addClass('orcid-id');
          img.attr('alt', 'ORCID ID');
          img.attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1N0NEMjA4MDI1MjA2ODExOTk0QzkzNTEzRjZEQTg1NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0NDOEJGNEZGNTcxMUUxODdBOEVCODg2RjdCQ0QwOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0NDOEJGM0ZGNTcxMUUxODdBOEVCODg2RjdCQ0QwOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDN0YxMTc0MDcyMDY4MTE5NUZFRDc5MUM2MUUwNEREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3Q0QyMDgwMjUyMDY4MTE5OTRDOTM1MTNGNkRBODU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+84NovQAAAR1JREFUeNpiZEADy85ZJgCpeCB2QJM6AMQLo4yOL0AWZETSqACk1gOxAQN+cAGIA4EGPQBxmJA0nwdpjjQ8xqArmczw5tMHXAaALDgP1QMxAGqzAAPxQACqh4ER6uf5MBlkm0X4EGayMfMw/Pr7Bd2gRBZogMFBrv01hisv5jLsv9nLAPIOMnjy8RDDyYctyAbFM2EJbRQw+aAWw/LzVgx7b+cwCHKqMhjJFCBLOzAR6+lXX84xnHjYyqAo5IUizkRCwIENQQckGSDGY4TVgAPEaraQr2a4/24bSuoExcJCfAEJihXkWDj3ZAKy9EJGaEo8T0QSxkjSwORsCAuDQCD+QILmD1A9kECEZgxDaEZhICIzGcIyEyOl2RkgwAAhkmC+eAm0TAAAAABJRU5ErkJggg==');
          a.append(img);
          $(this).append(a);
        }
      });

      // hide elements of author/affiliations grid that have no value
      function hide_byline_column(caption) {
        $('d-byline').find('h3:contains("' + caption + '")').parent().css('visibility', 'hidden');
      }

      // affiliations
      var have_affiliations = false;
      for (var i = 0; i<front_matter.authors.length; ++i) {
        var author = front_matter.authors[i];
        if (author.affiliation !== "&nbsp;") {
          have_affiliations = true;
          break;
        }
      }
      if (!have_affiliations)
        $('d-byline').find('h3:contains("Affiliations")').css('visibility', 'hidden');

      // published date
      if (!front_matter.publishedDate)
        hide_byline_column("Published");

      // document object identifier
      var doi = $('d-byline').find('h3:contains("DOI")');
      var doi_p = doi.next().empty();
      if (!front_matter.doi) {
        // if we have a citation and valid citationText then link to that
        if ($('#citation').length > 0 && front_matter.citationText) {
          doi.html('Citation');
          $('<a href="#citation"></a>')
            .text(front_matter.citationText)
            .appendTo(doi_p);
        } else {
          hide_byline_column("DOI");
        }
      } else {
        $('<a></a>')
           .attr('href', "https://doi.org/" + front_matter.doi)
           .html(front_matter.doi)
           .appendTo(doi_p);
      }

       // change plural form of authors/affiliations
      if (front_matter.authors.length === 1) {
        var grid = $('.authors-affiliations');
        grid.children('h3:contains("Authors")').text('Author');
        grid.children('h3:contains("Affiliations")').text('Affiliation');
      }

      // remove d-appendix and d-footnote-list local styles
      $('d-appendix > style:first-child').remove();
      $('d-footnote-list > style:first-child').remove();

      // move appendix-bottom entries to the bottom
      $('.appendix-bottom').appendTo('d-appendix').children().unwrap();
      $('.appendix-bottom').remove();

      // hoverable references
      $('span.citation[data-cites]').each(function() {
        const citeChild = $(this).children()[0]
        // Do not process if @xyz has been used without escaping and without bibliography activated
        // https://github.com/rstudio/distill/issues/466
        if (citeChild === undefined) return true

        if (citeChild.nodeName == "D-FOOTNOTE") {
          var fn = citeChild
          $(this).html(fn.shadowRoot.querySelector("sup"))
          $(this).id = fn.id
          fn.remove()
        }
        var refs = $(this).attr('data-cites').split(" ");
        var refHtml = refs.map(function(ref) {
          // Could use CSS.escape too here, we insure backward compatibility in navigator
          return "<p>" + $('div[id="ref-' + ref + '"]').html() + "</p>";
        }).join("\n");
        window.tippy(this, {
          allowHTML: true,
          content: refHtml,
          maxWidth: 500,
          interactive: true,
          interactiveBorder: 10,
          theme: 'light-border',
          placement: 'bottom-start'
        });
      });

      // fix footnotes in tables (#411)
      // replacing broken distill.pub feature
      $('table d-footnote').each(function() {
        // we replace internal showAtNode methode which is triggered when hovering a footnote
        this.hoverBox.showAtNode = function(node) {
          // ported from https://github.com/distillpub/template/pull/105/files
          calcOffset = function(elem) {
              let x = elem.offsetLeft;
              let y = elem.offsetTop;
              // Traverse upwards until an `absolute` element is found or `elem`
              // becomes null.
              while (elem = elem.offsetParent && elem.style.position != 'absolute') {
                  x += elem.offsetLeft;
                  y += elem.offsetTop;
              }

              return { left: x, top: y };
          }
          // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
          const bbox = node.getBoundingClientRect();
          const offset = calcOffset(node);
          this.show([offset.left + bbox.width, offset.top + bbox.height]);
        }
      })

      // clear polling timer
      clearInterval(tid);

      // show body now that everything is ready
      on_load_complete();
    }

    var tid = setInterval(distill_post_process, 50);
    distill_post_process();

  }

  function init_downlevel() {

    init_common();

     // insert hr after d-title
    $('.d-title').after($('<hr class="section-separator"/>'));

    // check if we have authors
    var front_matter = JSON.parse($("#distill-front-matter").html());
    var have_authors = front_matter.authors && front_matter.authors.length > 0;

    // manage byline/border
    if (!have_authors)
      $('.d-byline').remove();
    $('.d-byline').after($('<hr class="section-separator"/>'));
    $('.d-byline a').remove();

    // remove toc
    $('.d-contents').remove();

    // move appendix elements
    $('h1.appendix, h2.appendix').each(function(i, val) {
      $(this).changeElementType('h3');
    });
    $('h3.appendix').each(function(i, val) {
      $(this).nextUntil($('h1, h2, h3')).addBack().appendTo($('.d-appendix'));
    });


    // inject headers into references and footnotes
    var refs_header = $('<h3></h3>');
    refs_header.text('References');
    $('#refs').prepend(refs_header);

    var footnotes_header = $('<h3></h3');
    footnotes_header.text('Footnotes');
    $('.footnotes').children('hr').first().replaceWith(footnotes_header);

    // move appendix-bottom entries to the bottom
    $('.appendix-bottom').appendTo('.d-appendix').children().unwrap();
    $('.appendix-bottom').remove();

    // remove appendix if it's empty
    if ($('.d-appendix').children().length === 0)
      $('.d-appendix').remove();

    // prepend separator above appendix
    $('.d-appendix').before($('<hr class="section-separator" style="clear: both"/>'));

    // trim code
    $('pre>code').each(function(i, val) {
      $(this).html($.trim($(this).html()));
    });

    // move posts-container right before article
    $('.posts-container').insertBefore($('.d-article'));

    $('body').addClass('downlevel');

    on_load_complete();
  }


  function init_common() {

    // jquery plugin to change element types
    (function($) {
      $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
          attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
          return $("<" + newType + "/>", attrs).append($(this).contents());
        });
      };
    })(jQuery);

    // prevent underline for linked images
    $('a > img').parent().css({'border-bottom' : 'none'});

    // mark non-body figures created by knitr chunks as 100% width
    $('.layout-chunk').each(function(i, val) {
      var figures = $(this).find('img, .html-widget');
      // ignore leaflet img layers (#106)
      figures = figures.filter(':not(img[class*="leaflet"])')
      if ($(this).attr('data-layout') !== "l-body") {
        figures.css('width', '100%');
      } else {
        figures.css('max-width', '100%');
        figures.filter("[width]").each(function(i, val) {
          var fig = $(this);
          fig.css('width', fig.attr('width') + 'px');
        });

      }
    });

    // auto-append index.html to post-preview links in file: protocol
    // and in rstudio ide preview
    $('.post-preview').each(function(i, val) {
      if (window.location.protocol === "file:")
        $(this).attr('href', $(this).attr('href') + "index.html");
    });

    // get rid of index.html references in header
    if (window.location.protocol !== "file:") {
      $('.distill-site-header a[href]').each(function(i,val) {
        $(this).attr('href', $(this).attr('href').replace(/^index[.]html/, "./"));
      });
    }

    // add class to pandoc style tables
    $('tr.header').parent('thead').parent('table').addClass('pandoc-table');
    $('.kable-table').children('table').addClass('pandoc-table');

    // add figcaption style to table captions
    $('caption').parent('table').addClass("figcaption");

    // initialize posts list
    if (window.init_posts_list)
      window.init_posts_list();

    // implmement disqus comment link
    $('.disqus-comment-count').click(function() {
      window.headroom_prevent_pin = true;
      $('#disqus_thread').toggleClass('hidden');
      if (!$('#disqus_thread').hasClass('hidden')) {
        var offset = $(this).offset();
        $(window).resize();
        $('html, body').animate({
          scrollTop: offset.top - 35
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    if (is_downlevel_browser())
      init_downlevel();
    else
      window.addEventListener('WebComponentsReady', init_distill);
  });

  </script>

  <!--/radix_placeholder_distill-->
  <script src="site_libs/header-attrs-2.16.1/header-attrs.js"></script>
  <link href="site_libs/panelset-0.2.6/panelset.css" rel="stylesheet" />
  <script src="site_libs/panelset-0.2.6/panelset.js"></script>
  <script src="site_libs/popper-2.6.0/popper.min.js"></script>
  <link href="site_libs/tippy-6.2.7/tippy.css" rel="stylesheet" />
  <link href="site_libs/tippy-6.2.7/tippy-light-border.css" rel="stylesheet" />
  <script src="site_libs/tippy-6.2.7/tippy.umd.min.js"></script>
  <script src="site_libs/anchor-4.2.2/anchor.min.js"></script>
  <script src="site_libs/bowser-1.9.3/bowser.min.js"></script>
  <script src="site_libs/webcomponents-2.0.0/webcomponents.js"></script>
  <script src="site_libs/distill-2.2.21/template.v2.js"></script>
  <!--radix_placeholder_site_in_header-->
  <style type="text/css">
  .screenshot {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

  </style>
  <!--/radix_placeholder_site_in_header-->

  <link rel="stylesheet" href="styles.css" type="text/css"/>

</head>

<body>

<!--radix_placeholder_front_matter-->

<script id="distill-front-matter" type="text/json">
{"title":"Creating a Blog","description":"Create a blog to publish a collection of Distill articles","authors":[]}
</script>

<!--/radix_placeholder_front_matter-->
<!--radix_placeholder_navigation_before_body-->
<header class="header header--fixed" role="banner">
<nav class="distill-site-nav distill-site-header">
<div class="nav-left">
<a class="logo" href="https://www.rstudio.com">
<img src="images/logo.png" alt="Logo"/>
</a>
<a href="index.html" class="title">Distill for R Markdown</a>
<input id="distill-search" class="nav-search hidden" type="text" placeholder="Search..."/>
</div>
<div class="nav-right">
<div class="nav-dropdown">
<button class="nav-dropbtn">
Authoring
 
<span class="down-arrow">&#x25BE;</span>
</button>
<div class="nav-dropdown-content">
<a href="basics.html">Distill Basics</a>
<a href="figures.html">Figure Layout</a>
<a href="tables.html">Tables</a>
<a href="diagrams.html">Diagrams</a>
<a href="interactivity.html">JavaScript &amp; D3</a>
<hr/>
<a href="citations.html">Citations</a>
<a href="metadata.html">Article Metadata</a>
<hr/>
<a href="migrating.html">Migrating from Radix</a>
</div>
</div>
<div class="nav-dropdown">
<button class="nav-dropbtn">
Websites
 
<span class="down-arrow">&#x25BE;</span>
</button>
<div class="nav-dropdown-content">
<a href="website.html">Creating a Website</a>
<hr/>
<a href="blog.html">Creating a Blog</a>
<a href="blog_workflow.html">Blog Post Workflow</a>
<hr/>
<a href="publish_website.html">Publishing Websites</a>
</div>
</div>
<div class="nav-dropdown">
<button class="nav-dropbtn">
Publishing
 
<span class="down-arrow">&#x25BE;</span>
</button>
<div class="nav-dropdown-content">
<a href="publish_article.html">Publishing Articles</a>
<a href="publish_website.html">Publishing Websites</a>
</div>
</div>
<a href="https://pkgs.rstudio.com/distill">Reference</a>
<a href="https://github.com/rstudio/distill" aria-label="Link to source">
<i class="fab fa-github" aria-hidden="true"></i>
</a>
<a href="javascript:void(0);" class="nav-toggle">&#9776;</a>
</div>
</nav>
</header>
<!--/radix_placeholder_navigation_before_body-->
<!--radix_placeholder_site_before_body-->
<!--/radix_placeholder_site_before_body-->

<div class="d-title">
<h1>Creating a Blog</h1>
<!--radix_placeholder_categories-->
<!--/radix_placeholder_categories-->
<p>Create a blog to publish a collection of Distill articles</p>
</div>


<div class="d-article">
<div class="d-contents d-contents-float">
<nav class="l-text toc figcaption" id="TOC">
<h3>Contents</h3>
<ul>
<li><a href="#getting-started" id="toc-getting-started">Getting started</a>
<ul>
<li><a href="#website-or-blog" id="toc-website-or-blog">Website or blog?</a></li>
<li><a href="#creating-a-blog" id="toc-creating-a-blog">Creating a blog</a></li>
<li><a href="#configuration" id="toc-configuration">Configuration</a></li>
<li><a href="#creating-a-post" id="toc-creating-a-post">Creating a post</a></li>
<li><a href="#renaming-posts" id="toc-renaming-posts">Renaming posts</a></li>
<li><a href="#listing-pages" id="toc-listing-pages">Listing pages</a></li>
<li><a href="#rss-feed" id="toc-rss-feed">RSS feed</a></li>
<li><a href="#post-drafts" id="toc-post-drafts">Post drafts</a></li>
</ul></li>
<li><a href="#next-steps" id="toc-next-steps">Next steps</a>
<ul>
<li><a href="#comments-and-sharing" id="toc-comments-and-sharing">Comments and sharing</a></li>
<li><a href="#site-search" id="toc-site-search">Site search</a></li>
<li><a href="#source-code" id="toc-source-code">Source code</a></li>
<li><a href="#organizing-posts" id="toc-organizing-posts">Organizing posts</a></li>
<li><a href="#preview-images" id="toc-preview-images">Preview images</a></li>
<li><a href="#citations" id="toc-citations">Citations</a></li>
<li><a href="#subscriptions" id="toc-subscriptions">Subscriptions</a></li>
<li><a href="#custom-html" id="toc-custom-html">Custom HTML</a></li>
<li><a href="#supporting-files" id="toc-supporting-files">Supporting files</a></li>
</ul></li>
<li><a href="#collections" id="toc-collections">Collections</a>
<ul>
<li><a href="#creating-a-collection" id="toc-creating-a-collection">Creating a collection</a></li>
</ul></li>
<li><a href="#theming" id="toc-theming">Theming</a>
<ul>
<li><a href="#example-themes" id="toc-example-themes">Example themes</a></li>
</ul></li>
<li><a href="#publishing-a-blog" id="toc-publishing-a-blog">Publishing a blog</a></li>
<li><a href="#examples" id="toc-examples">Examples</a></li>
</ul>
</nav>
</div>
<p>Distill for R Markdown websites include integrated support for blogging. To create a blog you author a collection of posts (located in the <code>_posts</code> sub-directory of your website) and then dedicate a page (usually the website homepage) to a listing of all of your posts.</p>
<h2 id="getting-started">Getting started</h2>
<h3 id="website-or-blog">Website or blog?</h3>
<p>Structure difference: <a href="website.html">Websites</a> are just collections of pages you can navigate to via the top navigation bar, whereas <a href="blog.html">blogs</a> have collections of posts that can be indexed and syndicated (via their RSS feed). Distill blogs are a distill website with added blog posts.</p>
<p>Layout difference: Within a <a href="blog.html">blog</a>, Distill enables a special page on your website called a <a href="blog.html#listing-pages">listing page</a>. Whereas websites require you to manually set up links to pages, a listing page collects links to posts for you, displaying key metadata (like date published, author, categories, title, etc.) and a thumbnail image. When you knit and publish a new post, this page automatically updates by adding the most recent post to the top of the list.</p>
<p>Workflow difference: Furthermore, <em>website</em> pages and root pages of <em>blogs</em> are re-rendered when the site is rebuilt but blog articles are not. Each blog article has to be rendered on its own, with intent. Why? Given that R package upgrades have a tendency to break older code, continuously re-rendering old posts is nearly impossible to do without errors, especially over longer periods of time.</p>
<div class="sourceCode" id="cb1"><pre class="sourceCode r distill-force-highlighting-css"><code class="sourceCode r"></code></pre></div>
<h3 id="creating-a-blog">Creating a blog</h3>
<p>If you are using RStudio, the easiest way to get started is to use the Distill Blog option in the RStudio <strong>New Project</strong> dialog:</p>
<p><img src="images/create-blog.png" class="screenshot" style="width:95.0%" /></p>
<p>A new <a href="https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects">RStudio Project</a> for the blog will be created and opened. The blog will include the following files:</p>
<table>
<thead>
<tr class="header">
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>_site.yml</code></td>
<td>Website configuration file.</td>
</tr>
<tr class="even">
<td><code>index.Rmd</code></td>
<td>Blog home page.</td>
</tr>
<tr class="odd">
<td><code>about.Rmd</code></td>
<td>Blog about page.</td>
</tr>
<tr class="even">
<td><code>_posts/welcome/welcome.Rmd</code></td>
<td>Welcome post for the blog.</td>
</tr>
</tbody>
</table>
<p>Note that the <code>welcome</code> post is just there to provide some skeletal content for the blog – feel free to delete it and add your own initial post to the blog as described in <a href="#creating-a-post">creating a post</a>.</p>
<p>If you are not using RStudio you can also call the Distill <code>create_blog()</code> function:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='kw'><a href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'><a href='https://github.com/rstudio/distill'>distill</a></span><span class='op'>)</span></span>
<span><span class='fu'><a href='https://pkgs.rstudio.com/distill/reference/create_website.html'>create_blog</a></span><span class='op'>(</span>dir <span class='op'>=</span> <span class='st'>"my-blog"</span>, title <span class='op'>=</span> <span class='st'>"My Blog"</span><span class='op'>)</span></span></code></pre>
</div>
</div>
<p>The basic scaffolding for a blog and an initial welcome post will be created within the <code>my-blog</code> sub-directory.</p>
<h3 id="configuration">Configuration</h3>
<p>After you’ve created the blog scaffolding, there are a couple of additional configuration items you’ll want to add to your <code>_site.yml</code> so that it’s easier to share content on the blog via RSS and social networks like Twitter:</p>
<ul>
<li><p>A short <code>description</code> of the site. This field is used for the channel description of your RSS feed.</p></li>
<li><p>A <code>base_url</code> for the site (the URL where it will be published to). This is used both for RSS feed items and for sharing posts via <a href="metadata.html#open-graph">Open Graph</a> and <a href="metadata.html#twitter-card">Twitter Card</a>.</p></li>
</ul>
<p>For example:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb2"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a><span class="fu">navbar</span><span class="kw">:</span></span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">logo</span><span class="kw">:</span><span class="at"> images/rstudio.png</span></span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">right</span><span class="kw">:</span></span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> </span><span class="fu">text</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Home&quot;</span></span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">href</span><span class="kw">:</span><span class="at"> index.html</span></span>
<span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> </span><span class="fu">text</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;About&quot;</span></span>
<span id="cb2-13"><a href="#cb2-13" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">href</span><span class="kw">:</span><span class="at"> about.html</span></span>
<span id="cb2-14"><a href="#cb2-14" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> </span><span class="fu">text</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Contributors&quot;</span></span>
<span id="cb2-15"><a href="#cb2-15" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">href</span><span class="kw">:</span><span class="at"> contributors.html</span></span>
<span id="cb2-16"><a href="#cb2-16" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> </span><span class="fu">icon</span><span class="kw">:</span><span class="at"> fa fa-rss</span></span>
<span id="cb2-17"><a href="#cb2-17" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">href</span><span class="kw">:</span><span class="at"> index.xml</span></span>
<span id="cb2-18"><a href="#cb2-18" aria-hidden="true" tabindex="-1"></a><span class="fu">output</span><span class="kw">:</span><span class="at"> distill::distill_article</span></span></code></pre></div>
<p>Note that we’ve also added a feed icon to the right side of the menu bar which makes it easy to discover and browse the RSS feed for the blog.</p>
<h3 id="creating-a-post">Creating a post</h3>
<p>The easiest way to start authoring a new post is to call the <code>create_post()</code> function from within your blog’s directory. For example:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='kw'><a href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'><a href='https://github.com/rstudio/distill'>distill</a></span><span class='op'>)</span></span>
<span><span class='fu'><a href='https://pkgs.rstudio.com/distill/reference/create_post.html'>create_post</a></span><span class='op'>(</span><span class='st'>"The Sharpe Ratio"</span><span class='op'>)</span></span></code></pre>
</div>
</div>
<p>This will create a sub-directory for your post within the <code>_posts</code> directory, add a stub Distill article, and open the article for editing.</p>
<p>If you want your post to start out as a draft (i.e. not be included within the listing of all posts) then you can add <code>draft = TRUE</code>. For example:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='fu'><a href='https://pkgs.rstudio.com/distill/reference/create_post.html'>create_post</a></span><span class='op'>(</span><span class='st'>"The Sharpe Ratio"</span>, draft <span class='op'>=</span> <span class='cn'>TRUE</span><span class='op'>)</span></span></code></pre>
</div>
</div>
<p>You work on blog posts independent of the enclosing website (use <strong>Knit</strong> to render and preview the post just like any R Markdown document). This is in fact the only way to update post content — posts are considered standalone documents that are not re-rendered when the site is built. This is because posts are often expensive to render and have R package dependencies that may be difficult to satisfy as time goes on.</p>
<h3 id="renaming-posts">Renaming posts</h3>
<p>Posts are stored within the <code>_posts</code> sub-directory of your site, and have a directory name that reflects the date that you created the post along with the post’s <a href="https://en.wikipedia.org/wiki/Clean_URL#Slug">title slug</a>. For example:</p>
<p><code>_posts/2016-11-08-sharpe-ratio</code></p>
<p>Note that the date prefix is not strictly required, but is done by default as a convenience so that posts appear in chronological order within the filesystem.</p>
<p>If you work on a post over the course of a few days and/or if you change your post’s title after you begin working on it, you may want to rename the post directory. You can use the <code>rename_post_dir()</code> function to update the date and/or title slug reflected in the directory name. For example:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='co'># rename to reflect the title and date in the post YAML front-matter</span></span>
<span><span class='fu'><a href='https://pkgs.rstudio.com/distill/reference/rename_post_dir.html'>rename_post_dir</a></span><span class='op'>(</span><span class='st'>"_posts/2016-11-08-sharpe-ratio"</span><span class='op'>)</span> </span></code></pre>
</div>
</div>
<p>You can also specify an explicit <code>slug</code> and/or <code>date_prefix</code> if you prefer not to use values derived from the post’s YAML.</p>
<p>Note that you should be sure to rebuild your site after renaming a post so that it’s updated URL is reflected in the index page and RSS feed.</p>
<div class="sourceCode" id="cb3"><pre class="sourceCode r distill-force-highlighting-css"><code class="sourceCode r"></code></pre></div>
<h3 id="listing-pages">Listing pages</h3>
<p>Once you have authored one or more posts you’ll want to create a listing page. You can do this by adding a <code>listing</code> metadata entry to the page you to include the listing on. This is often the main page for the website (index.Rmd). For example:</p>
<p><strong>index.Rmd</strong></p>
<div class="sourceCode" id="cb4"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="fu">site</span><span class="kw">:</span><span class="at"> distill::distill_website</span></span>
<span id="cb4-4"><a href="#cb4-4" aria-hidden="true" tabindex="-1"></a><span class="fu">listing</span><span class="kw">:</span><span class="at"> posts</span></span>
<span id="cb4-5"><a href="#cb4-5" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<p>In our <a href="https://beta.rstudioconnect.com/content/11424/">example blog</a> (which will be described in more detail below) this results in the following listing:</p>
<p><img src="images/site-listing.png" class="screenshot" style="width:95.0%" /></p>
<h4 id="custom-listings">Custom listings</h4>
<p>Above we demonstrated creating a listing page for all posts. You can also create a custom listing for a subset of posts (e.g. a gallery of featured posts). To do this, just enumerate the posts you want to include as follows:</p>
<p><strong>gallery.Rmd</strong></p>
<div class="sourceCode" id="cb5"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb5-2"><a href="#cb5-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Gallery of featured posts&quot;</span></span>
<span id="cb5-3"><a href="#cb5-3" aria-hidden="true" tabindex="-1"></a><span class="fu">listing</span><span class="kw">:</span></span>
<span id="cb5-4"><a href="#cb5-4" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb5-5"><a href="#cb5-5" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> 2016-11-08-sharpe-ratio</span></span>
<span id="cb5-6"><a href="#cb5-6" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> 2017-11-09-visualizing-asset-returns </span></span>
<span id="cb5-7"><a href="#cb5-7" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> 2017-09-13-asset-volatility </span></span>
<span id="cb5-8"><a href="#cb5-8" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<h4 id="categories">Categories</h4>
<p>If your posts include <code>categories</code> metadata, then the page will also include categories within the article listing. For example, here is some post metadata that includes categories:</p>
<div class="sourceCode" id="cb6"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;The Sharpe Ratio&quot;</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="co"># (additional metadata e.g. description and date, excluded for brevity)</span></span>
<span id="cb6-4"><a href="#cb6-4" aria-hidden="true" tabindex="-1"></a><span class="fu">categories</span><span class="kw">:</span></span>
<span id="cb6-5"><a href="#cb6-5" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> portfolios</span></span>
<span id="cb6-6"><a href="#cb6-6" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> dygraphs</span></span></code></pre></div>
<p>As a result of including <code>categories</code>, the listing page now looks like this:</p>
<p><img src="images/site-listing-categories.png" class="screenshot" style="width:95.0%" /></p>
<p>Categories are listed in the right-hand sidebar and are also displayed as metadata for each post. The name of each post’s author is also displayed in the article listing. You can disable both category displays as well as authors display using <code>collection</code> properties defined in <code>_site.yml</code>. For example:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb7"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb7-2"><a href="#cb7-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb7-3"><a href="#cb7-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb7-4"><a href="#cb7-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb7-5"><a href="#cb7-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb7-6"><a href="#cb7-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb7-7"><a href="#cb7-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb7-8"><a href="#cb7-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb7-9"><a href="#cb7-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">categories</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span>
<span id="cb7-10"><a href="#cb7-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">categories_metadata</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span>
<span id="cb7-11"><a href="#cb7-11" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">authors_metadata</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span></code></pre></div>
<h3 id="rss-feed">RSS feed</h3>
<p>When you create a listing page an <a href="https://en.wikipedia.org/wiki/RSS">RSS feed</a> is created automatically for the page (using the name of the listing page with a <code>.xml</code> file extension). You can link to the RSS feed within your site’s navigation bar as follows (some navbar entries excluded for brevity):</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb8"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb8-3"><a href="#cb8-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb8-4"><a href="#cb8-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb8-5"><a href="#cb8-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb8-6"><a href="#cb8-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb8-7"><a href="#cb8-7" aria-hidden="true" tabindex="-1"></a><span class="fu">navbar</span><span class="kw">:</span></span>
<span id="cb8-8"><a href="#cb8-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">right</span><span class="kw">:</span></span>
<span id="cb8-9"><a href="#cb8-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> </span><span class="fu">icon</span><span class="kw">:</span><span class="at"> fa fa-rss</span></span>
<span id="cb8-10"><a href="#cb8-10" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">href</span><span class="kw">:</span><span class="at"> index.xml</span></span>
<span id="cb8-11"><a href="#cb8-11" aria-hidden="true" tabindex="-1"></a><span class="fu">output</span><span class="kw">:</span><span class="at"> distill::distill_article</span></span></code></pre></div>
<p>Note that the <code>description</code> and <code>base_url</code> fields are both required to generate an RSS feed.</p>
<p>By default the most recent 20 articles will be included in the RSS feed. You can change this by specifying <code>feed_items_max</code> within the collection configuration in <code>_site.yml</code> (navbar and output format fields omitted for brevity):</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb9"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb9-2"><a href="#cb9-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb9-3"><a href="#cb9-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb9-4"><a href="#cb9-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb9-5"><a href="#cb9-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb9-6"><a href="#cb9-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb9-7"><a href="#cb9-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb9-8"><a href="#cb9-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb9-9"><a href="#cb9-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">feed_items_max</span><span class="kw">:</span><span class="at"> </span><span class="dv">50</span></span></code></pre></div>
<p>Specify <code>feed_items_max: false</code> to have no limit on the number of items included in the feed.</p>
<h4 id="rss-options">RSS options</h4>
<p>By default, RSS feeds include only a summary of each post (based on the <code>description</code> field). If you want to include the full contents of the post (e.g. for syndication to another blog) add an <code>rss: full_content</code> entry to your site config as follows:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb10"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">rss</span><span class="kw">:</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">full_content</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div>
<p>If you want to create dedicated feeds that map to particular categories (e.g. to syndicate only a subset of your posts), you can do this:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb11"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="fu">rss</span><span class="kw">:</span></span>
<span id="cb11-2"><a href="#cb11-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">full_content</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span>
<span id="cb11-3"><a href="#cb11-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">categories</span><span class="kw">:</span></span>
<span id="cb11-4"><a href="#cb11-4" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> portfolios</span></span>
<span id="cb11-5"><a href="#cb11-5" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="kw">-</span><span class="at"> forecasting</span></span></code></pre></div>
<p>The category-based feeds will be created in a <code>categories</code> directory at the top level of the site.</p>
<h3 id="post-drafts">Post drafts</h3>
<p>If you want to work on a post for a period of time without having it be added to the listing page, add <code>draft: true</code> to the post’s metadata. For example:</p>
<div class="sourceCode" id="cb12"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;The Sharpe Ratio&quot;</span></span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb12-4"><a href="#cb12-4" aria-hidden="true" tabindex="-1"></a>  In this post we present a classic finance use case using the</span>
<span id="cb12-5"><a href="#cb12-5" aria-hidden="true" tabindex="-1"></a>  PerformanceAnalytics, quantmod, and dygraphs packages. </span>
<span id="cb12-6"><a href="#cb12-6" aria-hidden="true" tabindex="-1"></a>  We&#39;ll demonstrate importing stock data, building a portfolio,</span>
<span id="cb12-7"><a href="#cb12-7" aria-hidden="true" tabindex="-1"></a>  and then calculating the Sharpe Ratio. </span>
<span id="cb12-8"><a href="#cb12-8" aria-hidden="true" tabindex="-1"></a><span class="fu">draft</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span>
<span id="cb12-9"><a href="#cb12-9" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<p>When you are ready to publish the post, either remove the <code>draft</code> option or set it to <code>false</code>, then build the website.</p>
<p>Beyond support for drafts, Distill has a number of additional features to accommodate a variety of post authoring and contribution workflows, including importing posts published elsewhere on the web (e.g. on RPubs, in a Git repository, or on another blog). The article on <a href="blog_workflow.html">blog post workflow</a> describes these options in more detail.</p>
<h2 id="next-steps">Next steps</h2>
<h3 id="comments-and-sharing">Comments and sharing</h3>
<p>Readers will likely want to comment on and share articles they read on your blog. You can enable support for <a href="https://disqus.com/">Disqus comments</a> and sharing links for Twitter, LinkedIn, and other services by adding options to the <code>collection:posts</code> section of <code>_site.yml</code>.</p>
<p>For example, the following options provide the <a href="https://help.disqus.com/installation/whats-a-shortname">Disqus shortname</a> for a site and specify that we want sharing buttons for Twitter and LinkedIn.</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb13"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb13-2"><a href="#cb13-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb13-3"><a href="#cb13-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb13-4"><a href="#cb13-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb13-5"><a href="#cb13-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb13-6"><a href="#cb13-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb13-7"><a href="#cb13-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb13-8"><a href="#cb13-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb13-9"><a href="#cb13-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">disqus</span><span class="kw">:</span><span class="at"> reproducible-finance-with-r</span></span>
<span id="cb13-10"><a href="#cb13-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">share</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="at">twitter</span><span class="kw">,</span><span class="at"> linkedin</span><span class="kw">]</span></span></code></pre></div>
<p>The following footer is then automatically included at the end of each post:</p>
<p><img src="images/social-footer.png" class="screenshot" style="width:80.0%" /></p>
<p>Note that the <code>base_url</code> field is required in order to use Disqus and sharing links.</p>
<p>Valid values for the <code>share</code> option are <code>twitter</code>, <code>linkedin</code>, <code>facebook</code>, <code>google-plus</code>, and <code>pinterest</code>.</p>
<p>By default, the full text of Disqus comments are not displayed (rather, a link is provided that will expand the comment section). This is done so that a long comment section doesn’t obscure the bibliography and other appendices. If you’d rather show the comments by default you can use this alterante syntax for <code>disqus</code> configuration:</p>
<div class="sourceCode" id="cb14"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb14-3"><a href="#cb14-3" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">disqus</span><span class="kw">:</span><span class="at"> </span></span>
<span id="cb14-4"><a href="#cb14-4" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">shortname</span><span class="kw">:</span><span class="at"> reproducible-finance-with-r</span></span>
<span id="cb14-5"><a href="#cb14-5" aria-hidden="true" tabindex="-1"></a><span class="at">      </span><span class="fu">hidden</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span>
<span id="cb14-6"><a href="#cb14-6" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">share</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="at">twitter</span><span class="kw">,</span><span class="at"> linkedin</span><span class="kw">]</span></span></code></pre></div>
<p>Specifying the <code>hidden: false</code> option for <code>disqus</code> will causes all comments to be displayed inline by default.</p>
<h3 id="site-search">Site search</h3>
<p>Blog sites automatically include a search box within the navigation bar. You can disable the search box using the the <code>search</code> field of the <code>navbar</code> key within <code>_site.yml</code>. For example:</p>
<div class="sourceCode" id="cb15"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb15-2"><a href="#cb15-2" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;distill&quot;</span></span>
<span id="cb15-3"><a href="#cb15-3" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Distill for R Markdown&quot;</span></span>
<span id="cb15-4"><a href="#cb15-4" aria-hidden="true" tabindex="-1"></a><span class="fu">navbar</span><span class="kw">:</span></span>
<span id="cb15-5"><a href="#cb15-5" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">logo</span><span class="kw">:</span></span>
<span id="cb15-6"><a href="#cb15-6" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">image</span><span class="kw">:</span><span class="at"> images/logo.png</span></span>
<span id="cb15-7"><a href="#cb15-7" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">href</span><span class="kw">:</span><span class="at"> https://www.rstudio.com</span></span>
<span id="cb15-8"><a href="#cb15-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">search</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span>
<span id="cb15-9"><a href="#cb15-9" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<p>Note that top level articles within blog sites will also be included in search results so long as they have a <code>description</code> metadata field.</p>
<h3 id="source-code">Source code</h3>
<p>If you want to display a link to the source code for your blog on the navigation bar, add a <code>source_url</code> field to the <code>navbar</code> definition. For example:</p>
<div class="sourceCode" id="cb16"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb16-2"><a href="#cb16-2" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;distill&quot;</span></span>
<span id="cb16-3"><a href="#cb16-3" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Distill for R Markdown&quot;</span></span>
<span id="cb16-4"><a href="#cb16-4" aria-hidden="true" tabindex="-1"></a><span class="fu">navbar</span><span class="kw">:</span></span>
<span id="cb16-5"><a href="#cb16-5" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">logo</span><span class="kw">:</span></span>
<span id="cb16-6"><a href="#cb16-6" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">image</span><span class="kw">:</span><span class="at"> images/logo.png</span></span>
<span id="cb16-7"><a href="#cb16-7" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">href</span><span class="kw">:</span><span class="at"> https://www.rstudio.com</span></span>
<span id="cb16-8"><a href="#cb16-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">source_url</span><span class="kw">:</span><span class="at"> https://github.com/rstudio/distill</span></span>
<span id="cb16-9"><a href="#cb16-9" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<p>Note that if you’ve already defined a <code>repository_url</code> field in <code>_site.yml</code> you can just use <code>source_url: true</code> and your <code>repository_url</code> will be used for the link.</p>
<h3 id="organizing-posts">Organizing posts</h3>
<p>You can use whatever scheme you like to organize the <code>_posts</code> directory. You can have all posts at the top level or you can create subdirectories to create groupings of posts.</p>
<p>One popular scheme for organizing blog posts is to use a date prefix for the post directory names. For example:</p>
<pre class="markup"><code>_posts/
  2017-11-09-visualizing-asset-returns/
  2017-09-13-asset-volatility/
  2017-03-07-quandl-and-forecasting/
  2016-11-08-sharpe-ratio/</code></pre>
<p>The benefits of this scheme are that post names are given additional uniqueness (to guard against colliding names over the long term) and are also automatically listed in order when browsing the <code>_posts</code> directory.</p>
<p>Note that if you use a date-prefixed post directory you are not required to specify an explicit <code>date</code> field within your post’s metadata.</p>
<h3 id="preview-images">Preview images</h3>
<p>Note that the listing for our example above includes a preview image for each post. Preview thumbnail images are generated automatically based on the first plot encountered within your post. You can specify that a specific plot should be used as the preview image using the <code>preview</code> chunk option. For example:</p>
<pre class="clike"><code>```{r, layout=&quot;l-body-outset&quot;, preview=TRUE}
library(ggplot2)
ggplot(diamonds, aes(carat, price)) + geom_smooth() +
  facet_grid(~ cut)
```</code></pre>
<p>If you want to use another image entirely as a post preview you add a <code>preview</code> field to the post’s metadata. For example, here we add a <code>preview</code> field to the example metadata from above (some fields excluded for brevity):</p>
<div class="sourceCode" id="cb19"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb19-2"><a href="#cb19-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;The Sharpe Ratio&quot;</span></span>
<span id="cb19-3"><a href="#cb19-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb19-4"><a href="#cb19-4" aria-hidden="true" tabindex="-1"></a>  In this post we present a classic finance use case using the</span>
<span id="cb19-5"><a href="#cb19-5" aria-hidden="true" tabindex="-1"></a>  PerformanceAnalytics, quantmod, and dygraphs packages. </span>
<span id="cb19-6"><a href="#cb19-6" aria-hidden="true" tabindex="-1"></a>  We&#39;ll demonstrate importing stock data, building a portfolio,</span>
<span id="cb19-7"><a href="#cb19-7" aria-hidden="true" tabindex="-1"></a>  and then calculating the Sharpe Ratio. </span>
<span id="cb19-8"><a href="#cb19-8" aria-hidden="true" tabindex="-1"></a><span class="fu">preview</span><span class="kw">:</span><span class="at"> images/sharpe-ratio.png</span></span>
<span id="cb19-9"><a href="#cb19-9" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<p>Preview images are also used for generating <a href="metadata.html#open-graph">Open Graph</a> and <a href="metadata.html#twitter-card">Twitter Card</a> metadata. However, since those systems require that preview images be specified as absolute URLs, you also need to add a <code>base_url</code> field to your <code>_site.yml</code> file as described above in <a href="#getting-started">Getting Started</a>.</p>
<h3 id="citations">Citations</h3>
<p>If your <code>_site.yml</code> file provides a <code>base_url</code> field, then an <a href="citations.html">article citation</a> appendix and related metadata will be included automatically within all published posts. For example:</p>
<p><img src="images/blog-citation.png" class="screenshot" style="width:95.0%" /></p>
<p>If you want to disable this behavior you can use the <code>collections:posts:citations</code> field within <code>_site.yml</code>. For example:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb20"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb20-2"><a href="#cb20-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb20-3"><a href="#cb20-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb20-4"><a href="#cb20-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb20-5"><a href="#cb20-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb20-6"><a href="#cb20-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb20-7"><a href="#cb20-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb20-8"><a href="#cb20-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb20-9"><a href="#cb20-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">disqus</span><span class="kw">:</span><span class="at"> reproducible-finance-with-r</span></span>
<span id="cb20-10"><a href="#cb20-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">share</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="at">twitter</span><span class="kw">,</span><span class="at"> linkedin</span><span class="kw">]</span></span>
<span id="cb20-11"><a href="#cb20-11" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">citations</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span></code></pre></div>
<p>You can also disable citations for an individual post by adding <code>citation: false</code> to the post’s YAML metadata.</p>
<h3 id="subscriptions">Subscriptions</h3>
<p>You can add HTML that enables readers to subscribe to your blog by including the <code>collections:posts:subscribe</code> option within <code>_site.yml</code>. The <code>subscribe</code> option in turn points to an HTML file that provides the ability to subscribe to your blog. For example:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb21"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb21-2"><a href="#cb21-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb21-3"><a href="#cb21-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb21-4"><a href="#cb21-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb21-5"><a href="#cb21-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb21-6"><a href="#cb21-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/11424/</span></span>
<span id="cb21-7"><a href="#cb21-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb21-8"><a href="#cb21-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb21-9"><a href="#cb21-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">disqus</span><span class="kw">:</span><span class="at"> reproducible-finance-with-r</span></span>
<span id="cb21-10"><a href="#cb21-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">share</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="at">twitter</span><span class="kw">,</span><span class="at"> linkedin</span><span class="kw">]</span></span>
<span id="cb21-11"><a href="#cb21-11" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">subscribe</span><span class="kw">:</span><span class="at"> _subscribe.html</span></span></code></pre></div>
<p><strong>_subscribe.html</strong></p>
<div class="sourceCode" id="cb22"><pre class="sourceCode html"><code class="sourceCode html"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;form</span> <span class="er">method</span><span class="ot">=</span><span class="st">&#39;post&#39;</span> <span class="er">action</span><span class="ot">=</span><span class="st">&#39;https://blogtrottr.com&#39;</span><span class="kw">&gt;</span></span>
<span id="cb22-2"><a href="#cb22-2" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;p&gt;</span>Enjoy this blog? Get notified of new posts via email:<span class="kw">&lt;/p&gt;</span></span>
<span id="cb22-3"><a href="#cb22-3" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&#39;text&#39;</span> <span class="er">name</span><span class="ot">=</span><span class="st">&#39;btr_email&#39;</span> <span class="kw">/&gt;</span></span>
<span id="cb22-4"><a href="#cb22-4" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&#39;hidden&#39;</span> <span class="er">name</span><span class="ot">=</span><span class="st">&#39;btr_url&#39;</span></span>
<span id="cb22-5"><a href="#cb22-5" aria-hidden="true" tabindex="-1"></a><span class="ot">         value=</span><span class="st">&#39;https://beta.rstudioconnect.com/content/11424/index.xml&#39;</span><span class="kw">/&gt;</span></span>
<span id="cb22-6"><a href="#cb22-6" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&#39;hidden&#39;</span> <span class="er">name</span><span class="ot">=</span><span class="st">&#39;schedule_type&#39;</span> <span class="er">value</span><span class="ot">=</span><span class="st">&#39;0&#39;</span> <span class="kw">/&gt;</span></span>
<span id="cb22-7"><a href="#cb22-7" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&#39;submit&#39;</span> <span class="er">value</span><span class="ot">=</span><span class="st">&#39;Subscribe&#39;</span> <span class="kw">/&gt;</span></span>
<span id="cb22-8"><a href="#cb22-8" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;/form&gt;</span></span></code></pre></div>
<p>This example uses the <a href="https://blogtrottr.com/">Blogtrottr</a> service to provide an email subscription. You could also use another service or simply include a link to your RSS feed.</p>
<p>The contents of <code>_subscribe.html</code> will be included in both the sidebar of the main listing page as well as in the footer of articles. Note that relative URLs won’t work in subscription HTML since the content appears at different levels of the site (thus we include the full URL to the RSS feed in the example above).</p>
<h3 id="custom-html">Custom HTML</h3>
<p>You can also add arbitrary HTML to the top of the sidebar by including the <code>collections:posts:custom</code> option within <code>_site.yml</code>. The <code>custom</code> option in turn points to an HTML file that will be displayed above the “Subscribe” and “Categories” sections. Unlike the Subscribe HTML, Cutstom HTML is not displayed in article footers. This custom feature can be used to display anything in the sidebar that Distill does not automatically generate. While only one custom file may be defined per collection, the HTML contained within is extremely adaptable to different use cases (even several simultaneously). For example, the below snippets will display an About section on top, and below that a search bar:</p>
<p><strong>_site.yml</strong></p>
<div class="sourceCode" id="cb23"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb23-1"><a href="#cb23-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;reproducible-finance-with-r&quot;</span></span>
<span id="cb23-2"><a href="#cb23-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Reproducible Finance with R&quot;</span></span>
<span id="cb23-3"><a href="#cb23-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb23-4"><a href="#cb23-4" aria-hidden="true" tabindex="-1"></a>  Exploring reproducible finance with the R statistical </span>
<span id="cb23-5"><a href="#cb23-5" aria-hidden="true" tabindex="-1"></a>  computing environment.</span>
<span id="cb23-6"><a href="#cb23-6" aria-hidden="true" tabindex="-1"></a><span class="fu">base_url</span><span class="kw">:</span><span class="at"> https://beta.rstudioconnect.com/content/3776/</span></span>
<span id="cb23-7"><a href="#cb23-7" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb23-8"><a href="#cb23-8" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span></span>
<span id="cb23-9"><a href="#cb23-9" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">disqus</span><span class="kw">:</span><span class="at"> reproducible-finance-with-r</span></span>
<span id="cb23-10"><a href="#cb23-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">share</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="at">twitter</span><span class="kw">,</span><span class="at"> linkedin</span><span class="kw">]</span></span>
<span id="cb23-11"><a href="#cb23-11" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">custom</span><span class="kw">:</span><span class="at"> _custom.html</span></span></code></pre></div>
<p><strong>_custom.html</strong></p>
<div class="sourceCode" id="cb24"><pre class="sourceCode html"><code class="sourceCode html"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;div</span> <span class="er">class</span><span class="ot">=</span><span class="st">&quot;sidebar-section custom&quot;</span><span class="kw">&gt;</span></span>
<span id="cb24-2"><a href="#cb24-2" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;h3&gt;</span>About<span class="kw">&lt;/h3&gt;</span></span>
<span id="cb24-3"><a href="#cb24-3" aria-hidden="true" tabindex="-1"></a>  This blog explores reproducible finance with the </span>
<span id="cb24-4"><a href="#cb24-4" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;a</span> <span class="er">href</span><span class="ot">=</span><span class="st">&quot;https://www.r-project.org/&quot;</span><span class="kw">&gt;</span>R<span class="kw">&lt;/a&gt;</span> </span>
<span id="cb24-5"><a href="#cb24-5" aria-hidden="true" tabindex="-1"></a>  statistical computing environment.</span>
<span id="cb24-6"><a href="#cb24-6" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;/div&gt;</span></span>
<span id="cb24-7"><a href="#cb24-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb24-8"><a href="#cb24-8" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;div</span> <span class="er">class</span><span class="ot">=</span><span class="st">&quot;sidebar-section custom&quot;</span><span class="kw">&gt;</span></span>
<span id="cb24-9"><a href="#cb24-9" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;h3&gt;</span>Search<span class="kw">&lt;/h3&gt;</span></span>
<span id="cb24-10"><a href="#cb24-10" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;form</span> <span class="er">action</span><span class="ot">=</span><span class="st">&quot;https://duckduckgo.com/&quot;</span><span class="kw">&gt;</span></span>
<span id="cb24-11"><a href="#cb24-11" aria-hidden="true" tabindex="-1"></a>    <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&quot;text&quot;</span> <span class="er">name</span><span class="ot">=</span><span class="st">&quot;q&quot;</span> <span class="er">placeholder</span><span class="ot">=</span><span class="st">&quot;Search...&quot;</span><span class="kw">&gt;</span></span>
<span id="cb24-12"><a href="#cb24-12" aria-hidden="true" tabindex="-1"></a>    <span class="kw">&lt;input</span> <span class="er">type</span><span class="ot">=</span><span class="st">&quot;hidden&quot;</span> <span class="er">name</span><span class="ot">=</span><span class="st">&quot;sites&quot;</span> </span>
<span id="cb24-13"><a href="#cb24-13" aria-hidden="true" tabindex="-1"></a><span class="ot">      value=</span><span class="st">&quot;https://beta.rstudioconnect.com/content/3776/&quot;</span><span class="kw">&gt;</span> <span class="co">&lt;!-- Replace with your blog URL --&gt;</span></span>
<span id="cb24-14"><a href="#cb24-14" aria-hidden="true" tabindex="-1"></a>    <span class="co">&lt;!--&lt;button type=&quot;submit&quot;&gt;Search&lt;/button&gt;--&gt;</span></span>
<span id="cb24-15"><a href="#cb24-15" aria-hidden="true" tabindex="-1"></a>  <span class="kw">&lt;/form&gt;</span></span>
<span id="cb24-16"><a href="#cb24-16" aria-hidden="true" tabindex="-1"></a><span class="kw">&lt;/div&gt;</span></span></code></pre></div>
<p><img src="images/custom_html_example_about_search.png" class="screenshot" style="width:50.0%" /></p>
<p>While the custom HTML option inherits general CSS styling from the rest of the Distill blog, by default it does not inherit the sidebar-specific CSS. In order to fully match the rest of the sidebar sections, each section must be nested within a <code>&lt;div class="sidebar-section custom"&gt;</code> tag, as seen in the above example. This configuration is intended to provide a good balance between flexibility and ease-of-use.</p>
<p>The example search bar functionality uses the popular <a href="duckduckgo.com">DuckDuckGo</a> search engine. After entering search terms and hitting the enter key the user is taken to the search engine’s website and shown relevant search results from the blog. Note that the blog will need to have been recently crawled by the search engine in order for search results to be thorough and up to date. Replacing the HTML snippet’s hard-coded blog URL should be the only modification necessary to begin using this example. Other search engines may be used with further modification. The “Search” button has been left out in this example, but may be uncommented if desired.</p>
<h3 id="supporting-files">Supporting files</h3>
<p>When a blog post is published, resource files located alongside the post in its directory are also published. The following files are <em>not</em> published by default:</p>
<ol type="1">
<li><p>Files beginning with <code>"."</code> (hidden files).</p></li>
<li><p>Files beginning with <code>"_"</code></p></li>
<li><p>Files known to contain R source code (e.g. <code>".R"</code>, <code>".s"</code>, <code>".Rmd"</code>), R data (e.g. <code>".RData"</code>, <code>".rds"</code>), or configuration data (e.g. <code>"rsconnect"</code> ,<code>"packrat"</code>, <code>"renv"</code>)).</p></li>
</ol>
<p>You can override this behavior using a <code>resources</code> metadata entry for your post, which can specify explicit files to <code>include</code> or <code>exclude</code>. For example (some fields excluded for brevity):</p>
<div class="sourceCode" id="cb25"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb25-1"><a href="#cb25-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb25-2"><a href="#cb25-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;The Sharpe Ratio&quot;</span></span>
<span id="cb25-3"><a href="#cb25-3" aria-hidden="true" tabindex="-1"></a><span class="fu">description</span><span class="kw">: </span><span class="ch">|</span></span>
<span id="cb25-4"><a href="#cb25-4" aria-hidden="true" tabindex="-1"></a>  In this post we present a classic finance use case using the</span>
<span id="cb25-5"><a href="#cb25-5" aria-hidden="true" tabindex="-1"></a>  PerformanceAnalytics, quantmod, and dygraphs packages. </span>
<span id="cb25-6"><a href="#cb25-6" aria-hidden="true" tabindex="-1"></a>  We&#39;ll demonstrate importing stock data, building a portfolio,</span>
<span id="cb25-7"><a href="#cb25-7" aria-hidden="true" tabindex="-1"></a>  and then calculating the Sharpe Ratio. </span>
<span id="cb25-8"><a href="#cb25-8" aria-hidden="true" tabindex="-1"></a><span class="fu">resources</span><span class="kw">:</span></span>
<span id="cb25-9"><a href="#cb25-9" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">exclude</span><span class="kw">:</span></span>
<span id="cb25-10"><a href="#cb25-10" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="ot">*.csv</span><span class="at">    </span></span>
<span id="cb25-11"><a href="#cb25-11" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div>
<h2 id="collections">Collections</h2>
<p>As described above, adding a blog to a Distill website requires creating a “posts” collection (i.e. a <code>_posts</code> directory containing sub-directories, each of which includes an article) and adding a listing page for your posts (most often the site’s home page).</p>
<p>In addition to “posts”, you can add other collections of articles to your site with their own index pages. The main benefits of including articles within a collection are:</p>
<ol type="1">
<li>The articles are never re-rendered unless you explicitly Knit them (which keeps your site building even if the R code within the article no longer runs due to e.g. changes in it’s package dependencies).</li>
<li>You can generate an index page and RSS feed for the collection.</li>
</ol>
<h3 id="creating-a-collection">Creating a collection</h3>
<p>To create a new article collection, do the following:</p>
<ol type="1">
<li><p>Create a top level directory for the collection (e.g “_analyses”)</p></li>
<li><p>Add an entry for it to your <code>_site.yml</code> file. For example:</p>
<div class="sourceCode" id="cb26"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb26-1"><a href="#cb26-1" aria-hidden="true" tabindex="-1"></a><span class="fu">collections</span><span class="kw">:</span></span>
<span id="cb26-2"><a href="#cb26-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">posts</span><span class="kw">:</span><span class="at"> </span></span>
<span id="cb26-3"><a href="#cb26-3" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">categories</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span>
<span id="cb26-4"><a href="#cb26-4" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">analyses</span><span class="kw">:</span></span>
<span id="cb26-5"><a href="#cb26-5" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">categories</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></li>
<li><p>Optionally, create an index page for your collection by adding the appropriate <code>listing</code> YAML front matter. For example, you could create a file named <code>analyses.Rmd</code> within the top-level directory of your website with the following YAML:</p>
<div class="sourceCode" id="cb27"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb27-1"><a href="#cb27-1" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span>
<span id="cb27-2"><a href="#cb27-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Analyses&quot;</span></span>
<span id="cb27-3"><a href="#cb27-3" aria-hidden="true" tabindex="-1"></a><span class="fu">listing</span><span class="kw">:</span><span class="at"> analyses</span></span>
<span id="cb27-4"><a href="#cb27-4" aria-hidden="true" tabindex="-1"></a><span class="pp">---</span></span></code></pre></div></li>
</ol>
<p>You may also want to add a link to your listing page in the <a href="website.html#site-navigation">site navigation menu</a>.</p>
<p>You can use the <code>create_post()</code> function to create articles within any collection. For example:</p>
<div class="sourceCode" id="cb28"><pre class="sourceCode r"><code class="sourceCode r"><span id="cb28-1"><a href="#cb28-1" aria-hidden="true" tabindex="-1"></a><span class="fu">create_post</span>(<span class="st">&quot;water-quality-trends&quot;</span>, <span class="at">collection =</span> <span class="st">&quot;analyses&quot;</span>)</span></code></pre></div>
<h2 id="theming">Theming</h2>
<p>Distill blogs can use <a href="website.html#theming">themes</a> and <a href="website.html#custom-style">CSS</a> just like Distill sites. You can use the <code>create_theme()</code> function to add a theme CSS file in the current working directory.</p>
<p>For example:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='fu'><a href='https://pkgs.rstudio.com/distill/reference/create_theme.html'>create_theme</a></span><span class='op'>(</span>name <span class='op'>=</span> <span class='st'>"theme"</span><span class='op'>)</span> </span></code></pre>
</div>
</div>
<p>Read more about customizing a Distill <a href="website.html#create-theme">theme</a>. To apply a custom theme site-wide, add a <code>theme</code> key to the top-level of your <code>_site.yml</code> configuration file:</p>
<div class="sourceCode" id="cb29"><pre class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb29-1"><a href="#cb29-1" aria-hidden="true" tabindex="-1"></a><span class="fu">name</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;distill&quot;</span></span>
<span id="cb29-2"><a href="#cb29-2" aria-hidden="true" tabindex="-1"></a><span class="fu">title</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;Distill for R Markdown&quot;</span></span>
<span id="cb29-3"><a href="#cb29-3" aria-hidden="true" tabindex="-1"></a><span class="fu">theme</span><span class="kw">:</span><span class="at"> theme.css </span></span>
<span id="cb29-4"><a href="#cb29-4" aria-hidden="true" tabindex="-1"></a><span class="fu">navbar</span><span class="kw">:</span></span>
<span id="cb29-5"><a href="#cb29-5" aria-hidden="true" tabindex="-1"></a><span class="co"># (navbar definition here)</span></span></code></pre></div>
<p>Blog posts (along with <a href="#listing-pages">listing</a> and <a href="#custom-listings">custom listing pages</a>) will follow the theme. Below are some examples of different themes applied to our demo blog.</p>
<div class="layout-chunk" data-layout="l-body">

</div>
<h3 id="example-themes">Example themes</h3>
<div class="panelset">
<section id="demo" class="panel">
<h4>Demo</h4>
<p>Demo theme detailed <a href="website.html#theming">here</a>.</p>
<div class="layout-chunk" data-layout="l-body">
<p><img src="images/demo-after.png" width="1032" /></p>
</div>
</section>
<section id="piping-hot-data" class="panel">
<h4>Piping Hot Data</h4>
<p>Inspired by: <a href="https://www.pipinghotdata.com/" class="uri">https://www.pipinghotdata.com/</a></p>
<div class="layout-chunk" data-layout="l-body">
<p><img src="images/shannon-after.png" width="1006" /></p>
</div>
</section>
<section id="before-i-sleep" class="panel">
<h4>Before I Sleep</h4>
<p>Inspired by: <a href="https://milesmcbain.xyz/" class="uri">https://milesmcbain.xyz/</a></p>
<div class="layout-chunk" data-layout="l-body">
<p><img src="images/miles-after.png" width="1006" /></p>
</div>
</section>
<section id="tidymodels" class="panel">
<h4>Tidymodels</h4>
<p>Inspired by: <a href="https://tidymodels.org" class="uri">https://tidymodels.org</a> (courtesy <a href="https://desiree.rbind.io/">Desirée De Leon</a>)</p>
<div class="layout-chunk" data-layout="l-body">
<p><img src="images/tidymodels-after.png" width="1006" /></p>
</div>
</section>
</div>
<h2 id="publishing-a-blog">Publishing a blog</h2>
<p>After you’ve authored one or more posts you will want to build the entire site before publishing it.</p>
<p>If your Distill website is contained within an RStudio project you can use the <strong>Build Website</strong> command available in the Build pane to generate the site:</p>
<p><img src="images/build-website.png" class="screenshot" style="width:95.0%" /></p>
<p>To build a website from the command line, use the <code>rmarkdown::render_site()</code> function:</p>
<div class="layout-chunk" data-layout="l-body">
<div class="sourceCode">
<pre class="sourceCode r"><code class="sourceCode r"><span><span class='kw'><a href='https://rdrr.io/r/base/library.html'>library</a></span><span class='op'>(</span><span class='va'><a href='https://github.com/rstudio/rmarkdown'>rmarkdown</a></span><span class='op'>)</span></span>
<span><span class='fu'><a href='https://pkgs.rstudio.com/rmarkdown/reference/render_site.html'>render_site</a></span><span class='op'>(</span><span class='op'>)</span></span></code></pre>
</div>
</div>
<p>There are a variety of options available for making your site available to others, see the article on <a href="publish_website.html">website publishing</a> for details.</p>
<h2 id="examples">Examples</h2>
<ul>
<li><p>The <a href="https://pkgs.rstudio.com/distill">distill reference site</a> includes several <a href="https://pkgs.rstudio.com/distill/articles/examples.html">example sites and blogs</a>.</p></li>
<li><p>An example which reproduces several posts from the Reproducible Finance with R series on the R Views blog can be found here: <a href="https://beta.rstudioconnect.com/content/11424/" class="uri">https://beta.rstudioconnect.com/content/11424/</a></p>
<p>The source code for the example can be found here: <a href="https://github.com/jjallaire/reproducible-finance-with-r" class="uri">https://github.com/jjallaire/reproducible-finance-with-r</a></p>
<div class="sourceCode" id="cb30"><pre class="sourceCode r distill-force-highlighting-css"><code class="sourceCode r"></code></pre></div></li>
</ul>
<!--radix_placeholder_article_footer-->
<!--/radix_placeholder_article_footer-->
</div>

<div class="d-appendix">
</div>


<!--radix_placeholder_site_after_body-->
<!--/radix_placeholder_site_after_body-->
<!--radix_placeholder_appendices-->
<div class="appendix-bottom">
<h3 id="updates-and-corrections">Corrections</h3>
<p>If you see mistakes or want to suggest changes, please <a href="https://github.com/rstudio/distill/issues/new">create an issue</a> on the source repository.</p>
<h3 id="reuse">Reuse</h3>
<p>Text and figures are licensed under Creative Commons Attribution <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Source code is available at <a href="https://github.com/rstudio/distill">https://github.com/rstudio/distill</a>, unless otherwise noted. The figures that have been reused from other sources don't fall under this license and can be recognized by a note in their caption: "Figure from ...".</p>
</div>
<!--/radix_placeholder_appendices-->
<!--radix_placeholder_navigation_after_body-->
<div class="distill-site-nav distill-site-footer">
<p>© Copyright 2018 <a
href="https://github.com/distillpub/template/blob/master/AUTHORS">The
Distill Template Authors</a> and <a
href="https://www.rstudio.com">RStudio, Inc</a>.</p>
<p>Software licensed under the <a
href="https://www.apache.org/licenses/LICENSE-2.0">Apache License,
v2.0</a>.</p>
</div>
<!--/radix_placeholder_navigation_after_body-->


</body>

</html>
