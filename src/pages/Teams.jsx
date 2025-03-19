import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from "react-bootstrap";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  // Axios
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setTeams(res.data.data);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {teams.map((team) => (
          <div key={team.id} className="col-md-4 mb-3">
            <Fade delay={team.id * 10}>
              <Card style={{ width: "25rem", minHeight: "14rem" }}>
                <Card.Img
                  variant="top"
                  src={team.avatar}
                  alt={`${team.first_name} ${team.last_name}`}
                  width={100}
                  height={350}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{`${team.first_name} ${team.last_name}`}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    <strong>email: </strong>
                    {team.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
