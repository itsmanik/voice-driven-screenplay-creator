import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";
import NewMovie from "./components/NewMovie/NewMovie";
import LogIn from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Movies from "./components/Movie/Movies"
import Scene from "./components/Movie/Scene";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<NewMovie />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movies/:movieName" element={<Movies />} />
            <Route path="/movies/:movieName/:sceneName" element={<Scene />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
