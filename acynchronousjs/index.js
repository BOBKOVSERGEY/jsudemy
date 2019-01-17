/*const second = () => {
  //console.log('Second');
  setTimeout(() => {
    console.log('Async');
  }, 2000)
}

const first = () => {
  console.log('hey there');
  second();
  console.log('The end');
}

first();

const image = document.getElementById('img').src;

processLargeImage(image, () => {
  console.log('Image process');
})*/

function getRecipe() {
  setTimeout(() => {
    const recipeId = [523, 883, 432, 974];

    console.log(recipeId);

    setTimeout(id => {
      const recipe = {
        title: 'Fresh tomato pasta',
        publisher: 'Sergey'
      };
      console.log(`${id}: ${recipe.title}`);

      setTimeout(publisher => {
        const recipe = {
          title: 'Italian Pizza',
          publisher: 'Sergey'
        };
        console.log(recipe);

      }, 1500, recipe.publisher);
    }, 1500, recipeId[2])
  }, 1500)
}

getRecipe();