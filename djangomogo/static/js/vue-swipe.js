





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d514f0f4cce26123a0bd5717d033adc4138d2033750224d5716f9e939d3b3aa6.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-efb85baef6e21d2cda60d33c4523edb11c7fad97c29bd4ded80b8b5412bd77a6.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-b29e324b8fafaead965049ef224818ef0dccc7384b5cfcad56a56a89c33a9438.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>vue-swipe/vue-swipe.js at master · ElemeFE/vue-swipe · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/12810740?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="ElemeFE/vue-swipe" property="og:title" /><meta content="https://github.com/ElemeFE/vue-swipe" property="og:url" /><meta content="vue-swipe - A touch slider for vue.js." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="929A:48A8:25CC7AC:3C544A3:58CA8F29" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="929A:48A8:25CC7AC:3C544A3:58CA8F29" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  
  
      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MWNmNDFjZDFlZGUzZjRlMjE3MmRmMjdhMzNhZjUxZjk5ZTJlYzc1YTAzNzYzYzNhNTJiZDYxZWE1MjVlMWM1Ynx7InJlbW90ZV9hZGRyZXNzIjoiMTYwLjEyMC41LjYxIiwicmVxdWVzdF9pZCI6IjkyOUE6NDhBODoyNUNDN0FDOjNDNTQ0QTM6NThDQThGMjkiLCJ0aW1lc3RhbXAiOjE0ODk2Njk5MjksImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="9fe372c04e55b2d145377b54b4b17ea4a55510ce">

  <meta http-equiv="x-pjax-version" content="1a3401a3ceaf57f4c7e14987c8a04358">
  

    
  <meta name="description" content="vue-swipe - A touch slider for vue.js.">
  <meta name="go-import" content="github.com/ElemeFE/vue-swipe git https://github.com/ElemeFE/vue-swipe.git">

  <meta content="12810740" name="octolytics-dimension-user_id" /><meta content="ElemeFE" name="octolytics-dimension-user_login" /><meta content="47816524" name="octolytics-dimension-repository_id" /><meta content="ElemeFE/vue-swipe" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="47816524" name="octolytics-dimension-repository_network_root_id" /><meta content="ElemeFE/vue-swipe" name="octolytics-dimension-repository_network_root_nwo" />
      <link href="https://github.com/ElemeFE/vue-swipe/commits/master.atom" rel="alternate" title="Recent Commits to vue-swipe:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/ElemeFE/vue-swipe/blob/master/dist/vue-swipe.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ElemeFE/vue-swipe/search" class="js-site-search-form" data-scoped-search-url="/ElemeFE/vue-swipe/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2FElemeFE%2Fvue-swipe%2Fblob%2Fmaster%2Fdist%2Fvue-swipe.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">


    <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FElemeFE%2Fvue-swipe"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/ElemeFE/vue-swipe/watchers"
     aria-label="25 users are watching this repository">
    25
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FElemeFE%2Fvue-swipe"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/ElemeFE/vue-swipe/stargazers"
      aria-label="376 users starred this repository">
      376
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FElemeFE%2Fvue-swipe"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/ElemeFE/vue-swipe/network" class="social-count"
       aria-label="139 users forked this repository">
      139
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/ElemeFE" class="url fn" rel="author">ElemeFE</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/ElemeFE/vue-swipe" data-pjax="#js-repo-pjax-container">vue-swipe</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ElemeFE/vue-swipe" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ElemeFE/vue-swipe" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/ElemeFE/vue-swipe/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ElemeFE/vue-swipe/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">14</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ElemeFE/vue-swipe/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ElemeFE/vue-swipe/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/ElemeFE/vue-swipe/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ElemeFE/vue-swipe/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/ElemeFE/vue-swipe/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ElemeFE/vue-swipe/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/ElemeFE/vue-swipe/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ElemeFE/vue-swipe/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/ElemeFE/vue-swipe/blob/bbe7949088c9d6b67ed74fd58ec089843216f98c/dist/vue-swipe.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:1af04ba903f7863ac26c6d87c50c38f4 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ElemeFE/vue-swipe/blob/legacy/dist/vue-swipe.js"
               data-name="legacy"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                legacy
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ElemeFE/vue-swipe/blob/master/dist/vue-swipe.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v2.0.2/dist/vue-swipe.js"
              data-name="v2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.2">
                v2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v2.0.1/dist/vue-swipe.js"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v2.0.0/dist/vue-swipe.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v0.2.7/dist/vue-swipe.js"
              data-name="v0.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.7">
                v0.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v0.2.6/dist/vue-swipe.js"
              data-name="v0.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.6">
                v0.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v0.2.5/dist/vue-swipe.js"
              data-name="v0.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.5">
                v0.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/v0.2.1/dist/vue-swipe.js"
              data-name="v0.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.1">
                v0.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ElemeFE/vue-swipe/tree/0.2.0/dist/vue-swipe.js"
              data-name="0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.2.0">
                0.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/ElemeFE/vue-swipe/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/ElemeFE/vue-swipe"><span>vue-swipe</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/ElemeFE/vue-swipe/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">vue-swipe.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/ElemeFE/vue-swipe/commit/743303ed062747fc3c8375e3018aff17ff6476f2" data-pjax>
          743303e
        </a>
        <relative-time datetime="2017-01-09T07:34:09Z">Jan 9, 2017</relative-time>
      </span>
      <div>
        <img alt="@rguanghui" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3411958?v=3&amp;s=40" width="20" />
        <a href="/rguanghui" class="user-mention" rel="contributor">rguanghui</a>
          <a href="/ElemeFE/vue-swipe/commit/743303ed062747fc3c8375e3018aff17ff6476f2" class="message" data-pjax="true" title="Support vue 2.1.8">Support vue 2.1.8</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>3</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="rguanghui" href="/ElemeFE/vue-swipe/commits/master/dist/vue-swipe.js?author=rguanghui"><img alt="@rguanghui" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3411958?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Leopoldthecoder" href="/ElemeFE/vue-swipe/commits/master/dist/vue-swipe.js?author=Leopoldthecoder"><img alt="@Leopoldthecoder" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/10095631?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="furybean" href="/ElemeFE/vue-swipe/commits/master/dist/vue-swipe.js?author=furybean"><img alt="@furybean" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1268572?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@rguanghui" height="24" src="https://avatars0.githubusercontent.com/u/3411958?v=3&amp;s=48" width="24" />
            <a href="/rguanghui">rguanghui</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Leopoldthecoder" height="24" src="https://avatars3.githubusercontent.com/u/10095631?v=3&amp;s=48" width="24" />
            <a href="/Leopoldthecoder">Leopoldthecoder</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@furybean" height="24" src="https://avatars0.githubusercontent.com/u/1268572?v=3&amp;s=48" width="24" />
            <a href="/furybean">furybean</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/ElemeFE/vue-swipe/raw/master/dist/vue-swipe.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/ElemeFE/vue-swipe/blame/master/dist/vue-swipe.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/ElemeFE/vue-swipe/commits/master/dist/vue-swipe.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    8.36 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(t,e){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=e():&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],e):&quot;object&quot;==typeof exports?exports.VueSwipe=e():t.VueSwipe=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p=&quot;&quot;,e(0)}([function(t,e,n){&quot;use strict&quot;;function i(t){return t&amp;&amp;t.__esModule?t:{&quot;default&quot;:t}}Object.defineProperty(e,&quot;__esModule&quot;,{value:!0}),e.SwipeItem=e.Swipe=void 0;var s=n(7),a=i(s),r=n(6),o=i(r);e.Swipe=a[&quot;default&quot;],e.SwipeItem=o[&quot;default&quot;]},function(t,e){&quot;use strict&quot;;Object.defineProperty(e,&quot;__esModule&quot;,{value:!0}),e[&quot;default&quot;]={name:&quot;mt-swipe-item&quot;,mounted:function(){this.$parent&amp;&amp;this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&amp;&amp;this.$parent.swipeItemDestroyed(this)}}},function(t,e,n){&quot;use strict&quot;;Object.defineProperty(e,&quot;__esModule&quot;,{value:!0});var i=n(4),s=n(3);e[&quot;default&quot;]={name:&quot;mt-swipe&quot;,created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}},props:{speed:{type:Number,&quot;default&quot;:300},auto:{type:Number,&quot;default&quot;:3e3},continuous:{type:Boolean,&quot;default&quot;:!0},showIndicators:{type:Boolean,&quot;default&quot;:!0},noDragWhenSingle:{type:Boolean,&quot;default&quot;:!0},prevent:{type:Boolean,&quot;default&quot;:!1}},methods:{swipeItemCreated:function(){var t=this;this.ready&amp;&amp;(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&amp;&amp;(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},translate:function(t,e,n,s){var a=this,r=arguments;if(n){this.animating=!0,t.style.webkitTransition=&quot;-webkit-transform &quot;+n+&quot;ms ease-in-out&quot;,setTimeout(function(){t.style.webkitTransform=&quot;translate3d(&quot;+e+&quot;px, 0, 0)&quot;},50);var o=!1,l=function(){o||(o=!0,a.animating=!1,t.style.webkitTransition=&quot;&quot;,t.style.webkitTransform=&quot;&quot;,s&amp;&amp;s.apply(a,r))};(0,i.once)(t,&quot;webkitTransitionEnd&quot;,l),setTimeout(l,n+100)}else t.style.webkitTransition=&quot;&quot;,t.style.webkitTransform=&quot;translate3d(&quot;+e+&quot;px, 0, 0)&quot;},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&amp;&amp;this.noDragWhenSingle;var e=[];this.index=0,t.forEach(function(t,n){e.push(t.$el),(0,s.removeClass)(t.$el,&quot;is-active&quot;),0===n&amp;&amp;(0,s.addClass)(t.$el,&quot;is-active&quot;)}),this.pages=e},doAnimate:function(t,e){var n=this;if(0!==this.$children.length&amp;&amp;(e||!(this.$children.length&lt;2))){var i,a,r,o,l,u=this.speed||300,c=this.index,d=this.pages,h=d.length;e?(i=e.prevPage,r=e.currentPage,a=e.nextPage,o=e.pageWidth,l=e.offsetLeft):(o=this.$el.clientWidth,r=d[c],i=d[c-1],a=d[c+1],this.continuous&amp;&amp;d.length&gt;1&amp;&amp;(i||(i=d[d.length-1]),a||(a=d[0])),i&amp;&amp;(i.style.display=&quot;block&quot;,this.translate(i,-o)),a&amp;&amp;(a.style.display=&quot;block&quot;,this.translate(a,o)));var f,p=this.$children[c].$el;&quot;prev&quot;===t?(c&gt;0&amp;&amp;(f=c-1),this.continuous&amp;&amp;0===c&amp;&amp;(f=h-1)):&quot;next&quot;===t&amp;&amp;(h-1&gt;c&amp;&amp;(f=c+1),this.continuous&amp;&amp;c===h-1&amp;&amp;(f=0));var g=function(){if(void 0!==f){var t=n.$children[f].$el;(0,s.removeClass)(p,&quot;is-active&quot;),(0,s.addClass)(t,&quot;is-active&quot;),n.index=f}i&amp;&amp;(i.style.display=&quot;&quot;),a&amp;&amp;(a.style.display=&quot;&quot;)};setTimeout(function(){&quot;next&quot;===t?(n.translate(r,-o,u,g),a&amp;&amp;n.translate(a,0,u)):&quot;prev&quot;===t?(n.translate(r,o,u,g),i&amp;&amp;n.translate(i,0,u)):(n.translate(r,0,u,g),&quot;undefined&quot;!=typeof l?(i&amp;&amp;l&gt;0&amp;&amp;n.translate(i,-1*o,u),a&amp;&amp;0&gt;l&amp;&amp;n.translate(a,o,u)):(i&amp;&amp;n.translate(i,-1*o,u),a&amp;&amp;n.translate(a,o,u)))},10)}},next:function(){this.doAnimate(&quot;next&quot;)},prev:function(){this.doAnimate(&quot;prev&quot;)},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,i=t.touches[0];n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var s=this.$children[this.index-1],a=this.$children[this.index],r=this.$children[this.index+1];this.continuous&amp;&amp;this.pages.length&gt;1&amp;&amp;(s||(s=this.$children[this.$children.length-1]),r||(r=this.$children[0])),n.prevPage=s?s.$el:null,n.dragPage=a?a.$el:null,n.nextPage=r?r.$el:null,n.prevPage&amp;&amp;(n.prevPage.style.display=&quot;block&quot;),n.nextPage&amp;&amp;(n.nextPage.style.display=&quot;block&quot;)}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,s=e.currentTopAbsolute-e.startTopAbsolute,a=Math.abs(i),r=Math.abs(s);if(5&gt;a||a&gt;=5&amp;&amp;r&gt;=1.73*a)return void(this.userScrolling=!0);this.userScrolling=!1,t.preventDefault(),i=Math.min(Math.max(-e.pageWidth+1,i),e.pageWidth-1);var o=0&gt;i?&quot;next&quot;:&quot;prev&quot;;e.prevPage&amp;&amp;&quot;prev&quot;===o&amp;&amp;this.translate(e.prevPage,i-e.pageWidth),this.translate(e.dragPage,i),e.nextPage&amp;&amp;&quot;next&quot;===o&amp;&amp;this.translate(e.nextPage,i+e.pageWidth)}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,s=t.currentTop-t.startTop,a=t.pageWidth,r=this.index,o=this.pages.length;if(300&gt;e){var l=Math.abs(i)&lt;5&amp;&amp;Math.abs(s)&lt;5;(isNaN(i)||isNaN(s))&amp;&amp;(l=!0),l&amp;&amp;this.$children[this.index].$emit(&quot;tap&quot;)}300&gt;e&amp;&amp;void 0===t.currentLeft||((300&gt;e||Math.abs(i)&gt;a/2)&amp;&amp;(n=0&gt;i?&quot;next&quot;:&quot;prev&quot;),this.continuous||(0===r&amp;&amp;&quot;prev&quot;===n||r===o-1&amp;&amp;&quot;next&quot;===n)&amp;&amp;(n=null),this.$children.length&lt;2&amp;&amp;(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}}},destroyed:function(){this.timer&amp;&amp;(clearInterval(this.timer),this.timer=null),this.reInitTimer&amp;&amp;(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.auto&gt;0&amp;&amp;(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener(&quot;touchstart&quot;,function(e){t.prevent&amp;&amp;e.preventDefault(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener(&quot;touchmove&quot;,function(e){t.dragging&amp;&amp;t.doOnTouchMove(e)}),e.addEventListener(&quot;touchend&quot;,function(e){return t.userScrolling?(t.dragging=!1,void(t.dragState={})):void(t.dragging&amp;&amp;(t.doOnTouchEnd(e),t.dragging=!1))})}}},function(t,e){&quot;use strict&quot;;var n=function(t){return(t||&quot;&quot;).replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,&quot;&quot;)},i=function(t,e){if(!t||!e)return!1;if(-1!=e.indexOf(&quot; &quot;))throw new Error(&quot;className should not contain space.&quot;);return t.classList?t.classList.contains(e):(&quot; &quot;+t.className+&quot; &quot;).indexOf(&quot; &quot;+e+&quot; &quot;)&gt;-1},s=function(t,e){if(t){for(var n=t.className,s=(e||&quot;&quot;).split(&quot; &quot;),a=0,r=s.length;r&gt;a;a++){var o=s[a];o&amp;&amp;(t.classList?t.classList.add(o):i(t,o)||(n+=&quot; &quot;+o))}t.classList||(t.className=n)}},a=function(t,e){if(t&amp;&amp;e){for(var s=e.split(&quot; &quot;),a=&quot; &quot;+t.className+&quot; &quot;,r=0,o=s.length;o&gt;r;r++){var l=s[r];l&amp;&amp;(t.classList?t.classList.remove(l):i(t,l)&amp;&amp;(a=a.replace(&quot; &quot;+l+&quot; &quot;,&quot; &quot;)))}t.classList||(t.className=n(a))}};t.exports={hasClass:i,addClass:s,removeClass:a}},function(t,e){&quot;use strict&quot;;var n=function(){return document.addEventListener?function(t,e,n){t&amp;&amp;e&amp;&amp;n&amp;&amp;t.addEventListener(e,n,!1)}:function(t,e,n){t&amp;&amp;e&amp;&amp;n&amp;&amp;t.attachEvent(&quot;on&quot;+e,n)}}(),i=function(){return document.removeEventListener?function(t,e,n){t&amp;&amp;e&amp;&amp;t.removeEventListener(e,n,!1)}:function(t,e,n){t&amp;&amp;e&amp;&amp;t.detachEvent(&quot;on&quot;+e,n)}}(),s=function(t,e,s){var a=function r(){s&amp;&amp;s.apply(this,arguments),i(t,e,r)};n(t,e,a)};t.exports={on:n,off:i,once:s}},function(t,e){},function(t,e,n){var i,s;i=n(1);var a=n(9);s=i=i||{},(&quot;object&quot;==typeof i[&quot;default&quot;]||&quot;function&quot;==typeof i[&quot;default&quot;])&amp;&amp;(s=i=i[&quot;default&quot;]),&quot;function&quot;==typeof s&amp;&amp;(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(5),i=n(2);var a=n(8);s=i=i||{},(&quot;object&quot;==typeof i[&quot;default&quot;]||&quot;function&quot;==typeof i[&quot;default&quot;])&amp;&amp;(s=i=i[&quot;default&quot;]),&quot;function&quot;==typeof s&amp;&amp;(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(&quot;div&quot;,{staticClass:&quot;mint-swipe&quot;},[n(&quot;div&quot;,{ref:&quot;wrap&quot;,staticClass:&quot;mint-swipe-items-wrap&quot;},[t._t(&quot;default&quot;)],2),t._v(&quot; &quot;),n(&quot;div&quot;,{directives:[{name:&quot;show&quot;,rawName:&quot;v-show&quot;,value:t.showIndicators,expression:&quot;showIndicators&quot;}],staticClass:&quot;mint-swipe-indicators&quot;},t._l(t.pages,function(e,i){return n(&quot;div&quot;,{staticClass:&quot;mint-swipe-indicator&quot;,&quot;class&quot;:{&quot;is-active&quot;:i===t.index}})}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(&quot;div&quot;,{staticClass:&quot;mint-swipe-item&quot;},[t._t(&quot;default&quot;)],2)},staticRenderFns:[]}}])});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>




    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.04408s from github-fe-f06f8d5.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-8e19569aacd39e737a14c8515582825f3c90d1794c0e5539f9b525b8eb8b5a8e.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-bfb72df02752a3a211da0068c66fda27578fe5420e855a691c73c3910742b831.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-a81ec983a7627a3a0840d0cbd81ff5675d688f3724249d72439c48e6e5502a54.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

