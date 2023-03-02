let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")

searchForm.style.right = "-110%"
searchBtn.onclick = () => {
    if (searchForm.style.right == "-110%"){
        searchForm.style.right = "0"
        shoppingBtn.style.right = "-110%"
        loginForm.style.right = "-110%"
        navlink.style.right = "-110%"
    }
    else{
        searchForm.style.right = "-110%"
    }
}


let cartBtn = document.getElementById("cart-btn");
let shoppingBtn = document.querySelector(".shopping-cart")

shoppingBtn.style.right = "-110%"
cartBtn.onclick = () => {
    if (shoppingBtn.style.right == "-110%"){
        shoppingBtn.style.right = "0"
        searchForm.style.right = "-110%"
        loginForm.style.right = "-110%"
        navlink.style.right = "-110%"
    }
    else{
        shoppingBtn.style.right = "-110%"
    }
}


let userBtn = document.querySelector("#user-btn")
let loginForm = document.querySelector(".login-form")

loginForm.style.right = "-110%"
userBtn.onclick = () => {
    if (loginForm.style.right == "-110%"){
        loginForm.style.right = "0"
        searchForm.style.right = "-110%"
        shoppingBtn.style.right = "-110%"
        navlink.style.right = "-110%"

    } 
    else {
        loginForm.style.right = "-110%"
    }
}


let menuBtn = document.getElementById ("menu-btn")
let navlink = document.querySelector("ul")
let closeBtn = document.getElementById("close-btn")

navlink.style.right = "-110%"
menuBtn.onclick = () => {
    if(navlink.style.right =="-110%"){
        navlink.style.right = "0"
        searchForm.style.right = "-110%"
        loginForm.style.right = "-110%"
        shoppingBtn.style.right = "-110%"
    }
    else{
        navlink.style.right = "-110%"
    }
}