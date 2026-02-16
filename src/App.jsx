import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./templates/Layout";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import About from "./pages/About";
import AddProject from "./pages/AddProject";
import Projects from "./pages/Projects";
import Submit from "./pages/Submit";
import Settings from "./pages/Settings";
import Notification from "./components/Notification";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Notification />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/submit" element={<Submit/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/gallery" element={<Projects />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
