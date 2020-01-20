import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'


const Rooms = () => {


  return (
    <div>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="https://www.hit-booker.com/wp-content/uploads/2019/04/188081805.jpg" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Room one in downtown Sarajevo</Card.Title>
        <Card.Text>
          As you can see here this room is very good looking. You can relax here after you come home after a nice sightseeing tour.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Book your room</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://r-cf.bstatic.com/images/hotel/max1024x768/195/195944942.jpg" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Primary</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://i1.wp.com/www.metropolanekretnine.ba/fajlovi/2018/07/1-30.jpg?fit=750%2C500&ssl=1" height="330px" />
      <Card.Body>
        <Card.Title style={{height: 48}}>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Primary</Button>
      </Card.Footer>
    </Card>
  </CardDeck>
  <br/>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://live.staticflickr.com/1970/44470588325_f6c11cafc9_b.jpg" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Very nice looking room in Sarajevo</Card.Title>
      <Card.Text>
        This room is very modern looking where you can chill, sleep and work if you need to. This room would be best for a student.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.hpm.ba/wp-content/uploads/WPL/274/thimg_Apartment-Nela-modern-lounge-with-patio-door-opening-onto-the-terrace-and-pool_autox450.jpg" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Luxury two bedrooms near Dubrovnik</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://q-fa.bstatic.com/xdata/images/hotel/max1024x768/100530816.jpg?k=e433154b84f91c1265984b987597fee25abd17d1dd85a20ce9e32b52d56d03af&o=" height="330px" />
    <Card.Body>
      <Card.Title style={{height: 48}}>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Primary</Button>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  )
}

export default Rooms;
