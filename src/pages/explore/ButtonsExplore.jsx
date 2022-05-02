import React from 'react';
import PropTypes from 'prop-types';

function ButtonsExplore({ history }) {
  function clickExploreIngredient() {
    if (food) {
      history.push('/explore/foods/ingredients');
    } else history.push('/explore/drinks/ingredients');
  }
  return (
    <>
      <button
        type="submit"
        data-testid="explore-by-ingredient"
        onClick={ clickExploreIngredient }
      >
        By Ingredient
      </button>
      <button
        type="submit"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        type="submit"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </>
  );
}

ButtonsExplore.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default ButtonsExplore;
