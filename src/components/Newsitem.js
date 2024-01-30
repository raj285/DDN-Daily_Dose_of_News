import React, { Component } from "react";
import "./Newsitem.css";
export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, date, publisher, studio } =
      this.props; // it's a object
    return (
      <div>
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {studio}
          </span>
          <img 
            src={
              imageurl === null
                ? (imageurl =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACfCAMAAADQxfvSAAAAM1BMVEXm5uaztbTp6em7vbzAwcCwsrHi4uK4urnf39/Oz87c3NzZ2dnLzMzFxsXV1dXIycjw7/BY9BmbAAADsElEQVR4nO2aiXLjIAxAQdyX6P9/7Qpwetg4u+3UJrOjN51MfKR5KwwS6grBMAzDMAzDMAzDMAzDMAzDMAzDMAzDMMyvYOes1npQpJFHjCyrxQZlZtcNX0IwnemRYFotJwSEJ34BVusJ0E/89Av4uVM9Kd16P3EePgrgIqdPYYlP/eL0M5frpaIfPBteKdX7fQVvE7SnK94zTLkrofxI777l+nRBNtKMn7PrtyzXcBI+40pO0ceUizsxvGc5VHO97AW076cXn+d+6g69qZ/RX9YPENOssszP5A+zjTwRXOVnMgy3iAHjcJzVDYv8TO3Pnc3ONFy1/bgeBBf5ubbwQnqftcalHsJDalnjZ5oN4OdomZbM4LBQrvFzog3u7mQf4v2dS/xMaCd3i/bIZfspsiZ+LWtFuadVVukV4ue8OEZqRNXvZsgSv/alx03I2HpMbr3dT3e/w/h2v93phX6Htfhl/Pr4HmouU15lfHv2wIMf0ln7CvNDNpP9TB2zGncn16zPtZ3clVOj4NrXWIvqg74vU1/ybzfZ57xV9UHrAoH9tOkwrqXfYwW4qj6NvZx6tCm3xiQcc94qP9VHGFJts8TVUf3ZyX2L/IzuF6B3orc9yKzvtm5/pPzXrS342QZu3f6SVkH4MATAadtopZ9xaEmsWVo8aSDc4nfW36B5q2sIoeqzBszIyZdz3pE0vT90fjn+/Zf/ApON7T8xtsl3kM9jdG730QO5HPBZf5fs7+zlw/e50e5/4daYRf/tT4RZx94mES9YaKBSmdeeopH94fEiPp6sxyHg6AeOjPLpV/QXq0S9YKGGHOjfXb2vsVVSrT2AoQUibFGii4m+vV0puu8+XIJYEUSywnsbMfdPohb5gpWw+ckSXEFpUdECA7qiy0Jhag0sKubbFe8Qla39TzHoIimWInSEELzMdD2pqJ0I+Ro/yu+OCrvofQy6vQ0hqRR1K/AtHRaKK4BOY3y9BkWVtbKb3xt9kt7S+GL4db3upzc/VDVoT28xoAo5tA6WVRYKFhriisMvKmiR1X74KSB/5YXVAvFaP+ff6ClyUZRAEm85PvxSoCdf+VA3vxLAU/wS6OEXKb5J0dN4gV8NNDJWCho0lKoq+n5NI1ud69U9XaT4gXaO5lHvHkRHY6lokgSpVPCujbygu5XIV6TitnCI8TMSVmhDKd5T13axH24rz3b4nuC29+KWZAdV69v+ZPojXud/CDEMwzAMwzAMwzAMwzAMwzAMwzAMwzDM/80fAykfKuirqiYAAAAASUVORK5CYII=")
                : imageurl
            }
            className="card-img-top imgcss"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description} </p>
            <p></p>
            <p>
              {" "}
              By-<b>{publisher}</b> on- {new Date(date).toGMTString()}
            </p>
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
