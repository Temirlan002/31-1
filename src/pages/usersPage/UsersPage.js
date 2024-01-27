import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput } from "../../store/usersSlice";


function UsersPage() {
    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    console.log(users)

    return (
        <div>
            <input type="text" onChange={changeInputFunc} />
            <button>clear</button>
            <button>delete all</button>
            <button onClick={addUserFunc}>add user</button>

            {users.map(user => <h3>{user}</h3>)}

        </div>
    )
}

export default UsersPage