let timer1 = null;
let cnt = 0;
let m_list = ["humb", "sidebar"]

function load1() {
  if (location.pathname.endsWith("/index.html") || location.pathname.endsWith("/")) {
    entry = window.performance.navigation.type;
    if (entry === 1) {
      opening.style.display = "none";
      setTimeout(anime, 600);
    } else {
      o_Prog.classList.add("load");
      setTimeout(anime, 3000);
    }
  }
  [...document.getElementsByTagName("span")].forEach(l => {
    l.style.color = l.className;
  });
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf("ipad") > -1 ||
    ua.indexOf("macintosh") > -1 && "ontouchend" in document) {
    [...humb.getElementsByTagName("div")].forEach(e => {
      e.style.height = "1px";
    })
  }

}

function load2() {
  if (location.pathname.endsWith("/index.html") || location.pathname.endsWith("/")) {
    o_Prog.classList.add("visible");
    o_Up.classList.add("visible");
    o_Down.classList.add("visible");
  }
}

function load3() {
  Array.prototype.forEach.call(document.getElementsByClassName("in_menu"), e => {
    if (e.href.indexOf(location.pathname.substring(location.pathname.lastIndexOf("/") + 1)) > -1) {
      e.classList.add("now");
    }
  });
  cont.style.display = "block";
}

function link(l) {
  var pn = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  if (location.pathname.indexOf("#") > -1) {
    pn = pn.substring(0, pn.indexOf("#"));
  } else if (pn == "") {
    pn = "index.html";
  }
  if (l.indexOf("index.html") > -1) {
    o_Filter.style.backgroundColor = "black";
  } else {
    o_Filter.style.backgroundColor = "white";
  }
  o_Filter.style.webkitTransition = "0.4s";
  o_Filter.style.transition = "0.4s";
  if (pn.indexOf(l) > -1 || l.indexOf(pn) > -1) {
    m_list.forEach((l) => {
      var m_id = document.getElementById(l);
      m_id.classList.remove("on");
      m_id.classList.remove("off");
    });
    if (l.indexOf("#") > -1) {
      location.href = l;
    } else {
      window.scrollTo(0, 0);
    }
  } else {
    o_Filter.classList.remove("load");
    setTimeout(() => {
      location.href = l;
    }, 400);
  }
}

function scroll() {
  const targetId = location.hash;
  const targetElement = document.querySelector(targetId);
  const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
  window.scrollTo({
    top: targetOffsetTop
  });
}

function anime() {
  frame_box.classList.add("load");
}

function menu() {
  m_list.forEach(l => {
    var m_id = document.getElementById(l);
    m_id.classList.toggle("on");
    if (m_id.classList.contains("on")) {
      m_id.classList.remove("off");
    } else {
      m_id.classList.add("off");
    }
  });
}

function header() {
  var vw = document.documentElement.clientWidth;
  var vh = document.documentElement.clientHeight;
  var header = document.getElementById("h").clientHeight;
  var top = (vh - header);
  var img = t.getElementsByTagName("img")[0];
  header_b.style.height = header + "px";
  t.style.height = (top * 0.7) + "px";

  if (vw / vh > 1) {
    img.style.width = vw + "px";
    img.style.height = "auto";
  } else {
    img.style.width = "auto";
    img.style.height = vh + "px";
  }

}


window.addEventListener("pageshow", () => {
  load1();
  setTimeout(load2, 2100);
  setTimeout(() => {
    o_Filter.classList.add("load");
  }, 300);
  setTimeout(load3, 200);
  setTimeout(header, 300);
  setTimeout(scroll, 500);
});

window.addEventListener("resize", () => {
  header();
  if (window.innerWidth >= 800) {
    m_list.forEach((l) => {
      var m_id = document.getElementById(l);
      m_id.classList.remove("on");
      m_id.classList.remove("off");
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop
      });
    });
  });
});