h.innerHTML = 
`<div class="m_bar">
<ul class="menu">
  <li>
    <a href="javascript:link('index.html')" class="first in_menu">ホーム</a>
  </li>
  <li>
    <a href="javascript:link('page_1.html')" class="first in_menu">AIとは</a>
    <ul>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
    </ul>
  </li>
  <li>
    <a href="javascript:link('page_2.html')" class="first in_menu">活用例</a>
    <ul>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
    </ul>
  </li>
  <li>
    <a href="javascript:link('page_3.html')" class="first in_menu">AIがもたらす未来</a>
    <ul>
      <li><a href="javascript:link('page_3.html#hoge')">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
      <li><a href="">子メニュー</a></li>
    </ul>
  </li>
</ul>
<div id="humb" onclick="menu()">
  <div></div>
  <div></div>
  <div></div>
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
      <a href="javascript:link('page_1.html')" class="first">AIとは</a>
      <ul>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:link('page_2.html')" class="first">活用例</a>
      <ul>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:link('page_3.html')" class="first">AIがもたらす未来</a>
      <ul>
        <li><a href="javascript:link('page_3.html#hoge')">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
        <li><a href="">子メニュー</a></li>
      </ul>
    </li>
  </ul>
</div>
</div>
<div class="bar"></div>`;