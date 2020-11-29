import React from 'react';
import GlobalStyles from './components/GlobalStyles';
//components and pages
import Home from './pages/home';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      {/* //render home components in both cases */}
      <Route path = {['/game/:id', '/']}> 
        <Home/>
      </Route>
    </div>
  );
}

export default App;
