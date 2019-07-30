import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'

//这是路由组件
import Search from './components/router/Search/index.jsx';
import CategoryList from './components/router/categoryList/index.jsx';
import Find from './components/router/find/index.jsx';
import My from './components/router/my/index.jsx';
import GoodList from './components/router/GoodList/index.jsx';
import ScarebuySub from './components/router/scarebuysub/index';
import PromotionSub from './components/router/promotionSub/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/search' component={Search}></Route>
                <Route path='/categorylist:id' component={CategoryList}></Route>
                <Route path='/scarebuy/sub:id' component={ScarebuySub}></Route>
                <Route path='/promotion/sub:id' component={PromotionSub}></Route>
                <Route path='/find' component={Find}></Route>
                <Route path='/my' component={My}></Route>
                <Route path='/goodsList:id' component={GoodList}></Route>
              </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
