// function for calculate price 
function price(id, value) {
    const priceDisplay = document.getElementById(id);
    const moneyCharge = value;
    priceDisplay.innerText = moneyCharge;


    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('total');

    const basePrice = document.getElementById('base').innerText;
    const memoryPrice = document.getElementById('extra-memory').innerText;
    const storagePrice = document.getElementById('extra-storage').innerText;
    const deliveryPrice = document.getElementById('delivery').innerText;

    const calcTotal = parseFloat(basePrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    totalPrice.innerText = calcTotal;
    total.innerText = calcTotal;
}

// event listener for memory btn 
document.getElementById('memory-16').addEventListener('click', function () {
    price('extra-memory', 180);
})
document.getElementById('memory-8').addEventListener('click', function () {
    price('extra-memory', 0);
})

// event listener for storage btn 
document.getElementById('btn-256').addEventListener('click', function () {
    price('extra-storage', 0);
})
document.getElementById('btn-512').addEventListener('click', function () {
    price('extra-storage', 100);
})
document.getElementById('btn-1tb').addEventListener('click', function () {
    price('extra-storage', 180);
})

// event listener for delivery btn 
document.getElementById('btn-normalDelivery').addEventListener('click', function () {
    price('delivery', 0);
})
document.getElementById('btn-fastDelivery').addEventListener('click', function () {
    price('delivery', 20);
})

// event listener for apply btn 
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    const promoCodeText = promoCode.value;

    const totalPrice = document.getElementById('total');
    const totalPriceValue = totalPrice.innerText;

    if (promoCodeText == 'stevekaku') {
        const discount = totalPriceValue * 20 / 100;
        totalPrice.innerText = discount;

        document.getElementById('apply-btn').style.color = 'red';
        document.getElementById('apply-btn').style.backgroundColor = 'lightgray';
        document.getElementById('apply-btn').disabled = true;

        document.getElementById('warning-line').innerText = 'discount added successfully'
        document.getElementById('warning-line').style.color = 'green'

    }
    else {
        const warning = document.getElementById('warning-line');
        warning.style.color = 'red';
        warning.innerText = 'you have entered wrong promocode';
    }
})

                       /////// all done //////