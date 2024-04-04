// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/card-clash-duel-of-destiny/id6480499300";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/29/e4/a5/29e4a5c2-54c5-55bf-44b9-1b6c20d8aee9/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/22/41/14/224114cf-cb50-d724-3b09-f5f3824ce12e/a8a018cd-24c6-4685-b12e-9476222ab779_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/84/ad/60/84ad600d-43a3-c16d-1d55-add79822b2b7/68d5d2ae-bea7-4d2e-b1b5-6ebe5a62923e_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e7/cb/d5/e7cbd53b-a166-f517-fb6b-21c3c5ec5d3c/ad1e5ad9-f900-4fb0-863f-4a6db1a5a5d0_3.png/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}