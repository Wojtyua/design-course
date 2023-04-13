const header = document.querySelector(".header");
const button = document.querySelector(".btn-mobile-nav");
const year = document.querySelector(".year");
const hero = document.querySelector(".section-hero");

// toggle mobile nav
button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) document.body.classList.add("nav-sticky");
  else document.body.classList.remove("nav-sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
});
headerObserver.observe(hero);

// auto year
year.textContent = new Date().getFullYear();

// smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
