import "./App.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { toPng } from 'html-to-image';
import * as React from "react";
import Title from "./Title";
import AnnouncementImage from "./AnnouncementImage";
import Larry from "./larry_the_cat.jpg"
const IMAGE_ID = "SecStateImage";

function App() {
  const [photo, setPhoto] = useState(Larry);
  const [nameText, setNameText] = useState("Larry the Cat");
  const [departmentText, setDepartmentText] = useState("Cats");
  const [isLoading, setIsLoading] = useState(false);
  const printRef = React.useRef();

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  
    toPng(printRef.current, { 
      cacheBust: true, 
      height: 750,
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      });
    setIsLoading(false);
  }

  function onReset(e) {
    e.preventDefault();
    setIsLoading(true);
    setPhoto(null);
    setNameText("");
    setDepartmentText("")
    setIsLoading(false);
  }

  return (
    <Container fluid={true} className={"md-min-vh-100"}>
      <Row className={"h-100"}>
        <Col md={{ order: 12 }} className={"pt-2"}>
          <AnnouncementImage
            ref={printRef}
            id={IMAGE_ID}
            photo={photo}
            name={nameText}
            department={departmentText}
          />
        </Col>
        <Col md={{ order: 1 }} className={"sidebar-bg pt-2 menu"}>
          <Form onSubmit={onSubmit} onReset={onReset}>
            <Title />
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={nameText}
                onChange={(e) => setNameText(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                value={departmentText}
                onChange={(e) => setDepartmentText(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type={"submit"}
              className={"float-right"}
              disabled={isLoading}
            >
              {isLoading && (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only mr-2">Loading...</span>
                </>
              )}
              Download
            </Button>
            <Button
                variant="primary"
                type={"reset"}
                className={"float-right mr-2"}
                disabled={isLoading}
            >
              {isLoading && (
                  <>
                  <span
                      className="spinner-border spinner-border-sm mr-2 "
                      role="status"
                      aria-hidden="true"
                  />
                    <span className="sr-only mr-2">Loading...</span>
                  </>
              )}
              Clear
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
