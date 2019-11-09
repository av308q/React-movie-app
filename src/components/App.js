import React from 'react';
import Header from './elements/Header';
import Home from './Home';

const App = () => (
<div>
  <Header/>
  <Home/>
</div>
);

export default App;

// 1. JSX is sugar for Reaxt.createElement
// 2. JSX can selfclose
// 3. User defined components should start with a capital letter
// 4. you can use JavaScript expression inside of JSX 
// 5. you can nest components just like you can in html
// 6. Nested content can be accessed in props.children
