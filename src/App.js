
import './App.css';
import MyDropdown from './companyUI/Dropdown';
import getPromise from './promises/promise';
import getAllPromiseData from './promises/promise_all';

function App() {
  // promise all 
  // getAllPromiseData()

  // promise single
  getPromise()
  return (
    <div className="App">
      <MyDropdown />
    </div>
  );
}

export default App;
