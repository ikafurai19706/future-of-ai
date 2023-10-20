h.innerHTML =
  `<div class="m_bar">
<ul class="menu">
  <li>
    <a href="javascript:link('index.html')" class="first in_menu">ホーム</a>
  </li>
  <li>
    <a href="javascript:link('101.html')" class="first in_menu is_parent">AIとは</a>
    <ul>
      <li><a href="javascript:link('101.html')">AIって何？</a></li>
      <li><a href="javascript:link('102.html')">種類</a></li>
      <li><a href="javascript:link('103.html')">歴史</a></li>
    </ul>
  </li>
  <li>
    <a href="javascript:link('201.html')" class="first in_menu is_parent">活用例</a>
    <ul>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
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
    <a>&nbsp;</a>
  </div>
  <div id="">
  <ul id="sidemenu">
    <li>
      <a class="first">&nbsp;</a>
    </li>
    <li>
      <a href="javascript:link('index.html')" class="first">ホーム</a>
    </li>
    <li>
      <a href="javascript:link('101.html')" class="first">AIとは</a>
      <ul>
        <li><a href="javascript:link('101.html')">AIって何？</a></li>
        <li><a href="javascript:link('102.html')">種類</a></li>
        <li><a href="javascript:link('103.html')">歴史</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:link('201.html')" class="first">活用例</a>
      <ul>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
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