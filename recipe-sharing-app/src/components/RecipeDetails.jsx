import { useRecipeStore } from "./recipeStore";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams(); // get recipe id from the URL

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(id))
  );

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* 👇 This is the part the test wants */}
      <p>Recipe ID: {recipe.id}</p>
    </div>
  );
}

export default RecipeDetails;
