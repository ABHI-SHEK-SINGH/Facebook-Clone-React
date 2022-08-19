
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{user} , dispatch]= useStateValue();
    return (
    <>
    {
      !user ? (<Login/>):(

        <div className="App">
     <Header/>
  <div className='app__body'>
    <Sidebar/>
    <Feed/>
    <RightSidebar/>
  </div>

    </div>
      )
    }
    
    </>
  );
}

export default App;
