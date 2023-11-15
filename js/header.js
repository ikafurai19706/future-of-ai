h.innerHTML =
  `<div class="m_bar">
<ul class="menu">
  <li>
    <a href="javascript:link('index.html')" class="first in_menu">ホーム</a>
  </li>
  <li>
    <a class="first in_menu is_parent" href="javascript:link('101.html')">AIとは</a>
    <ul>
      <li><a href="javascript:link('101.html')">AIって何？</a></li>
      <li><a href="javascript:link('102.html')">さまざまな種類</a></li>
      <li><a href="javascript:link('103.html')">AIの歴史</a></li>
      <li><a href="javascript:link('104.html')">AIの懸念点</a></li>
    </ul>
  </li>
  <li>
    <a class="first in_menu is_parent" href="javascript:link('201.html')">活用例</a>
    <ul>
      <li><a href="javascript:link('201.html')">身近なAI</a></li>
      <li><a href="javascript:link('202.html')">企業の活用例</a></li>
      <li><a href="javascript:link('203.html')">実際にやってみた</a></li>
    </ul>
  </li>
  <li>
    <a href="javascript:link('301.html')" class="first in_menu is_parent">AIがもたらす未来</a>
    <ul>
      <li><a href="javascript:link('301.html#hoge')">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
    </ul>
  </li>
</ul>
<div id="humb" onclick="menu()">
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
<div id="sidebar">
  <div id="screen" onclick="menu()">
  </div>
  <div id="">
  <ul id="sidemenu">
    <li>
      <a class="first no_select">　</a>
    </li>
    <li>
      <a href="javascript:link('index.html')" class="first">ホーム</a>
    </li>
    <li>
      <a href="javascript:link('101.html')" class="first">AIとは</a>
      <ul>
        <li><a href="javascript:link('101.html')">AIって何？</a></li>
        <li><a href="javascript:link('102.html')">さまざまな種類</a></li>
        <li><a href="javascript:link('103.html')">AIの歴史</a></li>
        <li><a href="javascript:link('104.html')">AIの懸念点</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:link('201.html')" class="first">活用例</a>
      <ul>
        <li><a href="">身近なAI</a></li>
        <li><a href="">企業の活用例</a></li>
        <li><a href="">実際にやってみた</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:link('301.html')" class="first">AIがもたらす未来</a>
      <ul>
        <li><a href="javascript:link('301.html#hoge')">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
      </ul>
    </li>
  </ul>
</div>
</div>`;