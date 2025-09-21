export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const res = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    );
    const data = await res.json();

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      published: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    alert(error);
  }
};
