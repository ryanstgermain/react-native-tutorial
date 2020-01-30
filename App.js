import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalInput from './components/GoalInput.js';
import GoalItem from './components/GoalItem.js';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        style={styles.listContainer}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() =>
              console.log('touched')
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  listContainer: {
    height: '90%'
  }
});
