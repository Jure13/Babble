import react, { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token'); //sessionStorage, localStorage
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };
  const [token, setToken] = useState(getToken());


  
  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken)); //sessionStorage, localStorage
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }

}