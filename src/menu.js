export default function menuPage () {
      //creates the canvas
  const canvas = document.createElement('div');
  canvas.setAttribute('id','canvas');
  canvas.classList.add('canvasMenu')

let myMenu = [
    {
        name: 'Sushi Platter',
        price: '4000 yen',
        src: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80',
        about: 'Our world famous sushi platter. Some of everything.',
    },

    {
        name: 'Udon',
        price: '1000 yen',
        src: 'https://thefoodietakesflight.com/wp-content/uploads/2021/05/easy-one-bowl-shoyu-udon-noodles-7.png',
        about: 'Our delicious vegan udon noodles.',
    },

    
    {
        name: 'Yakitori',
        price: '180 ~ 450 yen',
        src: 'https://www.chopstickchronicles.com/wp-content/uploads/2016/07/Yakitori-Update-11.jpg',
        about: 'Ask your server for the types of stick on offer.',
    },

    {
        name: 'Tonkatsu',
        price: '2000 yen',
        src: 'https://www.seriouseats.com/thmb/AphGqocAdOim9GTFlZaH9cxbmYc=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__04__20170125-tonkatsu-japanese-pork-chicken-katsu-cutlet-recipe-21-6ed88941dd584530923a70e7baf1bb91.jpg',
        about: 'Fried pork cutlets with a katsu sauce.',
    },

    {
        name: 'Ramen',
        price: '1000 yen',
        src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        about: 'Our in-house soup ramen.',
    },

    {
        name: 'Karaage',
        price: '800 yen',
        src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F05%2F17%2Fchicken-karaage-FT-RECIPE0621.jpg&q=60',
        about: 'Street-style fried chicken with lemon squeezed on top.',
    },
]

function createMenu (item) {

    //create card for each item
    const card = document.createElement('div');
    card.classList.add('menuItem');
    card.setAttribute('id',myMenu.indexOf(item));

    //add image at top 
    const foodImg = document.createElement('img');
    foodImg.classList.add('foodImg')
    foodImg.src = item.src;
    card.appendChild(foodImg);

    //name of food 
    const foodName = document.createElement('p');
    foodName.classList.add('foodName');
    foodName.innerText = item.name;
    card.appendChild(foodName)

    // price
    const foodPrice = document.createElement('p');
    foodPrice.classList.add('foodPrice');
    foodPrice.innerText = item.price;
    card.appendChild(foodPrice);

    //about 
    const foodAbout =document.createElement('p');
    foodAbout.classList.add('foodAbout');
    foodAbout.innerText = item.about;
    card.appendChild(foodAbout);

    canvas.appendChild(card);


}

function render () {
    for (let i=0; i < myMenu.length;i++) {
        createMenu(myMenu[i])
    }
}

render();

  return canvas
}


