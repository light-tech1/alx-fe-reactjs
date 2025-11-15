import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <h3>Edit this recipe</h3>
        <EditRecipeForm recipe={recipe} onSaved={() => navigate(`/recipes/${id}`)} />
      </div>

      <div style={{ marginTop: 12 }}>
        <DeleteRecipeButton id={id} onDeleted={() => navigate("/")} />
      </div>

      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
