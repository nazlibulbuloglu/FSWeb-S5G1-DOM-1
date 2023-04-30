const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item, index)=>{
  item.textContent= siteContent.nav[`nav-item-${index + 1}`];
  item.classList.add("italic");
});

const mainTextContent = document.querySelectorAll(".text-content");
 let index = 0;
for (let i=0; i < mainTextContent.length; i++){
  mainTextContent[i].children[0].textContent = Object.values(
    siteContent["ana-içerik"]
   )[index];

  index +=1;
  mainTextContent[i].children[1].textContent = Object.values(
    siteContent["ana-içerik"]
  )[index];
  index += 1;
  };

  document
  .querySelector("#logo-img")
  .setAttribute("src", "http://localhost:9000/img/logo.png");
  
document.querySelector("button").textContent = "Başlayın";

document.querySelector("h1").textContent = "Bu DOM Mükemmel";
document
  .querySelector("#cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png");

document
  .querySelector("#middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");  

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");

const iletisim = document.querySelectorAll("section.contact h4, section.contact p");

iletisim[0].textContent = siteContent["iletisim"]["iletişim-h4"];
iletisim[1].textContent = siteContent["iletisim"]["adres"];
iletisim[2].textContent = siteContent["iletisim"]["telefon"];
iletisim[3].textContent = siteContent["iletisim"]["email"];