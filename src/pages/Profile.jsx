import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile({ history }) {
  return (
    <>
      <Header title="Profile" />
      <p data-testid="profile-email">{localStorage.getItem('user')}</p>
      <button
        type="submit"
        onClick={ () => history.push('/done-recipes') }
        value="Done Recipes"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="submit"
        onClick={ () => history.push('/favorite-recipes') }
        data-testid="profile-favorite-btn"
        value="Done Recipes"
      >
        Favorite Recipes
      </button>
      <button
        type="submit"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
        value="Done Recipes"
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Profile;
