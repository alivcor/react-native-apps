import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  // const addGoalHandler = () => {
  //   console.log(enteredGoal)
  // };

  const addGoalHandler = () => {
    setGoals([...goals, enteredGoal]);
  };


  return (
    <View style={ styles.screen }>
      <View style = { styles.inputContainer}>
        <TextInput 
          placeholder="Your Goal"
          style = {styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button title = "Add Goal" onPress = {addGoalHandler} style = {styles.buttonStyle}/>
      </View>

      <ScrollView>
        {goals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text key={goal}>
              {goal}
            </Text>
          </View>)
          )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'blue',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  screen: {
    flex: 1,
    padding: 10,
    paddingTop: 100
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "aliceblue",
    opacity: 0.85,
    borderColor: 'aliceblue',
    borderWidth: 2,
    flex: 1,
    shadowColor: 'aliceblue',
    shadowRadius: 3,
    shadowOpacity: 0.85,
    borderRadius:10,
  }
});
