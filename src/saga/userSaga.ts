import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_USERS, setUsers, UserAction } from "../store/userReducer";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker(): Generator<any, void, User[]> {
    const data: Response = yield call(fetchUsersFromApi)
    const json: User[] = yield call(() => data.json())
    yield put(setUsers(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}