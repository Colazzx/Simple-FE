import React, { useState, useRef } from "react";
import { Button, Col, Container, Figure } from "react-bootstrap";
import axios from "axios";
import { Api } from "../../config/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateRef = () => {
  const [preview, setPreview] = useState();
  const [previewName, setPreviewName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);
  const imageRef = useRef(null);

  //Untuk Navigation
  const navigate = useNavigate();

  const loadImage = () => {
    const img = imageRef.current.files[0];
    setPreview(URL.createObjectURL(img));
    setPreviewName(img.name);
  };

  const saveContact = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageRef.current.files[0]);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    try {
      await axios.post(Api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        position: "center",
        title: "Data berhasil disimpan!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/services");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <Container className="mt-3">
      <h3>Form Add Contacts Members</h3>
      <hr />
      <div className="mt-3 d-lg-flex flex-lg-row justify-content-center d-sm-flex flex-sm-column">
        <Col className="col-lg-6">
          <form onSubmit={saveContact}>
            <div className="form-group my-3">
              <label>Full Name: </label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-danger">
                {errors.length > 0 && (
                  <div className="alert-danger">
                    {errors.map((error) => (
                      <small key={error.msg}>
                        {error.path === "name" ? error.msg : ""}{" "}
                      </small>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group my-3">
              <label>Email: </label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-danger">
                {errors.length > 0 && (
                  <div className="alert-danger">
                    {errors.map((error) => (
                      <small key={error.msg}>
                        {error.path === "email" ? error.msg : ""}{" "}
                      </small>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group my-3">
              <label>Phone: </label>
              <input
                className="form-control"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="text-danger">
                {errors.length > 0 && (
                  <div className="alert-danger">
                    {errors.map((error) => (
                      <small key={error.msg}>
                        {error.path === "phone" ? error.msg : ""}{" "}
                      </small>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="form-group my-3">
              <label>Image: </label>
              <input
                className="form-control"
                type="file"
                ref={imageRef}
                onChange={loadImage}
              />
            </div>
            <button className="btn btn-primary mx-2" type="submit"></button>
            Add Contact
          </form>
        </Col>
        {preview && (
          <Col className="col-lg-5">
            <Figure>
              <Figure.Image
                width="100%"
                style={{ height: 300 }}
                alt={previewName}
                src={preview}
                className="img-thumbnail"
              />
              <Figure.Caption>{previewName}</Figure.Caption>
            </Figure>
          </Col>
        )}
      </div>
    </Container>
  );
};

export default CreateRef;
