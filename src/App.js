import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGender, resetGender } from './redux/genderSlice';
import './styles/App.css';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.gender);

  const handleInputChange = (event) => {
    setName(event.target.value);
    dispatch(resetGender());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      dispatch(fetchGender(name));
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className='page-title xl'>Sample React Plugin</div>
          <input type="text" className="form-input" value={name} onChange={handleInputChange} />
          <button type="submit" className="form-button">Guess Gender</button>
        </form>
        <div className="form-message">
          {loading && <p>Loading...</p>}
          {error && <p>An error occurred: {error}</p>}
          {data && data.gender ? (
            <p>
              I think {name} is a {data.gender} name.
            </p>
          ) : data && (
            <p>I could not determine what gender {name} could be.</p>
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
