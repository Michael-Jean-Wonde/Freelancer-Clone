import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from './components/header';
import VideoBanner from './components/videoBanner';
import Brands from './components/brands';
import Features from './components/features';
import Content from './components/content';
import Projects from './components/projects';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import SignUp from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route
            exact
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
      <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />    
        <Route 
        path="/"
        element={
          <>
          <Header />
          <VideoBanner />
          <Brands />
          <Features />
          <Content />
          <Projects />
          <Portfolio />
          <Footer />
          </>
        }
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
