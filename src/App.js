import React, { lazy, Suspense } from 'react';
import './styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from './components/main/MainContainer';
import Loading from './components/main/Loading';

// ===== Redux ===== //
import { Provider } from 'react-redux';
import generateStore from './redux/store';
// ================= //


// ===== Components ===== //
const Index = lazy(() => import('./pages/Index'));
const Product =  lazy(() => import('./pages/Product'));
const Cart =  lazy(() => import('./pages/Cart'));
// ====================== //


const App = () => (
  <Provider store={generateStore()}>
    <Suspense fallback={<Loading />}>
      <Router>
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </MainContainer>
      </Router>
    </Suspense>
  </Provider>
)

export default App;