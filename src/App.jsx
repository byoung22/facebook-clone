import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Feed from './Components/features/Feed/Feed';
import Widget from './Components/Widget/Widget';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user ? (
                <Login />
            ) : (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <Widget />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
