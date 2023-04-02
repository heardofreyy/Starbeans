const body = document.body;
const toggleDarkBtn = document.getElementById('toggle-dark-btn');
const toggleDarkIcon = document.getElementById('toggle-dark');
const headerLogo = document.getElementById('header-logo');
const header = document.getElementById('header');
const profile = document.getElementById('profile');
const loader = document.getElementById('loader')
const hero = document.getElementById('hero');



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

    } else {
        
        headerLogo.src = "./src/assets/logo/Starbeans-logo-line-dark.svg"
        profile.src = "./src/assets/icons/profile-dark.svg"
        toggleDarkIcon.src = "./src/assets/icons/dark.svg"
    }

    
}

function toggleDark() {

    const isdarkLS = localStorage.getItem('isdark')

    if(isdarkLS === 'true') {
        localStorage.setItem('isdark', false)
    }else if (isdarkLS === 'false' ) {
        localStorage.setItem('isdark', true)
    }

    changeToDark()

    

}

function showProfile() {
    console.log('shown profile');
}
