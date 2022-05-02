/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppFoodContext from '../context/AppFoodContext';

function Cards({ FoodOrDrink }) {
  const { categoryClick, categoryArr } = useContext(AppFoodContext);
  const numberMaxCards = 12;

  return (
    <>
      <p>.</p>
      {FoodOrDrink
      && (categoryClick.categorie && categoryArr ? categoryArr : FoodOrDrink)
        .map((ForD, index) => (
          <div
            key={ ForD.idMeal || ForD.idDrink }
          >
            <p
              className={ ForD.idMeal || ForD.idDrink }
              data-testid={ `${index}-card-name` }
            >
              { ForD.strMeal || ForD.strDrink }
            </p>
            <img
              className={ ForD.idMeal || ForD.idDrink }
              data-testid={ `${index}-card-img` }
              src={ ForD.strMealThumb || ForD.strDrinkThumb }
              alt={ ForD.strMeal || ForD.strDrink }
            />
            <p
              className={ ForD.idMeal || ForD.idDrink }
              data-testid={ `${index}-recipe-card` }
            >
              {ForD.strInstructions}
            </p>
          </div>
        )).slice(0, numberMaxCards)}
    </>
  );
}

Cards.propTypes = {
  FoodOrDrink: PropTypes.string,
}.isRequired;

export default Cards;