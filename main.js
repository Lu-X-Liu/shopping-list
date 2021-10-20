// open add category at the bottom for mobil 

const bottomTabIcon = document.querySelector('.add-new-category svg');
const newCategoryBtnWrapper = document.querySelector('.new-category-btn-wrapper');

bottomTabIcon.addEventListener('click', toggleBottomTab);

function toggleBottomTab() {
    const contentDisplay = newCategoryBtnWrapper.style;
    if (contentDisplay.display === 'none' || contentDisplay.display === '') {
        bottomTabIcon.style.transform = 'rotate(90deg) translateX(-5px)';
        contentDisplay.display = 'block';
    } else {
        bottomTabIcon.style.transform = 'rotate(-90deg) translateX(5px)';
        contentDisplay.display = 'none';
    }     
}

