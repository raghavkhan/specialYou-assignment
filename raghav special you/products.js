const anniversaryLink = document.querySelector('.productsType2');
const homePage = document.querySelector('.home');
const anniversaryPage = document.querySelector('.anniversaryPage');

const bootstrapPopupContainer = document.querySelector('.bootstrapPopupContainer');
const popupContainer = document.querySelector('.popupContainer');

anniversaryLink.addEventListener('click',()=>{
    homePage.classList.add('hidden');
    anniversaryPage.classList.remove('hidden');
    bootstrapPopupContainer.classList.add('hidden');
    popupContainer.classList.add('hidden');
    anniversaryPage.classList.remove('blur');
    });

const cart1 = document.querySelector('.cart1');
cart1.addEventListener('click',function() {
alert('1 item added to cart successfully!');
});

const cart2 = document.querySelector('.cart2');
cart2.addEventListener('click',function() {
alert('1 item added to cart successfully!');
});

const buy1 = document.querySelector('.buy1');
buy1.addEventListener('click',function() {
bootstrapPopupContainer.classList.remove('hidden');
popupContainer.classList.add('hidden');
anniversaryPage.classList.add('hidden');

});

const buy2 = document.querySelector('.buy2');
buy2.addEventListener('click',function() {
popupContainer.classList.remove('hidden');
bootstrapPopupContainer.classList.add('hidden');
anniversaryPage.classList.add('blur');



});

const addCart = document.querySelector('.addCart');
const number = document.querySelector('.number');
addCart.addEventListener('click',function() {
number.innerHTML = Number(number.innerHTML) + 1;
});

document.addEventListener('keydown',function(event){
if(event.key === 'Escape' && !popupContainer.classList.contains('hidden')) {
    anniversaryPage.classList.remove('blur');
    popupContainer.classList.add('hidden');
}

});