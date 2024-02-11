import React, { useEffect } from 'react';
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

const mapStateToProps = state => ({
  greeting: state.greeting,
});

const mapDispatchToProps = dispatch => ({
  getRandomGreeting: () => dispatch(getRandomGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
