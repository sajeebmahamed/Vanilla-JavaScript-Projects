const phoneCount = document.getElementById('phone-count').value 
console.log(phoneCount);

function handleProductChange(product, isIncrease) {
    const productValue = document.getElementById('phone-count').value
    const phoneTotal = document.getElementById('phone-total').innerText
    if (isIncrease == true) {
        productCount = parseFloat(productValue) + 1
        console.log(productCount);
        document.getElementById('phone-total').innerText = 1200 * productCount
        document.getElementById('phone-count').value = productCount


        const currentPhoneTotal = document.getElementById('phone-total').innerText
        document.getElementById('total-price').innerText = currentPhoneTotal
        
        

        




    }
    if(isIncrease == false && productValue >0 ) {
        productCount = parseFloat(productValue) - 1
        console.log(productCount);
        document.getElementById('phone-total').innerText = phoneTotal - 1200
        document.getElementById('phone-count').value = productCount

        const currentPhoneTotal = document.getElementById('phone-total').innerText
        document.getElementById('total-price').innerText = phoneTotal - 1200 
    }

}