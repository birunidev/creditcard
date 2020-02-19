let vm = new Vue({
    el: '#root',
    data: {
        hello: 'Hellow',
        cardNumber: ['0000', '0000', '0000', '0000'],
        cardHolder: 'Your name here',
        expires: {
            month: '00',
            year: '00'
        },
        cvv: '000',
        monthName: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
})