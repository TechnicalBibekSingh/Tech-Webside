document.addEventListener('DOMContentLoaded', function () {
    const payBtn = document.querySelector('#pay-now-button');
    
    payBtn.addEventListener('click', function () {
        const paymentMethod = document.querySelector('input[name="payment"]:checked').id;

        if (paymentMethod === 'esewa') {
            // Replace with your eSewa integration URL
            window.location.href = 'https://esewa.com.np/#/home';
        } else if (paymentMethod === 'khalti') {
            // Replace with your Khalti integration URL
            window.location.href = 'https://khalti.com/';
        } else {
            alert('Please select a payment method.');
        }
    });
});
