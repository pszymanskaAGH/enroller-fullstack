import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const [loggedIn, setLoggedIn] = useState('');
    const notify = () => toast('Wow so easy !');

    function login(email) {
        if (email) {
            // notifyUser()
            //TODO notify user
            setLoggedIn(email);
        }
    }

    function logout() {
        setLoggedIn('');
    }

    function notifyUser() {
        return (
            notify
        );
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {loggedIn ? <UserPanel username={loggedIn} onLogout={logout}/> : <LoginForm onLogin={login}/>}
        </div>
    );
}

export default App;
