import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "12px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationsList;
