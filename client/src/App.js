import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import {RestaurantsContextProvider} from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="App container">
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id/update" element={<UpdatePage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailsPage />} />
        </Routes>
      </Router>
    </div>
    </RestaurantsContextProvider>
  );
}

export default App;
