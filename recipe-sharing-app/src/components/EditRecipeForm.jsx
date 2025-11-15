import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm({ recipe, onSaved }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // <- This is what the test wants!

    updateRecipe({ id: recipe.id, title, description });

    if (onSaved) onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
