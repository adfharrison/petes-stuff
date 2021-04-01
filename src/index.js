import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

// set up base api request url
const crossoverApi = Axios.create({
  baseURL: 'https://petes-api.com',
});

// create app component
const App = () => {
  // create a bit of state to store xover data (we will assume its just a string)
  const [xovers, setXovers] = useState(null);

  // make request to api on click of button
  const getUsers = async () => {
    const { data } = await crossoverApi.get('/crossovers');
    // assuming this api endpoint gives a JSON object with a property of data.xovers
    setXovers(data.xovers);
  };

  // what to render
  return (
    <div>
      <h1>Petes App</h1>
      <button onClick={getUsers}>Get Xovers</button>
      {/* do we have the xovers? if so, render them, if not, a string */}
      <p>{xovers ? xovers : 'get xovers to show xovers'}</p>
    </div>
  );
};

// render app in DOM (see index.html in public folder)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
