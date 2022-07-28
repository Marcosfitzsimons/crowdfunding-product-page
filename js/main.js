// Bookmark functionality

const bookmark = document.querySelector('.bookmark-container');
const circle = document.querySelector('.circle-icon');
const path = document.querySelector('.path-icon');
const bookmarkText = document.querySelector('.bookmark-text');

// let newArray = [circle, path, bookmarkText, bookmark]
// console.log(newArray);

bookmark.addEventListener('click', () => {

    bookmarkText.innerText = 'Bookmarked'
    bookmark.classList.toggle('active');
    circle.classList.toggle('active');
    path.classList.toggle('active');

    if (bookmark.classList.contains('active') === false) {
        bookmark.classList.remove('active');
        circle.classList.remove('active');
        path.classList.remove('active');
        bookmarkText.innerText = 'Bookmark';
    }
});

// Selection modal

const main = document.querySelector('.main');
const backProjectBtn = document.querySelector('.support-btn');
const selectionModal = document.querySelector('.selection-modal');
const modalCrossIcon = document.querySelector(".selection-modal-header__cross")

let hideModal = () => {
    selectionModal.classList.remove('active')
}

modalCrossIcon.addEventListener('click', hideModal);

let showModal = () => {
    selectionModal.classList.add('active');
    main.classList.add('active');
}

backProjectBtn.addEventListener('click', showModal);

// Selection Modal Radio Button

const radioButton = document.querySelectorAll(".selection-modal-article-circle");
console.log(radioButton);
const radioButtonBg = document.querySelectorAll(".selection-modal-article-circle-bg");
console.log(radioButtonBg);

radioButton.forEach((element) => {
    element.addEventListener('click', (element) => {
        console.log(element.firstElementChild);
        // element.firstElementChild.classList.add('active');
    });
})