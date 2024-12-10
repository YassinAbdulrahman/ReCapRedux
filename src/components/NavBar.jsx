import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../rtk/action/movieAction";

function NavBar() {
    const dispatch = useDispatch()
    const OnSearch = (word)=>{
      serach(word)
    }

    const serach = async (word) => {
      if (word === "") {
        dispatch(getAllMovie());
      } else {
        dispatch(getMovieSearch(word))
      }
    };
    
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <Link to="/">
              <img className="logo" src={logo} alt="dfs" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                onChange={(e) => OnSearch(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
