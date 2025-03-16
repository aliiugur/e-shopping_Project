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


// Cart Ürün Sayı Arttırma ve Azaltma
const minus1 = document.getElementById("minus-1");
const plus1 = document.getElementById("plus-1");
const cart_item = document.getElementById("cart-item-1");
const trash1 = document.getElementById("trash1")
let sayi1 = 1 

minus1.addEventListener("click", function(){
  sayi1 -= 1
  cart_item.innerHTML = sayi1
  if(sayi1 == 0){
    document.getElementById("item-1").innerHTML = ""
  }
});

plus1.addEventListener("click", function(){
  sayi1 += 1
  cart_item.innerHTML = sayi1
});

trash1.addEventListener("click",()=>{
  document.getElementById("item-1").innerHTML = ""
})





const minus2 = document.getElementById("minus-2");
const plus2 = document.getElementById("plus-2");
const cart_item2 = document.getElementById("cart-item-2");
const trash2 = document.getElementById("trash2")
let sayi2 = 1 

minus2.addEventListener("click", function(){
  sayi2 -= 1
  cart_item2.innerHTML = sayi2
  if(sayi2 == 0){
    document.getElementById("item-2").innerHTML = ""
  }
});

plus2.addEventListener("click", function(){
  sayi2 += 1
  cart_item2.innerHTML = sayi2
});
trash2.addEventListener("click",()=>{
  document.getElementById("item-2").innerHTML = ""
})


const minus3 = document.getElementById("minus-3");
const plus3 = document.getElementById("plus-3");
const cart_item3 = document.getElementById("cart-item-3");
const trash3 = document.getElementById("trash3")
let sayi3 = 1 

minus3.addEventListener("click", function(){
  sayi3 -= 1
  cart_item3.innerHTML = sayi3
  if(sayi3 == 0){
    document.getElementById("item-3").innerHTML = ""
  }
});

plus3.addEventListener("click", function(){
  sayi3 += 1
  cart_item3.innerHTML = sayi3
});

trash3.addEventListener("click",()=>{
  document.getElementById("item-3").innerHTML = ""
})



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

