import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./templates/Layout";
import Notification from "./components/Notification";

const Home = lazy(() => import("./pages/Home"));
const Employees = lazy(() => import("./pages/Employees"));
const About = lazy(() => import("./pages/About"));
const AddProject = lazy(() => import("./pages/AddProject"));
const Projects = lazy(() => import("./pages/Projects"));
const Submit = lazy(() => import("./pages/Submit"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Notification />

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[70vh]">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/gallery" element={<Projects />} />
            <Route path="/contact" element={<About />} />
          </Routes>
        </Suspense>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
