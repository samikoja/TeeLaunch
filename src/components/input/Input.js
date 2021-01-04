import React, { useState } from "react";
import { Row, Col, Container, Form, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../../features/ImageSlice";

function Input() {
  const dispatch = useDispatch();

  const handleImage = (e) => {
    dispatch(setImage({ image: URL.createObjectURL(e.target.files[0]) }));
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              type="file"
              onChange={(e) => handleImage(e)}
            />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default Input;
