/* 
THE PRECIOUS CREATIONS
Main Website Script
*/


// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}




// ===============================
// CART SYSTEM
// ===============================


let cart = JSON.parse(localStorage.getItem("TPCcart")) || [];





function addToCart(productName, productPrice){



const product = {

name: productName,

price:Number(productPrice),

quantity:1

};





const existingProduct = cart.find(

item => item.name === productName

);




if(existingProduct){


existingProduct.quantity++;


}

else{


cart.push(product);


}





localStorage.setItem(

"TPCcart",

JSON.stringify(cart)

);





updateCartCount();



alert(productName + " added to cart");



}







// ===============================
// CART COUNT
// ===============================


function updateCartCount(){


const cartCount = document.getElementById("cartCount");



if(cartCount){


let total = 0;


cart.forEach(item=>{

total += item.quantity;

});



cartCount.innerHTML = total;



}



}





updateCartCount();

// ===============================
// DISPLAY CART ITEMS
// ===============================


function displayCart(){


const cartItemsContainer = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");



if(!cartItemsContainer){

return;

}





cartItemsContainer.innerHTML = "";



let total = 0;



cart.forEach((item,index)=>{



total += item.price * item.quantity;



const cartItem = document.createElement("div");



cartItem.className = "cart-item";



cartItem.innerHTML = `

<h3>${item.name}</h3>

<p>
Price: M${item.price}
</p>

<p>
Quantity: ${item.quantity}
</p>


<button onclick="removeFromCart(${index})">

Remove

</button>


`;



cartItemsContainer.appendChild(cartItem);



});





if(cartTotal){

cartTotal.innerHTML = "Total: M" + total;

}



}






// ===============================
// REMOVE FROM CART
// ===============================


function removeFromCart(index){


cart.splice(index,1);



localStorage.setItem(

"TPCcart",

JSON.stringify(cart)

);



displayCart();


updateCartCount();



}







// ===============================
// CLEAR CART
// ===============================


function clearCart(){


cart=[];



localStorage.removeItem("TPCcart");



displayCart();


updateCartCount();



}





// LOAD CART PAGE


displayCart();

// ===============================
// TPC AI SKINCARE ASSISTANT
// ===============================

function askAI(){

let question = document
.getElementById("aiQuestion")
.value
.toLowerCase();


let answer = document.getElementById("aiAnswer");


let response="";


if(question.includes("dry") || question.includes("hydration")){

response =
"Your skin may need hydration. We recommend Vitamin C & Hyaluronic Acid Serum (M180), Goji Berry Serum (M350), Carrot Face & Body Oil (M150), and nourishing soaps.";

}


else if(question.includes("glow") || question.includes("bright")){

response =
"For a glowing routine, try Turmeric Glow Up Combo (M500), Glow Up Combo (M350), Vitamin C Serum (M180), and Carrot Face & Body Oil (M150).";

}


else if(question.includes("hair") || question.includes("growth")){

response =
"For stronger, healthier-looking hair, explore Extreme Hair Growth Oil (M100), Extreme Hair Growth Combo (M300), and Hair Butter (M150).";

}


else if(question.includes("dark") || question.includes("spots") || question.includes("uneven")){

response =
"For uneven skin tone concerns, we recommend Lightening Oil (M150), Lightening Cream (M400), Dark Armpits Roll On (M150), and Glow combinations.";

}


else if(question.includes("soap")){

response =
"Our handcrafted soaps include Lavender Soap, Rooibos Soap, Papaya Soap, Honey & Oats Soap, Rice Flour Kaolin Clay Soap, Coffee & Cedarwood Soap, and botanical blends.";

}


else if(question.includes("combo") || question.includes("set")){

response =
"Our best seller combinations include Turmeric Glow Up Combo (M500), Stretch Marks & Glow Combo (M550), Extreme Hair Growth Combo (M300), Glow Up Combo (M350), and Dark Inner Thighs Cream & Carrot Oil Combo (M450).";

}


else{

response =
"Welcome to The Precious Creations . I can help you choose products for glow, hydration, hair growth, dark spots, soaps, oils, and skincare routines.";

}


answer.innerHTML=response;

}




// ===============================
// AUTO UPDATE CART WHEN PAGE LOADS
// ===============================


window.onload = function(){


updateCartCount();


displayCart();


};
// ===============================
// CONTACT FORM WHATSAPP
// ===============================


const contactForm = document.getElementById("contactForm");


if(contactForm){


contactForm.addEventListener("submit",function(e){


e.preventDefault();



let name = document.getElementById("customerName").value;

let email = document.getElementById("customerEmail").value;

let phone = document.getElementById("customerPhone").value;

let message = document.getElementById("customerMessage").value;




let whatsappMessage =

"Hello The Precious Creations,%0A%0A" +

"Name: " + name +

"%0AEmail: " + email +

"%0APhone: " + phone +

"%0AMessage: " + message;




window.open(

"https://wa.me/26657333532?text=" + whatsappMessage,

"_blank"

);



});


}





function openWhatsApp(){


window.open(

"https://wa.me/26657333532",

"_blank"

);


}

// ===============================
// WHATSAPP CHECKOUT
// ===============================


function checkoutWhatsApp(){


if(cart.length === 0){


alert("Your cart is empty");


return;


}




let message = 
"Hello The Precious Creations,%0A%0AI would like to place an order:%0A%0A";



let total = 0;



cart.forEach(item=>{


message +=

item.name +

" x " +

item.quantity +

" = M" +

(item.price * item.quantity) +

"%0A";



total += item.price * item.quantity;


});



message +=

"%0ATotal: M" +

total;



window.open(

"https://wa.me/26657333532?text=" + message,

"_blank"

);



}

// ===============================
// CHECKOUT SYSTEM
// ===============================


function loadCheckout(){


const items = document.getElementById("checkoutItems");

const totalBox = document.getElementById("checkoutTotal");


if(!items){

return;

}



items.innerHTML="";


let total = 0;



cart.forEach(item=>{


let amount = item.price * item.quantity;


total += amount;



items.innerHTML += `

<div class="cart-item">

<h3>${item.name}</h3>

<p>
Quantity: ${item.quantity}
</p>

<p>
M${amount}
</p>

</div>

`;



});



if(totalBox){

totalBox.innerHTML="Total: M"+total;

}



}




const checkoutForm = document.getElementById("checkoutForm");



if(checkoutForm){



checkoutForm.addEventListener("submit",function(e){


e.preventDefault();



let name =
document.getElementById("checkoutName").value;


let phone =
document.getElementById("checkoutPhone").value;


let address =
document.getElementById("checkoutAddress").value;


let payment =
document.getElementById("paymentMethod").value;



let order = "";

let total = 0;



cart.forEach(item=>{


let amount=item.price*item.quantity;


total += amount;



order +=

item.name +

" x " +

item.quantity +

" = M" +

amount +

"%0A";


});





let message =

"Hello The Precious Creations,%0A%0A" +

"Customer: "+name+

"%0APhone: "+phone+

"%0AAddress: "+address+

"%0APayment: "+payment+

"%0A%0AOrder:%0A"+

order+

"%0ATotal: M"+total;




window.open(

"https://wa.me/26657333532?text="+message,

"_blank"

);



});

}



window.addEventListener("load",loadCheckout);