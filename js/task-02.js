const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

ingredients.forEach(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');

  ul.appendChild(item)
})

