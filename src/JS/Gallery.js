const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

const switcher1 = document.getElementById('switcher-1');
const switcher2 = document.getElementById('switcher-2');
const switcher3 = document.getElementById('switcher-3');




function switchToPage(page) {

    window.location.href = "#gallery"

    switch (page) {

        case 1:
            page1.classList.remove('hidden-page')
            switcher1.classList.add('active-switcher')

            page2.classList.add('hidden-page')
            switcher2.classList.remove('active-switcher')
            page3.classList.add('hidden-page')
            switcher3.classList.remove('active-switcher')
            break;
        case 2:

            page2.classList.remove('hidden-page')
            switcher2.classList.add('active-switcher')

            page1.classList.add('hidden-page')
            switcher1.classList.remove('active-switcher')
            page3.classList.add('hidden-page')
            switcher3.classList.remove('active-switcher')
            break;
        case 3:
            page3.classList.remove('hidden-page')
            switcher3.classList.add('active-switcher')

            page2.classList.add('hidden-page')
            switcher2.classList.remove('active-switcher')
            page1.classList.add('hidden-page')
            switcher1.classList.remove('active-switcher')
            break;
    }
}