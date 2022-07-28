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

const rewardBtns = document.querySelectorAll(".reward-btn")
console.log(rewardBtns)
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

rewardBtns.forEach(rewardBtn => {
    rewardBtn.addEventListener('click', showModal);
})


// Selection Modal Radio Button

const radioButtons = document.querySelectorAll(".selection-modal-article-circle");
console.log(radioButtons);
const radioButtonBgs = document.querySelectorAll(".selection-modal-article-circle-bg");
console.log(radioButtonBgs);
const selectedPledges = document.querySelectorAll('.selected-pledge');
console.log(selectedPledges);


radioButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        radioButtonBgs.forEach(bgBtn => {
            if (bgBtn.parentElement.classList.contains('active')) {
                bgBtn.classList.add('active');
            } else {
                bgBtn.classList.remove('active');
            }
        });
    });
});

// Success Modal

const successModal = document.querySelector('.success-modal');
const successBtn = document.querySelector('.success-modal__btn');
const openSuccessBtns = document.querySelectorAll('.selected-pledge__btn');

const showSuccess = () => {
    successModal.classList.add('active');
    successModal.style.display = 'block';
    selectionModal.classList.add('hidden');
    selectionModal.classList.remove('active');
}

openSuccessBtns.forEach(openSuccessBtn => {
    openSuccessBtn.addEventListener('click', showSuccess)
})

const hideSuccessModal = () => {
    successModal.style.display = 'none';
}

successBtn.addEventListener('click', hideSuccessModal);