import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js";
import "regenerator-runtime";

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

// Publisher-subscriber pattern
const init = () => {
  recipeView.addHandlerRender(controlRecipes);
};

init();
