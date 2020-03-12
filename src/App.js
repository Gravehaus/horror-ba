import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function App() {
  return (

    <div className="App">
      <header className="App-header">
       </header>
       <body>
       
       <Container>
  <Row>
  <div className="Jumbotron" >
  <Container>
  <h1>PLAYER TWO</h1>

  
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://img.favpng.com/4/19/0/silent-hill-2-pyramid-head-silent-hill-homecoming-heather-mason-james-sunderland-png-favpng-u0VNkwTAruZ6dP5csnucYJ83n.jpg" />
    <Card.Body>
      <Card.Title>James Sunderland</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://img.favpng.com/4/19/0/silent-hill-2-pyramid-head-silent-hill-homecoming-heather-mason-james-sunderland-png-favpng-u0VNkwTAruZ6dP5csnucYJ83n.jpg" />
    <Card.Body>
      <Card.Title>James Sunderland</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
<Card>
    <Card.Img variant="top" src="https://img.favpng.com/4/19/0/silent-hill-2-pyramid-head-silent-hill-homecoming-heather-mason-james-sunderland-png-favpng-u0VNkwTAruZ6dP5csnucYJ83n.jpg" />
    <Card.Body>
      <Card.Title>James Sunderland</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>

</CardDeck>
  </Container>
</div>
  </Row>


  <Row>
  <div className="Jumbotron" >
  <Container>





  </Container>
</div>
  </Row>
</Container>
       </body>
    </div>
  );
}

export default App;
