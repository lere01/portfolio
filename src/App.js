import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "../src/errorboundary";
import Nav from "./atoms/navigation/nav";
import "./App.css";
const LandingPage = React.lazy(() => import("./pages/landingpage"));
const Resume = React.lazy(() => import("./pages/resume"));
const Contact = React.lazy(() => import("./pages/contactpage"));
const RecentWorks = React.lazy(() => import("./pages/portfolio"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>fetching..</div>}>
        <Router>
        <Nav style={{ position: "absolute", zIndex: "3" }} />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/recent">
              <RecentWorks />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
