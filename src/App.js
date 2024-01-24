import "./App.scss";
import MenuTop from "./components/Navbar.js";
import Image from "react-bootstrap/Image";
import Card from "./components/Card.js";
import CardIcon from "./components/CardIcon.js";
import MenuBottom from "./components/Footer.js";

import { Icon } from "@ricons/utils";
import {
  PolylineOutlined,
  AddModeratorOutlined,
  AutorenewRound,
  LockRound,
  SupportAgentFilled,
  MoreTimeOutlined
} from "@ricons/material";


function App() {
  return (
    <div className="App">
      <MenuTop/>
      <Image src="//via.placeholder.com/2560x600" fluid />;
      <div className="container text-center">
        <div className="row justify-content-center top-cards text-center">
          <div className="col-4">
            <Card
              title="Lorem Ipsum"
              text="dolor si amet"
              buttonText="view more"
              buttonColor="primary"
            />
          </div>
          <div className="col-4">
            <Card
              title="Lorem Ipsum"
              text="dolor si amet"
              buttonText="view more"
              buttonColor="warning"
            />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-4 d-align-items-stretch">
            <img src="/rocket.png" className="card-img-top" alt="..." />
          </div>
          <div className="col-4 d-align-items-stretch d-flex text-lg-start">
            <p className="my-auto">
              <h1>Our missions</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur eligendi nesciunt unde. Alias, amet animi eveniet
              impedit non quasi quod? Architecto facere minus numquam officiis
              quaerat reiciendis repudiandae ullam veritatis voluptate
              voluptates. Ab, alias, aperiam, architecto beatae commodi facilis
              harum in labore mollitia nisi obcaecati quasi ratione ullam
              voluptatem voluptates.
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-4 d-align-items-stretch d-flex text-lg-start">
            <p className="my-auto">
              <h1>Newest technology</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur eligendi nesciunt unde. Alias, amet animi eveniet
              impedit non quasi quod? Architecto facere minus numquam officiis
              quaerat reiciendis repudiandae ullam veritatis voluptate
              voluptates. Ab, alias, aperiam, architecto beatae commodi facilis
              harum in labore mollitia nisi obcaecati quasi ratione ullam
              voluptatem voluptates.
            </p>
          </div>
          <div className="col-4 d-align-items-stretch ">
            <img src="/rocket.png" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="text-center">
        <h1>Why QuantumSky</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <CardIcon
            title="Automatic Deployment"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <MoreTimeOutlined />
            </Icon>
          </CardIcon>
        </div>
        <div className="col-4">
          <CardIcon
            title="24/7 Support"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <SupportAgentFilled />
            </Icon>
          </CardIcon>
        </div>
        <div className="col-4">
          <CardIcon
            title="24/7 Support"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <LockRound />
            </Icon>
          </CardIcon>
        </div>
        <div className="col-4">
          <CardIcon
            title="24/7 Support"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <AutorenewRound />
            </Icon>
          </CardIcon>
        </div>
        <div className="col-4">
          <CardIcon
            title="24/7 Support"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <AddModeratorOutlined />
            </Icon>
          </CardIcon>
        </div>
        <div className="col-4">
          <CardIcon
            title="24/7 Support"
            text="Lorem ipsum dolor sit amet, sonsectetur"
          >
            <Icon>
              <PolylineOutlined />
            </Icon>
          </CardIcon>
          {/* <MenuBottom/> */}
        </div>
      </div>
      </div>

    </div>
  );
}
export default App;
