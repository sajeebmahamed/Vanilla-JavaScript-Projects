const loginBtn = document.getElementById('login')


loginBtn.addEventListener('click', function() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value 
    const confirmPassword = document.getElementById('confirm_password').value
    const loginArea = document.getElementById('login-area')
    // console.log(email, password, confirmPassword);
    // if (email != null || password !== confirmPassword) {
    //     alert('Please enter valid info')
    // }
    loginArea.style.display = 'none'

    const transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'
})

const addDepost = document.getElementById('addDeposit')
addDepost.addEventListener('click', function() {
    const depositAmount = document.getElementById('depositAmount').value
    const currentDeposit = document.getElementById('currentDeposit').innerText
    totalAmount = parseFloat(depositAmount) + parseFloat(currentDeposit)
    document.getElementById('currentDeposit').innerText = totalAmount


    const currentBalance = document.getElementById('currentBalance').innerText

    const updateBalance = parseFloat(currentBalance) + parseFloat(depositAmount)
    document.getElementById('currentBalance').innerText = updateBalance

    document.getElementById('depositAmount').value = ""
})

const addWithdraw = document.getElementById('addWithdraw')

addWithdraw.addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawAmount').value
    const currentWithdraw = document.getElementById('currentWithdraw').innerText

    const totalWithdraw = parseFloat(withdrawAmount) + parseFloat(currentWithdraw)
    document.getElementById('currentWithdraw').innerText = totalWithdraw
    
    const currentBalance = document.getElementById('currentBalance').innerText
    finalBalance = parseFloat(currentBalance) - parseFloat(totalWithdraw)
    document.getElementById('currentBalance').innerText = finalBalance

    document.getElementById('withdrawAmount').value = ""
})
