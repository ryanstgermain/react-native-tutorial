import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Modal } from 'react-native';

const GoalInput = (props) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title='ADD'
          onPress={addGoalHandler}
        />
        <Button
          title='CANCEL'
          color='red'
          onPress={props.onCancel}
        />
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
   },

  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default GoalInput;