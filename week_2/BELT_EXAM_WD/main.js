function cartAlert() {
    alert("Your shopping cart is empty");
    console.log("cart")
}

function switchImg(image) {
    var image = document.querySelector(".succulent1")
    image.src = "succulents-2.jpg"
    console.log("succlent2")
    
}

function removeImg(image) {
    var image = document.querySelector(".succulent1")
    image.src = "succulents-1.jpg"
    console.log("succulent1")
}

function removeCookies(cookies) {
    var cookies = document.querySelector(".cookies")
    cookies.remove()
    console.log("removed cookies")
}


