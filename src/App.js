
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

function App() {
  return (
    <div className="App">
     <Header/>
  <div className='app__body'>
    <Sidebar/>
    <Feed/>
    <RightSidebar/>
  </div>

    </div>
  );
}

export default App;
