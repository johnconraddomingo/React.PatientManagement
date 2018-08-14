import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/layout';
import { Home } from './components/home';
import { Patients } from './components/patients';    


export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/patients' component={Patients} />     
            <Route exact path='/patients/:action' component={Patients} />     
            <Route path='/patients/:action/:actionId' component={Patients} />
      </Layout>
    );
  }
}
