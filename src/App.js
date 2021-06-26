import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import ListProducts from './ListProducts';
import ProductDetails from './ProductDetails';


function App() {
  return (
    <div className="page">
      <ul className='navigation'>
        <li className="navigation__item"><Link to="/">ListProducts</Link></li>
        <li className="navigation__item"><Link to="/details">Details</Link></li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <ListProducts />
        </Route>
        <Route path='/details' component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
