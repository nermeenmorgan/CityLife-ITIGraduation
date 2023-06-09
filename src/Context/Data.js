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

    return (
        <DataContext.Provider value={{ userData, saveUserData }}>
            {props.children}
        </DataContext.Provider>
    );
}