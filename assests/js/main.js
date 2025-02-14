// ========= SHOW MENU =========

const navMenu = document.getElementById("nav-menu"),
  navMenuShow = document.getElementById("nav-togle"),
  navMenuClose = document.getElementById("nav-close");

// Menu Show Özelliği Aç
if (navMenuShow) {
  navMenuShow.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Show Özelliği Kapat
if (navMenuClose) {
  navMenuClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ========= HOME SWİPER =========

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Change Background Header

function scrollHeader() {
  const header = document.getElementById("header");
  // Eğer scrollbar 50px seviyesinden aşağı inerse gölge classı eklenecek header etiketine
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ========= NEW SWİPER =========

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16, // slide arası mesafe
  slidesPerView: "auto", // Ekrana kaç tane slayt sığacağını otomatik belirler
  centeredSlides: true,
  loop: true, // Slaytları sonsuz döngü içinde çalıştırır
});

// ========= SHOW CART =========

const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart_shop"),
  cartClose = document.getElementById("cart-close");

// Cart Show Özelliği Aç
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show__cart");
  });
}

// Cart Show Özelliği Kapat
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show__cart");
  });
}

// ========= SHOW LOGIN =========

const login = document.getElementById("login"),
  loginShow = document.getElementById("login-togle"),
  loginClose = document.getElementById("login-close");

// Cart Show Özelliği Aç
if (loginShow) {
  loginShow.addEventListener("click", () => {
    login.classList.add("show__login");
  });
}

// Cart Show Özelliği Kapat
if (loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove("show__login");
  });
}

// ========= QUESTIONS ACCORDIONS =========

const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if(openItem && openItem !== item){
        toggleItem(openItem)
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// ========= SHOW SCROLL UP =========
function scrollUp() {
  const scrollUp = document.getElementById("scrollup");

  if (this.scrollY >= 350) scrollUp.classList.add("show_scroll");
  else scrollUp.classList.remove("show_scroll");
}

window.addEventListener("scroll", scrollUp);


// ========= STYLE SWITCHER  =========

const styleSwtcherToggle = document.querySelector(".style__switcher-togler");
styleSwtcherToggle.addEventListener("click", () => {
  document.querySelector(".style__switcher").classList.toggle("open");
})

// HIDE STYLE SWITCHER ON SCROLL

window.addEventListener("scroll", () => {
  if(document.querySelector(".style__switcher").classList.contains("open")){
    document.querySelector(".style__switcher").classList.remove("open")
  }
})

// THEME COLORS
function themeColors() {
  const colorStyle = document.querySelector(".js-color-style"), 
  themeColorsContainer = document.querySelector(".js-theme-colors");

  themeColorsContainer.addEventListener("click",({target}) => {
    if(target.classList.contains("js-theme-color-item")){
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
      setColors();
    }
  });

  function setColors() {
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length - 1);
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
    
        
    if(document.querySelector(".js-theme-color-item.active")){
      document.querySelector(".js-theme-color-item.active").classList.remove("active");
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
  }

  if(localStorage.getItem("color") !== null) {
    setColors();
  }
  else{
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
    document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");
  }
}

themeColors()

