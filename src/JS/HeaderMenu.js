const navBarMenu = document.getElementById('nav-bar-menu')


document.onclick= (e) => {
    if(e.target.id !== 'nav-bar-menu' && e.target.id !== 'menu-icon') {
        navBarMenu.classList.remove('openNav')
    }
}


const openNavMenu = () => {
    navBarMenu.classList.toggle('openNav')
    
}