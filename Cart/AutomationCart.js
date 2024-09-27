let Milkcart=[];
let purse =1000;
document.getElementById("purse").innerText=`Balance: ₹${purse}`;
function Milk(itemName1,itemPrice1){
    Milkcart.push({Name : itemName1, Price : itemPrice1});
    updateMilkCounter();
}
function MilkDec(){
    if(Milkcart.length>0){
        Milkcart.pop();
    }
    updateMilkCounter();
}

function updateMilkCounter(){
    let counterMilk=Milkcart.length;
    document.getElementById("lable1").innerText=counterMilk;
}
 updateMilkCounter();


let Curdcart=[];
function Curd(itemName2,itemPrice2){
    Curdcart.push({Name : itemName2, Price : itemPrice2});
    updateCurdCounter();
}
function CurdDec(){
    if (Curdcart.length>0){
        Curdcart.pop();
    }
    updateCurdCounter();
}

function updateCurdCounter(){
    let counterCurd=Curdcart.length;
    document.getElementById("lable2").innerText=counterCurd;
}
updateCurdCounter();

let Paneercart=[];
function Paneer(itemName3,itemPrice3){
    Paneercart.push({Name : itemName3, Price : itemPrice3});
    updatePaneerCounter();
}
function PaneerDec(){
    if (Paneercart.length>0){
        Paneercart.pop();
    }
    updatePaneerCounter();
}

function updatePaneerCounter(){
    let counterPaneer=Paneercart.length;
    document.getElementById("lable3").innerText=counterPaneer;
}
let Eggcart=[];
function Egg(itemName4,itemPrice4){
    Eggcart.push({Name : itemName4, Price : itemPrice4});
    updateEggCounter();
}
function EggDec(){
    if (Eggcart.length>0){
        Eggcart.pop();
    }
    updateEggCounter();
}
function updateEggCounter(){
    let counterEgg=Eggcart.length;
    document.getElementById("lable4").innerText=counterEgg;
}

let Breadcart=[];
function Bread(itemName5,itemPrice5){
    Breadcart.push({Name : itemName5, Price : itemPrice5});
    updateBreadCounter();
}
function BreadDec(){
    if (Breadcart.length>0){
        Breadcart.pop();
    }
    updateBreadCounter();
}

function updateBreadCounter(){
    let counterBread=Breadcart.length;
    document.getElementById("lable5").innerText=counterBread;
}

function totalItems() {
    let cart = [...Milkcart, ...Eggcart, ...Paneercart, ...Breadcart, ...Curdcart];
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].Price;
    }
    amountLeft = purse - totalPrice;
    let totalItem = cart.length;
    document.getElementById('totalItem').textContent = totalItem;
    document.getElementById('totalPrize').textContent = `₹${totalPrice}`;
    Milkcart = [];
    Curdcart = [];
    Paneercart = [];
    Eggcart = [];
    Breadcart = [];

    document.getElementById("lable1").innerText = 0;
    document.getElementById("lable2").innerText = 0;
    document.getElementById("lable3").innerText = 0;
    document.getElementById("lable4").innerText = 0;
    document.getElementById("lable5").innerText = 0;
}
    
function checkBalance() {
    if (amountLeft >= 0) {
        // document.getElementById('walletAmount').textContent = `₹${amountLeft}`;
        document.getElementById('purse').textContent = `Balance: ₹${amountLeft}`;
    } else {
        // document.getElementById('walletAmount').textContent = "Insufficient Balance";
        document.getElementById('purse').textContent = "Insufficient Balance"
        alert("Insufficient Balance");
    }
}
