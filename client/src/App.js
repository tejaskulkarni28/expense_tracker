import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import AddExpense from './components/Expenses/AddExpenses';
import {AppProvider} from "./context/AppContext";


function App() {
  return (
    <AppProvider>
      <div className="App">
      <div className="Header">
        <h1>My Budget Tracker</h1>
        <Budget/>
        <Remaining/>
        <Spent />

        <AddExpense/>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
