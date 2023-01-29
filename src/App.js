import React, {useState} from 'react';
import MockGoals from './MockGoals';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddGoals from './components/AddGoals/AddGoals';
import Goals from './components/Goals/Goals';

import './App.css';


function App() {

  const [goalsArray, insertArray] = useState(MockGoals);

  function addGoalHandler(goal){
    goal.key = Math.round(Math.random()*1000);
    insertArray((prev) => [...prev,goal]);
  }

  function deleteGoalHandler(key){
    insertArray(prev => prev.filter(item => item.key!== Number(key)));
  }
    
  return (
    <div className="App">
      <Header />
      <AddGoals addGoal={addGoalHandler} />
      <Goals goals={goalsArray} deleteGoal={deleteGoalHandler}/>
      <Footer />
    </div>
  );
}

export default App;
