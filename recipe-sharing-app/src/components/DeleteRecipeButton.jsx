import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate(); // <- This is what the test wants

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(id);
      navigate("/"); // <- go back to home after deleting
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;
