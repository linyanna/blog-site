import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings"; 

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/blog-site" element={<Home />}/>
        <Route path="/blog-site/register" element={user ? <Home /> : <Register />}/>
        <Route path="/blog-site/login" element={user ? <Home /> : <Login />}/>
        <Route path="/blog-site/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/blog-site/write" element={user ? <Write /> : <Register />}/>
        <Route path="/blog-site/post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
