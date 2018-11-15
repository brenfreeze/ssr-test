import React from 'react'
import { Layout } from 'antd'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import Home from './Components/Home'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './Store/reducers'

const { Header, Content, Footer } = Layout

const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const createStoreWithMiddleware = composeEnhancers()(createStore);
const store = createStoreWithMiddleware(reducers)

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Layout className="layout">
          <Header>
            <h3 className="brand">
              Boogle Keep
            </h3>
          </Header>
          <Content className="content">
            <Home />
          </Content>
          <Footer>
            All rights reserved, all lefts not reserved.
          </Footer>
        </Layout>
      </Provider>
    )
  }
}

export default App
