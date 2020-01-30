import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [ courseGoals, setCourseGoals ] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
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
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  },

  listItem: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    marginLeft: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
