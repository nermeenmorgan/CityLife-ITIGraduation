import React, { createContext } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';


export const DataContext = createContext();
export default function Data(props) {

    const [userData, setUserData] = useState(null);
    function saveUserData() {
        let encodedToken = localStorage.getItem("userToken");
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
    }

    function DeleteUserData() {
        localStorage.removeItem("userToken")
        window.location.reload();
    }

    return (
        <DataContext.Provider value={{ userData, saveUserData, DeleteUserData }}>
            {props.children}
        </DataContext.Provider>
    );
}