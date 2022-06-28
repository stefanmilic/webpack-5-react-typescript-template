// Importing "react" is still required when using methods from it
import { useState } from 'react';

interface IRecipe {
  leatherStrips: number;
  ironIngot: number;
  refinedMoonstone: number;
}

const elvenShieldRecipe: IRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1
};

const Recipes = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe);

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlets</button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material as keyof IRecipe]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
