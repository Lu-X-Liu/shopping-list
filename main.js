// open add category at the bottom for mobil 

const bottomTabIcon = document.querySelector('.add-new-category svg');
const newCategoryBtnWrapper = document.querySelector('.new-category-btn-wrapper');

bottomTabIcon.addEventListener('click', toggleOpenClose, false);
bottomTabIcon.addEventListener('click', rotateBtn, false);
bottomTabIcon.menu = newCategoryBtnWrapper;

function toggleOpenClose(evt) {
    const contentDisplay = evt.currentTarget.menu.style;
    if (contentDisplay.display === 'none' || contentDisplay.display === '') {
        contentDisplay.display = 'block';
    } else {
        contentDisplay.display = 'none';
    }     
}

function rotateBtn(evt) {
    const contentDisplay = evt.currentTarget.menu.style;
    if (contentDisplay.display === 'block' || contentDisplay.display === '') {
        bottomTabIcon.style.transform = 'rotate(90deg) translateX(-5px)';
    } else {
        bottomTabIcon.style.transform = 'rotate(-90deg) translateX(5px)';
    }    
}

/* open / close nav menu */
const headerMenuIcon = document.querySelector('.nav-btn svg');
const headerMenuDropDown = document.querySelector('.nav-dropdown-menu');
headerMenuIcon.menu = headerMenuDropDown;
headerMenuIcon.addEventListener('click', toggleOpenClose);

/* open /close category menu */
const categoryMenuIcon = document.querySelector('.menu-category');
const categoryMenuDropDown = document.querySelector('.category-dropdown-menu');
categoryMenuIcon.menu = categoryMenuDropDown;
categoryMenuIcon.addEventListener('click', toggleOpenClose);