import React from 'react';
import {Card, Button, CardDeck, Container, Jumbotron} from 'react-bootstrap';
import 'tachyons';


const Rooms = () => {



  return (
    <div>
    <Jumbotron fluid className='tc' style={{background: 'transparent', height: 'auto'}}>
    <Container>
  <h1>Welcome to our room booking website</h1>
  <p>
    We hope that you will have a good stay and that you pick out a great room
  </p>
  </Container>
  </Jumbotron>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="https://www.hit-booker.com/wp-content/uploads/2019/04/188081805.jpg" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Sarajevo (Alipašino)</Card.Title>
        <Card.Text>
          As you can see here this room is very good looking. You can relax here after you come home after a nice sightseeing tour.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" >Book your room</Button>
        <a className='pa2' style={{float: "right"}}><strong>150 - 200 €</strong></a>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://r-cf.bstatic.com/images/hotel/max1024x768/195/195944942.jpg" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Sarajevo (Marin Dvor)</Card.Title>
        <Card.Text>
          If you like to live close to the downtown area this is the best place for you.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Primary</Button>
          <a className='pa2' style={{float: "right"}}><strong>150 - 200 €</strong></a>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://i1.wp.com/www.metropolanekretnine.ba/fajlovi/2018/07/1-30.jpg?fit=750%2C500&ssl=1" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Sarajevo (Buća Potok)</Card.Title>
        <Card.Text>
          This room is more on the quite side because there are not so much traffic but center of Sarajevo is few minutes away with a car or taxi.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Primary</Button>
          <a className='pa2' style={{float: "right"}}><strong>150 - 200 €</strong></a>
      </Card.Footer>
    </Card>
  </CardDeck>
  <br/>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://live.staticflickr.com/1970/44470588325_f6c11cafc9_b.jpg" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Sarajevo (Otoka)</Card.Title>
      <Card.Text>
        This room is very modern looking where you can chill, sleep and work if you need to. This room would be best for a student.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
        <a className='pa2' style={{float: "right"}}><strong>150 - 200 €</strong></a>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.hpm.ba/wp-content/uploads/WPL/274/thimg_Apartment-Nela-modern-lounge-with-patio-door-opening-onto-the-terrace-and-pool_autox450.jpg" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Luxury two rooms near Dubrovnik</Card.Title>
      <Card.Text>
        The room has two rooms and the living room has a ocean view and because of that it is magnificent to stay here and enjoy the view.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
        <a className='pa2' style={{float: "right"}}><strong>350 - 600 €</strong></a>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://q-fa.bstatic.com/xdata/images/hotel/max1024x768/100530816.jpg?k=e433154b84f91c1265984b987597fee25abd17d1dd85a20ce9e32b52d56d03af&o=" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Sarajevo (Baščaršija)</Card.Title>
      <Card.Text>
        If you want to rent this room then you will be living in the middle of Sarajevo. Near this room you have so much content that you will be happy to come home and relax.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
        <a className='pa2' style={{float: "right"}}><strong>200 - 350 €</strong></a>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  )
}

export default Rooms;
