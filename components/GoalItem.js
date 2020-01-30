import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
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

export default GoalItem;