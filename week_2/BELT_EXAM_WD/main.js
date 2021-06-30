function cartAlert() {
    alert("Your shopping cart is empty");
}

function switchImg(image) {
    var image = document.querySelector(".succulent1")
    image.src = "succulents-2.jpg"
    
}

function removeImg(image) {
    var image = document.querySelector(".succulent1")
    image.src = "succulents-1.jpg"
}

function removeCookies(cookies) {
    var cookies = document.querySelector(".cookies")
    cookies.remove()
    console.log("working")
}


