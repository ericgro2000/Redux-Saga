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

export interface UserState {
    users: User[];
}

const defaultState: UserState = {
    users: []
}

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"

export interface SetUsersAction {
    type: typeof SET_USERS;
    payload: User[];
}

export interface FetchUsersAction {
    type: typeof FETCH_USERS;
}

export type UserAction = SetUsersAction | FetchUsersAction;

export default function userReducer(state = defaultState, action: UserAction): UserState {
    switch(action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        default:
            return state;
    }
}

export const setUsers = (payload: User[]): SetUsersAction => ({
    type: SET_USERS,
    payload
})

export const fetchUsers = (): FetchUsersAction => ({
    type: FETCH_USERS
})