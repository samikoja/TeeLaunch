import React, { useRef, useEffect, useState } from "react";
import { Row, Container, Form, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { imageSelector } from "../../features/ImageSlice";

function CanvasImage() {
  const canvas = useRef(null);
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [color, setColor] = useState("");
  const [color1, setColor1] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const imageState = useSelector(imageSelector);

  const colors = [
    { id: 1, label: "red" },
    { id: 2, label: "blue" },
    { id: 3, label: "yellow" },
    { id: 4, label: "black" },
  ];

  useEffect(() => {
    const catImage = new Image();
    catImage.src = imageState;
    catImage.onload = () => {
      setImage(catImage);
      setIsImage(true);
    };
  }, [imageState]);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.drawImage(image, 10, 10, 300, 277);
      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(topText, 150, 50, 200);
      ctx.fillText(bottomText, 150, 250, 200);
    }
  }, [image, canvas, topText, bottomText]);

  const newSize = () => {
    const ctx = canvas.current.getContext("2d");
    const gradient = canvas.current
      .getContext("2d")
      .createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, color1);
    ctx.shadowBlur = 20;
    ctx.strokeStyle = gradient;
    ctx.lineWidth = borderWidth;
    ctx.strokeRect(10, 10, 300, 277);
  };

  return (
    <Container>
      <Row>
        <canvas ref={canvas} width={400} height={400} />
      </Row>
      {isImage && (
        <>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Second Text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md="4">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                  as="select"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select Color...
                  </option>
                  {colors.map((value) => (
                    <option key={value.id}>{value.label}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control
                  as="select"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select Color...
                  </option>
                  {colors.map((value) => (
                    <option key={value.id}>{value.label}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Control
                type="number"
                placeholder="Border width"
                value={borderWidth}
                onChange={(e) => setBorderWidth(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-5 d-flex justify-content-center">
            {(color || color1 || borderWidth) == "" ? (
              <Col md="1">
                <Button onClick={() => newSize()} disabled>
                  Submit
                </Button>
              </Col>
            ) : (
              <Col md="1">
                <Button onClick={() => newSize()}>Submit</Button>
              </Col>
            )}
            <Col md="1">
              <a
                id="download"
                download="canvasImage.png"
                href={`${canvas.current.toDataURL("image/png")}`}
              >
                <Button>Download</Button>
              </a>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default CanvasImage;
