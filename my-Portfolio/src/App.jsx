import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Navbar, Nav, Form, Image } from 'react-bootstrap';

const WindowFrame = ({ title, children }) => (
  <div className="xp-window mb-4" style={{ border: '2px solid #0054E3', boxShadow: '2px 2px 0px black' }}>
    <div className="xp-title-bar d-flex justify-content-between align-items-center px-2 py-1" 
         style={{ background: 'linear-gradient(to bottom, #0058e6 0%,#3a91f4 10%,#005ad9 90%,#003192 100%)', color: 'white' }}>
      <span className="fw-bold small" style={{ fontFamily: 'Tahoma, sans-serif' }}>{title}</span>
      <div className="xp-controls d-flex gap-1">
        <Button size="sm" variant="primary" className="py-0 px-1 border-white" style={{ height: '18px', lineHeight: '10px', fontSize: '10px' }}>_</Button>
        <Button size="sm" variant="danger" className="py-0 px-1 border-white" style={{ height: '18px', lineHeight: '10px', fontSize: '10px' }}>×</Button>
      </div>
    </div>
    <div className="p-3" style={{ backgroundColor: '#ece9d8' }}>
      {children}
    </div>
  </div>
);

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .project-card:hover { transform: translateY(-5px); transition: 0.3s; box-shadow: 4px 4px 8px rgba(0,0,0,0.3); }
      .xp-desktop { background: #3a6ea5; min-height: 100vh; font-family: 'Tahoma', sans-serif; padding-bottom: 60px; }
      .start-button { background: linear-gradient(to bottom, #388e3c, #2e7d32); color: white; border-radius: 0 10px 10px 0; font-style: italic; font-weight: bold; border: none; padding: 0 15px; height: 100%; }
      .taskbar { height: 30px; background: linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #1941a5 100%); border-top: 2px solid #ffffff; z-index: 1030; }
      .form-control { border-radius: 0; border: 1px solid #7a7a7a; }
      .user-avatar { border: 2px solid #fff; box-shadow: 1px 1px 3px rgba(0,0,0,0.5); }
    `;
    document.head.appendChild(style);
  }, []);

  const projects = [
    {
      title: "Emotion-Aware Debugger",
      desc: "An AI assistant that detects developer frustration and adjusts debugging help.",
      link: "https://github.com/NivedhN160/Emotion-Aware-Code-Debugging-Assistant",
      img: "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
    },
    {
      title: "GPT-DuckDuckGo",
      desc: "Pre-trained generative model with real-time web access via DuckDuckGo.",
      link: "https://github.com/NivedhN160/Pre-trained-Generative-model-with-DuckDuckGo-access",
      img: "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
    },
    {
      title: "Smart Mobility Companion",
      desc: "Hugging Face model designed for intelligent transportation and companion logic.",
      link: "https://huggingface.co/NivedhN160/smart-mobility-companion",
      img: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/hugging-face-g12vdlxix7lhg0o2wio8ou.png/hugging-face-q6ba5e7ae4sbbtafhsyrip.png?_a=DATAiZAAZAA0"
    }
  ];

  return (
    <div className="xp-desktop">
      <Navbar bg="light" className="border-bottom border-dark py-0" style={{ height: '28px' }}>
        <Container fluid>
          <Nav className="flex-row gap-3 small">
            <Nav.Link href="https://github.com/NivedhN160" target="_blank" className="fw-bold text-dark">
                My_GitHub.exe
            </Nav.Link>
            <Nav.Link href="https://huggingface.co/NivedhN160/" target="_blank" className="fw-bold text-dark">
                My_HuggingFace.exe
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nivedh-sunil-9b5a71352/" target="_blank" className="fw-bold text-primary">
                LinkedIn_Profile.exe
            </Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact.exe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col lg={10} className="py-5 text-center">
            <WindowFrame title="C:\\Users\\Nivedh\\Bio.exe">
              <Image 
                src="https://media.licdn.com/dms/image/v2/D5635AQH_gI9zWfpj0Q/profile-framedphoto-shrink_400_400/B56ZwCHXnZIwAc-/0/1769562012360?e=1770789600&v=beta&t=nMiMj5Eqzy1ljeyw7cPywNDs0vrWFHaIYwp58E6PPxI" 
                rounded 
                width={100} 
                className="mb-3 user-avatar"
              />
              <br />
              <Badge bg="success" className="mb-2">Active</Badge>
              <h1 className="display-6 fw-bold">Nivedh Sunil</h1>
              <p className="lead">20-Year-Old Coder & Movie Enthusiast</p>
            </WindowFrame>
          </Col>
        </Row>
        <Row id="projects">
          <Col lg={12}>
            <WindowFrame title="My Work - Explorer">
              <Row className="g-3">
                {projects.map((p, i) => (
                  <Col key={i} lg={4} md={6} xs={12}>
                    <Card className="rounded-0 border-secondary project-card h-100">
                      <div className="p-2 text-center bg-white">
                        <Card.Img variant="top" src={p.img} className="rounded-0" style={{ height: '80px', width: 'auto', maxWidth: '100%' }} />
                      </div>
                      <Card.Header className="py-1 small fw-bold bg-light border-top">
                        {p.title}
                      </Card.Header>
                      <Card.Body className="p-3 d-flex flex-column">
                        <Card.Text className="small flex-grow-1 text-muted">{p.desc}</Card.Text>
                        <Button 
                          href={p.link} 
                          target="_blank" 
                          variant="outline-primary" 
                          size="sm" 
                          className="rounded-0 border-dark mt-2"
                        >
                          Open File...
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </WindowFrame>
          </Col>
        </Row>
        <Row id="contact" className="mt-4">
          <Col lg={12}>
            <WindowFrame title="Send_Message.msi">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold">User Name:</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold">Email Address:</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Message Transcript:</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
                </Form.Group>
                <Button variant="secondary" className="rounded-0 border-dark shadow-sm">Execute Send</Button>
              </Form>
            </WindowFrame>
          </Col>
        </Row>
      </Container>
      <div className="taskbar fixed-bottom d-flex align-items-center">
        <button className="start-button px-3">start</button>
        <div className="ms-auto pe-3 text-white small fw-bold" style={{ fontStyle: 'italic' }}>
          Print("Hello World!") Is not real coding
        </div>
      </div>
    </div>
  );
}

export default App;