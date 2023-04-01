const body = document.body;
const toggleDarkBtn = document.getElementById('toggle-dark-btn');
const toggleDarkIcon = document.getElementById('toggle-dark');
const headerLogo = document.getElementById('header-logo');
const header = document.getElementById('header');
const profile = document.getElementById('profile');


function toggleDark() {

    //header : 
    if (body.classList.contains('dark')) {
        headerLogo.src = "./src/assets/logo/Starbeans-logo-line-dark.svg"
        profile.src = "./src/assets/icons/profile-dark.svg"
        toggleDarkIcon.src = "./src/assets/icons/dark.svg"


    } else {
        headerLogo.src = "./src/assets/logo/Starbeans-logo-line-light.svg"
        profile.src = "./src/assets/icons/profile-light.svg"
        toggleDarkIcon.src = "./src/assets/icons/light.svg"
    }

    body.classList.toggle('dark');

}

function showProfile() {
    console.log('shown profile');
}

var src = $('section.hero').css('background');
console.log(src);
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');