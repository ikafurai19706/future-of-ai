let timer1 = null;
let cnt = 0;
let m_list = ["humb", "sidebar"]

function load1() {
  if (location.pathname.endsWith("/index.html") || location.pathname.endsWith("/")) {
    entries = window.performance.getEntriesByType("navigation");
    if (entries[0].type === "navigate" || entries[0].type === "prerender") {
      o_Prog.classList.add("load");
    } else {
      opening.style.display = "none";
    }
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
  cont.style.display = "block";
}

function link(l) {
  if (l.indexOf("index.html") > -1) {
    o_Filter.style.backgroundColor = "black";
  }
  o_Filter.style.webkitTransition = "0.4s";
  o_Filter.style.transition = "0.4s";
  o_Filter.classList.remove("load");
  setTimeout(() => {
    window.location.href = l;
  }, 400);
}

function menu() {
  m_list.forEach((l) => {
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
  header_b.style.height = document.getElementById("h").clientHeight + "px";
}


window.addEventListener("pageshow", () => {
  load1();
  setTimeout(load2, 2100);
  setTimeout(() => {
    o_Filter.classList.add("load");
  }, 300);
  setTimeout(load3, 200);
  setTimeout(header, 240);
  setTimeout(() => {
    const targetId = window.location.hash;
    console.log(targetId);
    const targetElement = document.querySelector(targetId);
    console.log(targetElement);
    const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
    console.log(targetOffsetTop)
    window.scrollTo({
      top: targetOffsetTop
    });
  }, 500)
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