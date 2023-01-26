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
    console.log(goal);
    insertArray((prev) => [...prev,goal]);
  }
    
  return (
    <div className="App">
      <Header />
      <AddGoals addGoal={addGoalHandler} />
      <Goals goals={goalsArray} />
      <Footer />
    </div>
  );
}

export default App;
