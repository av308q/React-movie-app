import React from 'react';
import {Router} from '@reach/router';


import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound'; 

import {GlobalStyle} from './styles/GlobalStyle';

const App = () => (
<React.Fragment>
  <Header/>
  <Router>
    <Home path="/"/>
    <Movie path="/:movieId"/>
    <NotFound default 
    />
  </Router>
  
  <GlobalStyle/>
</React.Fragment>
);

export default App;

// 1. JSX is sugar for Reaxt.createElement
// 2. JSX can selfclose
// 3. User defined components should start with a capital letter
// 4. you can use JavaScript expression inside of JSX 
// 5. you can nest components just like you can in html
// 6. Nested content can be accessed in props.children
