import { Container, Pagination } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar";
import MovieList from "./components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "./rtk/action/movieAction";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
              />
            }
          />
          <Route path="/movie/:id" element={<CardDetails />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
