import HomeComp from '../components/HomeComp';
import { Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <main>
      <Row>
        <HomeComp
          imageSrc="https://wallpaperaccess.com/full/568935.jpg"
          altName="palawan-island"
          heading1="Explore"
          heading2="Wonders"
          pageTag="/adventure"
        />
        <HomeComp
          imageSrc="http://img1.wsimg.com/isteam/ip/1428a966-28df-460c-b580-214ec1bb5bd8/632cf9d0-2830-4c3d-94b5-60846e028c1e.jpg"
          altName="hawaiian-food"
          heading1="Delight"
          heading2="In Every Bite"
          pageTag="/restaurant"
        />
        <HomeComp
          imageSrc="https://cdn.suwalls.com/wallpapers/beaches/palawan-island-resort-philippines-28615-1920x1080.jpg"
          altName="hotel-beach"
          heading1="Enjoy"
          heading2="Your Stay"
          pageTag="/hotels"
        />
      </Row>
    </main>
  );
}

export default Home;