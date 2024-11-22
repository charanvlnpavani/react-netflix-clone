import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import back_arrow_icon from "../../assets/back_arrow_icon.png";

import "./Player.css";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWJiZGZiYjY1YTQ4ODI3MThmY2Y4Y2NkM2M3MWQ4OCIsIm5iZiI6MTczMjE5NDYwOS40OTE4NjM1LCJzdWIiOiI2NzNmMmU1ZTYyYmQ3OGU1NzE1OGE4ZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wnNfngWRwUkmJmMl-ZTJxzbUq2tC2uEwUR5_7CiSg30",
    },
  };
  useEffect(() => {
    console.log(id, "id");
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setApiData(response.results[0]);
      })
      .catch((err) => console.error(err));
  }, [id]);
  const videoUrl = `https://www.youtube.com/embed/${apiData.key}`;
  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={videoUrl}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
