import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const GoalInput = (props) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Course Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title='ADD'
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 10
  },

  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  }
});

export default GoalInput;