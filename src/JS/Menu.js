

//side bar btns
const hotDrinksBtn = document.getElementById('hot-drinks-btn')
const coldDrinksBtn = document.getElementById('cold-drinks-btn')
const dessertBtn = document.getElementById('dessert-btn')
const iceCreamBtn = document.getElementById('ice-cream-btn')


// sections 
const hotDrinks = document.getElementById('hot-drinks')
const coldDrinks = document.getElementById('cold-drinks')
const dessert = document.getElementById('dessert')
const iceCream = document.getElementById('ice-cream')


function goToSecHref(section) {
    window.location.href = "#menu";
    goToSec(section);
}

function goToSec(section) {
    console.log('clicked' + section);
    switch(section) {

        case "hotDrinks" :
            hotDrinks.classList.remove('hidden');
            hotDrinksBtn.classList.add('active');

            coldDrinks.classList.add('hidden');
            coldDrinksBtn.classList.remove('active');

            dessert.classList.add('hidden');
            dessertBtn.classList.remove('active');

            iceCream.classList.add('hidden');
            iceCreamBtn.classList.remove('active');
            
            break;
        
        case "coldDrinks" :
            coldDrinks.classList.remove('hidden');
            coldDrinksBtn.classList.add('active');

            hotDrinks.classList.add('hidden');
            hotDrinksBtn.classList.remove('active');

            dessert.classList.add('hidden');
            dessertBtn.classList.remove('active');

            iceCream.classList.add('hidden');
            iceCreamBtn.classList.remove('active');

            break;

        case "dessert" :
            dessert.classList.remove('hidden');
            dessertBtn.classList.add('active');

            hotDrinks.classList.add('hidden');
            hotDrinksBtn.classList.remove('active');

            coldDrinks.classList.add('hidden');
            coldDrinksBtn.classList.remove('active');

            iceCream.classList.add('hidden');
            iceCreamBtn.classList.remove('active');

            break;

        case "iceCream" :
            iceCream.classList.remove('hidden');
            iceCreamBtn.classList.add('active');

            hotDrinks.classList.add('hidden');
            hotDrinksBtn.classList.remove('active');

            coldDrinks.classList.add('hidden');
            coldDrinksBtn.classList.remove('active');

            dessert.classList.add('hidden');
            dessertBtn.classList.remove('active');

            break;

    }
}