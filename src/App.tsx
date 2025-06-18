import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { Blog } from "./pages/blog";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/blogs";
import { Publish } from "./pages/publish";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactusPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
