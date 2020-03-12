import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Heading from './Components/Heading';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const App = () => {

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <GameStartScreen onStartGame={startGameHandler} />;

  if(userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if(guessRounds > 0){
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
  }

  return(
    <View style={styles.screen}>
      <Heading title="Guess a Number"/>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;