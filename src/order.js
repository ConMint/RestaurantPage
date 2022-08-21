export default function orderPage () {
      //creates the canvas
      const canvas = document.createElement('div');
      canvas.setAttribute('id','canvas');
      canvas.classList.add('canvasOrder')

      const comingSoon = document.createElement('h1');
      comingSoon.setAttribute('id','comingSoon');
      comingSoon.innerText ='Coming soon...'

      const appText = document.createElement('p');
      appText.setAttribute('id','appText');
      appText.innerText = 'We are excited to announce that we are currently working on our own app that will allow you to order DokoDemo Sushi 24 hours a day, 7 days a week. In the meantime, please find us on the apps down below.'
      
      const deliveryLogos = document.createElement('div')
      deliveryLogos.setAttribute('id','deliveryLogos');
      
      const woltImg = document.createElement('img');
      woltImg.src = 'https://i.pinimg.com/564x/9c/ce/46/9cce46950842a8b7bcd5b537b1507415.jpg'
      woltImg.setAttribute('id','woltImg');

      const pandaImg = document.createElement('img');
      pandaImg.src = 'https://i.pinimg.com/originals/5f/b2/1a/5fb21aefc0aa94d8a84531611d8fe708.png'
      pandaImg.setAttribute('id','pandaImg');

      const uberImg = document.createElement('img');
      uberImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiq23_rC_s9uydw7yhY7ElOtVYetYPectJw&usqp=CAU'
      uberImg.setAttribute('id','uberImg');



      deliveryLogos.appendChild(woltImg);
      deliveryLogos.appendChild(pandaImg);
      deliveryLogos.appendChild(uberImg);

      canvas.appendChild(comingSoon)
      canvas.appendChild(appText)

      canvas.appendChild(deliveryLogos)


    return canvas
};