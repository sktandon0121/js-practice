
import './App.css';
import MyDropdown from './companyUI/Dropdown';
import getPromise from './promises/promise';
import getAllPromiseData from './promises/promise_all';
import UserList from './userList/DisplayUser'

function App() {
  // promise all 
  // getAllPromiseData()

  // promise single
  getPromise()
  return (
    <div className="App">
      <MyDropdown />
      <UserList />
    </div>
  );
}

export default App;
