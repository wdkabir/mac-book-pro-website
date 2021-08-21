//all target html elements
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCost = document.getElementById('delivery-charge');
const allCost = document.getElementById('total-price');
const discountTotal = document.getElementById('total-with-discount');


// function for Total Price 
function updateTotalPrice(){
    const totalCost = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    allCost.innerText = totalCost;
    return totalCost;
}


// event linstener for Memory
document.getElementById('8gb-unified-memory').addEventListener('click',function(){
    memoryCost.innerText = '0';
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('16gb-unified-memory').addEventListener('click',function(){
    memoryCost.innerText = '180';
    updateTotalPrice();
    grandTotalWithDiscount();
})


// event linstener for Storage
document.getElementById('ssd-card-256gb').addEventListener('click',function(){
    storageCost.innerText = '0'
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('ssd-card-512gb').addEventListener('click',function(){
    storageCost.innerText = '100'
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('ssd-card-1tb').addEventListener('click',function(){
    storageCost.innerText = '180'
    updateTotalPrice();
    grandTotalWithDiscount();
})


// event linstener for delivery option
document.getElementById('free-prime-delivery-cost').addEventListener('click',function(){
    deliveryCost.innerText = '0';
    updateTotalPrice();
    grandTotalWithDiscount();
})

document.getElementById('delivery-cost').addEventListener('click',function(){
    deliveryCost.innerText = '20';
    updateTotalPrice();
    grandTotalWithDiscount();
})


// Function for updating Grand Total price without discount
function grandTotalWithDiscount() {
   discountTotal.innerText = updateTotalPrice()
}


//Grand total with discount
function promoCode(){
    const promoCode = document.getElementById('promocode');
    const promoValue = promoCode.value;
    if(promoValue == 'stevekaku'){
        const discountRate = (updateTotalPrice() / 100) * 20;
        discountTotal.innerText = updateTotalPrice() - discountRate;
        promoCode.value = '';
    }else{
        alert('Please Enter Correct Promo Code')
    }
}