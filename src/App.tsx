
import './App.css'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator } from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";
import { CountState } from './store/countReducer';
import { UserState } from './store/userReducer';
import { AppDispatch } from './store/store';

const App: React.FC = () => {
    const { count } = useSelector<{ countReducer: CountState }, CountState>(state => state.countReducer);
    const { users } = useSelector<{ userReducer: UserState }, UserState>(state => state.userReducer);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="app">
            <div className="count">{count}</div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
                <button className="btn" onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТЬ ЮЗЕРОВ--</button>
            </div>
            <div className="users">
                {users.map(user =>
                    <div className="user" key={user.id}>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;