import React, { useEffect, useState } from "react";
import { Api, Url } from "../../config/Api";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await axios.get(Api);
    console.log(res.data.data);
    setContacts(res.data.data);
  };

  // Delete Contact
  const deleteContact = async (contactId) => {
    try {
      await Swal.fire({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${Api}/${contactId}`);
          getContacts();
          Swal.fire({
            title: "Terhapus!",
            text: "Data sudah dihapus.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">Contact List</h1>
        <Link to={"/create"} className="btn btn-outline-primary my-3">
          Add Contact
        </Link>
      </div>
      <hr />
      <div className="container mt-5 mb-5">
        <div className="row">
          {contacts.map((contact) => {
            return (
              <div key={contact.id} className="col-md-4 mb-3">
                <Card style={{ width: "25rem", minHeight: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${Url}/${contact.image}`}
                    width={100}
                    height={350}
                  />
                  <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>{contact.email}</Card.Text>
                    <Card.Text>{contact.phone}</Card.Text>
                  </Card.Body>
                  <div className="btn-group">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
