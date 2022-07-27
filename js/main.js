const bookmark = document.querySelector('.bookmark-container');
const circle = document.querySelector('.circle-icon')
const path = document.querySelector('.path-icon')
const bookmarkText = document.querySelector('.bookmark-text')

bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('active');
    circle.classList.toggle('active');
    path.classList.toggle('active');
})