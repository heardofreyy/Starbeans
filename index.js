const body = document.body;
const toggleDarkBtn = document.getElementById('toggle-dark-btn');
const toggleDarkIcon = document.getElementById('toggle-dark');
const headerLogo = document.getElementById('header-logo');
const header = document.getElementById('header');
const profile = document.getElementById('profile');
const loader = document.getElementById('loader')
const hero = document.getElementById('hero');

const hotDrinksCat = document.getElementById('hot-drinks-cat');
const coldDrinksCat = document.getElementById('cold-drinks-cat');
const dessertCat = document.getElementById('dessert-cat');
const iceCreamCat = document.getElementById('ice-cream-cat');

const hotDrinksBtnIcon  = document.getElementById('hot-drinks-btn-icon');
const coldDrinksBtnIcon  = document.getElementById('cold-drinks-btn-icon');
const dessertBtnIcon  = document.getElementById('dessert-btn-icon');
const iceCreamBtnIcon  = document.getElementById('ice-cream-btn-icon');

const aboutImg = document.getElementById('about-img')

const menuIcon = document.getElementById('menu-icon')

window.addEventListener('load', () => {
    console.log('loaded');
    // alert('loaded')
    
    document.body.removeChild(loader)
    hero.style.display= 'flex';
    changeToDark()
})



function changeToDark() {
    const isdarkLS = localStorage.getItem('isdark')

    if(isdarkLS === 'true') {
        body.classList.add('dark');
    }else if (isdarkLS === 'false' ) {
        body.classList.remove('dark');
    }

    //header : 
    if (body.classList.contains('dark')) {
        headerLogo.src = "./src/assets/logo/Starbeans-logo-line-light.svg"
        profile.src = "./src/assets/icons/profile-light.svg"
        toggleDarkIcon.src = "./src/assets/icons/light.svg"

        hotDrinksCat.src = "./src/assets/icons/coffee-cup-light.png"
        coldDrinksCat.src = "./src/assets/icons/juice-light.png"
        dessertCat.src = "./src/assets/icons/croissant-light.png"
        iceCreamCat.src = "./src/assets/icons/ice-cream-light.png"

        hotDrinksBtnIcon.src = "./src/assets/icons/coffee-cup-light.png"
        coldDrinksBtnIcon.src = "./src/assets/icons/juice-light.png"
        dessertBtnIcon.src = "./src/assets/icons/croissant-light.png"
        iceCreamBtnIcon.src = "./src/assets/icons/ice-cream-light.png"
        
        aboutImg.src = "./src/assets/logo/Starbeans-logo-circle-light.svg"

        menuIcon.src = "./src/assets/icons/menu-light.svg"
        
    } else {
        
        headerLogo.src = "./src/assets/logo/Starbeans-logo-line-dark.svg"
        profile.src = "./src/assets/icons/profile-dark.svg"
        toggleDarkIcon.src = "./src/assets/icons/dark.svg"

        hotDrinksCat.src = "./src/assets/icons/coffee-cup-dark.png"
        coldDrinksCat.src = "./src/assets/icons/juice-dark.png"
        dessertCat.src = "./src/assets/icons/croissant-dark.png"
        iceCreamCat.src = "./src/assets/icons/ice-cream-dark.png"

        hotDrinksBtnIcon.src = "./src/assets/icons/coffee-cup-dark.png"
        coldDrinksBtnIcon.src = "./src/assets/icons/juice-dark.png"
        dessertBtnIcon.src = "./src/assets/icons/croissant-dark.png"
        iceCreamBtnIcon.src = "./src/assets/icons/ice-cream-dark.png"

        aboutImg.src = "./src/assets/logo/Starbeans-logo-circle-dark.svg"

        menuIcon.src = "./src/assets/icons/menu-dark.svg"
    }

    
}

function toggleDark() {

    const isdarkLS = localStorage.getItem('isdark')


    if(isdarkLS === 'true') {
        localStorage.setItem('isdark', false)
    }else if (!isdarkLS || isdarkLS === 'false' ) {
        localStorage.setItem('isdark', true)
    }

    changeToDark()

    

}

function showProfile() {
    console.log('shown profile');
}
