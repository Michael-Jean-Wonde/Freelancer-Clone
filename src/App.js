import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import VideoBanner from "./components/videoBanner";
import Brands from "./components/brands";
import Features from "./components/features";
import Content from "./components/content";
import Projects from "./components/projects";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./admin/dashboard";
import ProjectList from "./pages/projectList";
import ProfessionalsList from "./pages/proffessionalsList";
import EmployerHeader from "./components/employerHeader";
import PostProject from "./pages/postProject";

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
            exact
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/projectList"
            element={
              <>
                <ProjectList />
              </>
            }
          />
          <Route
            exact
            path="/proffessionalsList"
            element={
              <>
                <EmployerHeader />
                <ProfessionalsList />
              </>
            }
          />
          <Route
            exact
            path="/postProject"
            element={
              <>
                <PostProject />
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
