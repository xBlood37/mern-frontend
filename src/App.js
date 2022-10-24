import { Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispath = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispath(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-posts" element={<AddPost />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
