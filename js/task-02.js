const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');

ul.append(
  ...ingredients.map((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    return li;
  })
);
