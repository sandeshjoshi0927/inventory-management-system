import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  return (
    <>
      <Navigation />
      {routes.map((route) => {
        if (window.location.pathname == route.path) {
          return <div key={route.path}>{route.element}</div>;
        }
      })}
    </>
  );
}

export default App;
