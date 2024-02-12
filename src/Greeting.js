import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { connect } from 'react-redux';
import { getRandomGreeting } from './actions';

function Greeting({ greeting, getRandomGreeting }) {
  useEffect(() => {
    getRandomGreeting();
  }, [getRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  getRandomGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = (dispatch) => ({
  getRandomGreeting: () => dispatch(getRandomGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
