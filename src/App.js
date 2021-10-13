import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import PageLayout from './components/PageLayout';
import AboutPage from './pages/AboutPage';
import BlogProjectPage from './pages/BlogProjectPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';


const App = () => {
  return (
    <PageLayout className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/contact" exact>
          <ContactPage></ContactPage>
        </Route>
        <Route path="/about" exact>
          <AboutPage></AboutPage>
        </Route>
        <Route path="/resume" exact>
          <ResumePage></ResumePage>
        </Route>
        <Route path="/blog" exact>
          <BlogProjectPage></BlogProjectPage>
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
