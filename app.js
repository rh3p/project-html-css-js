const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "DAYTONA",
        price: "1,321,500",
        colors: [
            {
                code: "silver",
                img: "./img/daytonasilver-.png",
            },
            {
                code: "gold",
                img: "./img/daytonagold-.png",
            },
        ],
    },
    {
        id: 2,
        title: "SUBMARINER",
        price: "799,500",
        colors: [
            {
                code: "blue",
                img: "./img/submarinerblue-.png",
            },
            {
                code: "gold",
                img: "./img/submarinergoldd-.png",
            },
        ],
    },
    {
        id: 3,
        title: "YACHT-MASTER",
        price: "2,777,500",
        colors: [
            {
                code: "gold",
                img: "./img/yachtmastergold-.png",
            },
            {
                code: "silver",
                img: "./img/yachtmastersilver-.png",
            },

        ],
    },
    {
        id: 4,
        title: "DATEJUST",
        price: "791,000",
        colors: [
            {
                code: "gold",
                img: "./img/datejustgold-.png",
            },
            {
                code: "silver",
                img: "./img/datejustsilver-.png",
            },
        ],
    },
    {
        id: 5,
        title: "DAY-DATE",
        price: "3,774,500",
        colors: [
            {
                code: "green",
                img: "./img/day-dategreen-.png",
            },
            {
                code: "black",
                img: "./img/day-datergg-.png",
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");




menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = '₹' + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
});

close.addEventListener("click", () => {
    payment.style.display = "none"
});