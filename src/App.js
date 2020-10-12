import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="Worldwide">Worldwide</MenuItem>
          <MenuItem value="Worldwide">Option II</MenuItem>
          <MenuItem value="Worldwide">Option III</MenuItem>
        </Select>
      </FormControl>


    </div>
  );
}

export default App;
