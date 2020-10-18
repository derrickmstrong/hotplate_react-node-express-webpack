import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState(null);

  const fetchApi = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setName(data);
  };

  useEffect(() => {
    fetchApi();
    return () => {};
  }, []);

  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4'>Hello, Mr. {name}!</h1>
      </div>
    </div>
  );
};

export default App;
