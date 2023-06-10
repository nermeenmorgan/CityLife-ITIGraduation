import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from "uuid";
import "./cinema.css";

export default function Cinema() {
  const { movies } = useContext(DataContext);
  const [TopNav, setTopNav] = useState("All");
  const [selectedDay, setSelectedDay] = useState(""); // state for the day select
  const [selectedShowTime, setSelectedShowTime] = useState(""); // state for the showtime select

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleShowTimeChange = (event) => {
    setSelectedShowTime(event.target.value);
  };

  const handleClickTopNav = (val) => {
    setTopNav(val);
  };
  const handleClickConfirmReser = () => {
    setSelectedDay("");
    setSelectedShowTime("");
  };
  //   console.log(movies);

  return (
    <>
      {!movies ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="my-2">El-Rehab Cinema</h1>
            <a
              className="ms-5 nav-link text-muted mb-3"
              href="https://www.google.com/maps/place/Al+Rehab+Cinema/@30.059036,31.4958799,15z/data=!4m6!3m5!1s0x14581888bcacb1bb:0x417640e69aeaea98!8m2!3d30.059036!4d31.4958799!16s%2Fg%2F1tdhvt25?entry=ttu"
            >
              <h5>
                <i className="fa-solid fa-location-dot"></i> Inside El-Rehab
                Mall 1
              </h5>
            </a>
            <div className="row justify-content-around my-2">
              <button
                type="button"
                onClick={() => handleClickTopNav("All")}
                className="btn btn-success col-md-4 w-25"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("ThisWeek")}
                className="btn btn-success col-md-4 w-25"
              >
                This Week
              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("NextWeek")}
                className="btn btn-success col-md-4 w-25"
              >
                Next Week
              </button>
            </div>
            {movies.map((movie) => {
              if (TopNav === "All") {
                return (
                  <div
                    key={uuid()}
                    className="col-lg-4 col-md-6 col-sm-12 my-3"
                  >
                    <div className="card shadow mx-auto" style={{ width: 350 }}>
                      <img
                        src={movie.img}
                        className="card-img-top"
                        height={400}
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{movie.name}</h5>
                          <h6 className="card-title">
                            <i
                              className="fa-sharp fa-solid fa-star"
                              style={{ color: "#ffdf0f" }}
                            />
                            {movie.rating}
                          </h6>
                        </div>
                        <p className="card-text line-clamp-3">
                          {movie.overview}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Type: {movie.type}</li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Language: {movie.language}</span>
                          <span>Country: {movie.country}</span>
                        </li>
                        <li className="list-group-item">
                          Cast: {movie.actors}
                        </li>
                      </ul>
                      <div className="card-body text-center">
                        <button
                          disabled={movie.soon ? true : false}
                          className="btn btn-success w-50"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else if (TopNav === "ThisWeek" && movie.soon === false) {
                return (
                  <div
                    key={uuid()}
                    className="col-lg-4 col-md-6 col-sm-12 my-3"
                  >
                    <div className="card shadow mx-auto" style={{ width: 350 }}>
                      <img
                        src={movie.img}
                        className="card-img-top"
                        height={400}
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{movie.name}</h5>
                          <h6 className="card-title">
                            <i
                              className="fa-sharp fa-solid fa-star"
                              style={{ color: "#ffdf0f" }}
                            />
                            {movie.rating}
                          </h6>
                        </div>
                        <p className="card-text line-clamp-3">
                          {movie.overview}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Type: {movie.type}</li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Language: {movie.language}</span>
                          <span>Country: {movie.country}</span>
                        </li>
                        <li className="list-group-item">
                          Cast: {movie.actors}
                        </li>
                      </ul>
                      <div className="card-body text-center">
                        <button
                          disabled={movie.soon ? true : false}
                          className="btn btn-success w-50"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else if (TopNav === "NextWeek" && movie.soon === true) {
                return (
                  <div
                    key={uuid()}
                    className="col-lg-4 col-md-6 col-sm-12 my-3"
                  >
                    <div className="card shadow mx-auto" style={{ width: 350 }}>
                      <img
                        src={movie.img}
                        className="card-img-top"
                        height={400}
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{movie.name}</h5>
                          <h6 className="card-title">
                            <i
                              className="fa-sharp fa-solid fa-star"
                              style={{ color: "#ffdf0f" }}
                            />
                            {movie.rating}
                          </h6>
                        </div>
                        <p className="card-text line-clamp-3">
                          {movie.overview}
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Type: {movie.type}</li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Language: {movie.language}</span>
                          <span>Country: {movie.country}</span>
                        </li>
                        <li className="list-group-item">
                          Cast: {movie.actors}
                        </li>
                      </ul>
                      <div className="card-body text-center">
                        <button
                          disabled={movie.soon ? true : false}
                          className="btn btn-success w-50"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="exampleModalToggleLabel"
                    >
                      Ticket Reservation
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Choose Day: </p>
                    <select
                      class="form-select form-select-md mb-3"
                      aria-label="Default select example"
                      onChange={handleDayChange}
                      value={selectedDay}
                    >
                      {/* <option disabled>Choose Day...</option> */}
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                    <p>Choose Show Time: </p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={handleShowTimeChange}
                      value={selectedShowTime}
                    >
                      {/* <option disabled selected>Choose ShowTime...</option> */}
                      <option value="10:30 am">10:30 am</option>
                      <option value="1:15 pm">1:15 pm</option>
                      <option value="4:00 pm">4:00 pm</option>
                      <option value="6:30 pm">6:30 pm</option>
                      <option value="9:00 pm">9:00 pm</option>
                      <option value="12:15 pm">12:15 pm</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-success"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      disabled={selectedShowTime && selectedDay ? false : true}
                      onClick={handleClickConfirmReser}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id="exampleModalToggleLabel2"
                    >
                      Success
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body d-flex flex-column align-items-center">
                    <i
                      class="fa-solid fa-check fa-beat  fs-1"
                      style={{ color: "#2aa509" }}
                    ></i>
                    <p className="fw-bold">
                      {" "}
                      Your reservation code is {uuid().substring(0, 8)}{" "}
                    </p>
                  </div>
                  {/* <div className="modal-footer"> */}
                  {/* <button
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              Back to first
            </button> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}
          </div>
        </div>
      )}
    </>
  );
}
