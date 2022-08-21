export default function homePage () {

  //creates the canvas
  const canvas = document.createElement('div');
  canvas.setAttribute('id','canvas');
  canvas.classList.add('canvasHome')
  // left and right side for flexbox
  const leftside = document.createElement('div');
  leftside.setAttribute('id','leftside');
  canvas.appendChild(leftside);
  const rightside = document.createElement('div');
  rightside.setAttribute('id','rightside');
  canvas.appendChild(rightside);

  // header
  const headerText = document.createElement('p');
  headerText.innerText = 'DokoDemo Sushi';
  headerText.setAttribute('id','headerText');
  leftside.appendChild(headerText);

  
  // restaurant introduction text
  const aboutText = document.createElement('div');
  aboutText.innerText = `Specialising in fresh sushi and authentic Japanese cuisine, the menu at DokoDemo caters for all tastes and appetites, including vegetarian/vegan and gluten-free options. While it may be best known for Sushi, Japanese cuisine is not just raw fish! All our cooked dishes are inspired by traditional Japanese street food, including Tori Karaage (Fried chicken), Yakitori (Grilled Chicken), Tonkatsu, Soup Ramen and Udon noodles.`
  leftside.appendChild(aboutText);




  // container.appendChild(canvas)

 return canvas
}

