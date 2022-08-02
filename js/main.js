
const error_Name = document.querySelector('#error-notName')
const error_Email = document.querySelector('#error-notEmail')
const error_Content = document.querySelector('#error-notContent')
const submit = document.querySelector('#submit')

const error_itemName = document.querySelector('#error-notItemName')
const error_price = document.querySelector('#error-notPrice')
const error_stock = document.querySelector('#error-notStock')
const error_company = document.querySelector('#error-notCompany')

const _input = document.querySelectorAll('input')



////////////////////exp regulares de form contacto /////////////////////
const regExp_Name = /^[A-Za-z_-]{0,12}$/
const regExp_Email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
const regExp_content = /[A-Za-z0-9_-]{1,100}/

////////////////////exp regulares de form alta /////////////////////
const regExp_alpha = /^[A-Za-z0-9_-]{0,12}$/
const regExp_number = /^[1-9]+$/


const checkForm = (e) => {
    switch (e.target.name) {
        case "name":
            if (regExp_Name.test(e.target.value)) {
                error_Name.innerHTML = ' '
            } else {
                error_Name.innerHTML = 'Nombre invalido - Debe contener hasta 12 caracteres (A-Z) '


            }
            break;
        case "email":
            if (regExp_Email.test(e.target.value)) {
                error_Email.innerHTML = ''

            } else {
                error_Email.innerHTML = 'Dirección de correo invalida'


            }
            break;
        case "content":
            if (regExp_content.test(e.target.value)) {
                error_Content.innerHTML = ''

            } else {
                error_Content.innerHTML = 'Su mensaje se encuentra vacío - Puede contener hasta 100 caracteres'


            }
            break;
        case "itemName":
            if (regExp_alpha.test(e.target.value)) {
                error_itemName.innerHTML = ''
                error_itemName.classList.remove('form-alta__notformValid')

            } else {
                error_itemName.innerHTML = '* Campo obligatorio - Error - Recuerde completar todos los campos requeridos - No se aceptan caracteres especiales "#$%&()[]{}_-+-/*"'
                error_itemName.classList.add('form-alta__notformValid')
            }
            break;
        case "price":
            if (regExp_number.test(e.target.value)) {
                error_price.innerHTML = ''
                error_price.classList.remove('form-alta__notformValid')

            } else {
                error_price.innerHTML = '* Campo obligatorio - Error - debe ingresar el valor en numeros'
                error_price.classList.add('form-alta__notformValid')
            }
            break;
        case "stock":
            if (regExp_number.test(e.target.value)) {
                error_stock.innerHTML = 000
                error_stock.classList.remove('form-alta__notformValid')

            } else {
                error_stock.innerHTML = '* Campo obligatorio - Error - debe ingresar el valor en numeros'
                error_stock.classList.add('form-alta__notformValid')
            }
            break;
        case "company":
            if (regExp_alpha.test(e.target.value)) {
                error_company.innerHTML = ''
                error_company.classList.remove('form-alta__notformValid')

            } else {
                error_company.innerHTML = '* Campo obligatorio - Error - Recuerde completar todos los campos requeridos - No se aceptan caracteres especiales "#$%&()[]{}_-+-/*"'
                error_company.classList.add('form-alta__notformValid')
            }
            break;
    }
    // console.log(e.target.name)
}



_input.forEach((input) => {
    input.addEventListener('keyup', checkForm)
})


document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('resize', () => {
    if (window.innerWidth > 425) {

    }
})