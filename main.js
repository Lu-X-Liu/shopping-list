// open add category at the bottom for mobil 

const bottomTabIcon = document.querySelector('.add-new-category svg');
const newCategoryBtnWrapper = document.querySelector('.new-category-btn-wrapper');

bottomTabIcon.addEventListener('click', openBottomTab);

function openBottomTab() {
    bottomTabIcon.style.transform = 'rotate(90deg) translateX(-5px)';
    newCategoryBtnWrapper.style.display = 'flex';
}