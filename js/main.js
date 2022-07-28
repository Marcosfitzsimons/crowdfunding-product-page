// Overlay

const toggleOverlay = () => {
    document.getElementById("overlay").classList.toggle('hidden');
}

const toggleSecondOverlay = () => {
    document.getElementById("second-overlay").classList.toggle('hidden');
}

// Toggle Menu

const toggleMenu = document.querySelector('.toggle-container');
const navMobile = document.querySelector('#nav-mobile');
const headerBar = document.querySelector('.header-bar');

const showNavMobile = () => {
    navMobile.classList.toggle('hidden');
    navMobile.classList.toggle('z-index');
    headerBar.classList.toggle('z-index')
    toggleOverlay();
}


toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    showNavMobile();
})

// Bookmark functionality

const bookmark = document.querySelector('.bookmark-container');
const circle = document.querySelector('.circle-icon');
const path = document.querySelector('.path-icon');
const bookmarkText = document.querySelector('.bookmark-text');

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
const main = document.querySelector('.main');
const backProjectBtn = document.querySelector('.support-btn');
const selectionModal = document.querySelector('.selection-modal');
const modalCrossIcon = document.querySelector(".selection-modal-header__cross")

let hideModal = () => {
    selectionModal.classList.remove('active')
    toggleOverlay();
    toggleSecondOverlay();
}

modalCrossIcon.addEventListener('click', hideModal);

let showModal = () => {
    selectionModal.classList.add('active');
    main.classList.add('active');
    toggleOverlay();
    toggleSecondOverlay();
}

backProjectBtn.addEventListener('click', showModal);

rewardBtns.forEach(rewardBtn => {
    rewardBtn.addEventListener('click', showModal);
})


// Radio Button

const radioButtonOne = document.querySelector(".selection-modal-article-circle-1");
const bgRadioButtonOne = document.querySelector(".selection-modal-article-circle-bg-1");

const radioButtonTwo = document.querySelector(".selection-modal-article-circle-2");
const bgRadioButtonTwo = document.querySelector(".selection-modal-article-circle-bg-2");

const radioButtonThree = document.querySelector(".selection-modal-article-circle-3");
const bgRadioButtonThree = document.querySelector(".selection-modal-article-circle-bg-3");

// Selected Pledge

const selectedPledgeOne = document.querySelector('.selected-pledge-1');
const selectedPledgeTwo = document.querySelector('.selected-pledge-2');
const selectedPledgeThree = document.querySelector('.selected-pledge-3');

// Selected Article

const selectedArticleOne = document.querySelector('.selection-modal-article-one');
const selectedArticleTwo = document.querySelector('.selection-modal-article-two');
const selectedArticleThree = document.querySelector('.selection-modal-article-three');

const handleRadioBtnOne = () => {
    bgRadioButtonOne.classList.toggle('active');
    selectedPledgeOne.classList.toggle('hidden');
    selectedArticleOne.classList.toggle('active');
}

const handleRadioBtnTwo = () => {
    bgRadioButtonTwo.classList.toggle('active');
    selectedPledgeTwo.classList.toggle('hidden');
    selectedArticleTwo.classList.toggle('active');
}

const handleRadioBtnThree = () => {
    bgRadioButtonThree.classList.toggle('active');
    selectedPledgeThree.classList.toggle('hidden');
    selectedArticleThree.classList.toggle('active');
}

radioButtonOne.addEventListener('click', handleRadioBtnOne);
radioButtonTwo.addEventListener('click', handleRadioBtnTwo);
radioButtonThree.addEventListener('click', handleRadioBtnThree);


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
    toggleOverlay();
    toggleSecondOverlay();
}

successBtn.addEventListener('click', hideSuccessModal);

