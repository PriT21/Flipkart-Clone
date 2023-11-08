let inputSearch = document.getElementById("inputSearch");
let formSearch = document.getElementById("formSearch")
let recentSearch = document.querySelector(".recentSearch")

let recentArray =["Mobiles","Laptops","Mouse","Earbuds"]
formSearch.addEventListener("submit",(enterText)=>{
   enterText.preventDefault()
   recentArray.unshift(inputSearch.value)
   renderRecent();
})

function renderRecent(){let recentSearchHtml= '';
recentArray.forEach(element=>{
    recentSearchHtml +=`
    <div class="recentList">
        <i class="fa-solid fa-clock-rotate-left recentSearchIcon"></i>
        <p>${element}</p>
    </div>
    `
})
recentSearch.innerHTML = recentSearchHtml
}
renderRecent()

/*********** Image Slider ***********/
const imageSlider = [
    {
        name : "img1",
        img :"assets/img1.jpg",
        link :"https://www.flipkart.com/travel/flights?param=Travel-DTHPW-DOM999_25thMar&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_DOM999_QPELFX6ECPQJ"
    },
    {
        name : "img2",
        img :"assets/img2.jpg",
        link :"https://www.flipkart.com/travel/flights?param=Travel-DTHPW-DOM999_25thMar&otracker=hp_bannerads_3_2.bannerAdCard.BANNERADS_DOM999_QPELFX6ECPQJ"
    },
    {
        name : "img3",
        img :"assets/img3.jpg",
        link :"https://www.flipkart.com/travel/flights?param=Travel-DTHPW-DOM999ASSUREDGIFT_26thMar&otracker=hp_bannerads_4_2.bannerAdCard.BANNERADS_FLYNOVS_OUHIEY704LKC"
    },
    {
        name : "img4",
        img :"assets/img4.jpg",
        link :"https://www.flipkart.com/travel/flights?param=Travel-DTHPW-INTL4999_25thMar&otracker=hp_bannerads_5_2.bannerAdCard.BANNERADS_INTL4999_64VH7M1R81NE"
    },
    {
        name : "img5",
        img :"assets/img5.jpg",
        link :"https://www.flipkart.com/furniture-furniturestudio-store?otracker=hp_bannerads_2_2.bannerAdCard.BANNERADS_Furniture%2BBestsellers_2YZ31B02ZD9E"
    },
]

let imgSliderHolder = document.querySelector(".imgSliderHolder")
let imgSliderHolderHTML = ''
console.log(imageSlider)

imageSlider.forEach(element=>{
    imgSliderHolderHTML+=`
    <div class=" ${element.name} imgSliderItem">
    <a href="${element.link}">
    <img src="${element.img}" alt="">
    </a>
    </div>
    `
})
imgSliderHolder.innerHTML = imgSliderHolderHTML;

let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")
let img4=document.querySelector(".img4")
let img5=document.querySelector(".img5")
let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage)
next_imageBtn.addEventListener("click", handleNextImage)

function handlePreveImage() {
    let imageallList = document.querySelectorAll(".imgSliderHolder")
    console.log(imageallList)
    if (start < 0)
    start += 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })

}
function handleNextImage() {
    let imageallList = document.querySelectorAll(".imgSliderHolder")
    console.log(imageallList)
    if (start > end)
        start -= 101
    imageallList.forEach(el => {
      el.style.transform = `translateX(${start}%)`
      })
}

function renderImageSlider() {
    if (start > end) {
        handleNextImage()
    }
    else {
        start = 100
    }
}



setInterval(renderImageSlider, 2500)
