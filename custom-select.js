const selected = document.querySelector('.selected')
const options = document.querySelector('.options')
const optionList = document.querySelectorAll('.option')

const selected_price = document.querySelector('.selected_price')
const price_options = document.querySelector('.price_options')
const price_option = document.querySelectorAll('.price_option')


// for city
selected.addEventListener('click', () => {
    options.classList.toggle('active')

    price_options.classList.remove("active")
})

optionList.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('span').innerText
         options.classList.remove("active")
    })
})


//for price
selected_price.addEventListener('click', () => {
    price_options.classList.toggle('active')

    options.classList.remove("active")
})

price_option.forEach(op => {
    console.log(op)
    op.addEventListener('click', () => {
        
        selected_price.innerHTML = op.querySelector('span').innerText
        price_options.classList.remove("active")
    })
})

// document.addEventListener('click', function() {
//     options.classList.remove('active')
//     price_options.classList.remove('active')
// })
