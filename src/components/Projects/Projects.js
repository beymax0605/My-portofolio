import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import aywellness from "../../Assets/Projects/aywellness.png";
import entefy from "../../Assets/Projects/entefy.png";
import growhealthy from "../../Assets/Projects/growhealthy.png";
import Serveedo from "../../Assets/Projects/Serveedo.png";
import zyda from "../../Assets/Projects/zyda.png";
import BigCryptoGame from "../../Assets/Projects/BigCryptoGame.png";
import flyjetblak from "../../Assets/Projects/flyjetblak.png";
import marriottbonvo from "../../Assets/Projects/marriottbonvo.png";
import nomadtraveltools from "../../Assets/Projects/nomadtraveltools.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aywellness}
              isBlog={false}
              title="aywellness"
              description="AYR is a cannabis products-based company that serves its customers best by learning who they are, why they use cannabis, and what they can do to elevate their experience through its products and services."
              Link = "https://ayrwellness.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entefy}
              isBlog={false}
              title="entefy"
              description="Entefy is an AI-enabled, multi-format, multi-channel communication platform which integrates with all major forms of digital communication and seamlessly syncs them across all your digital devices."
              Link = "http://entefy.com"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={growhealthy}
              isBlog={false}
              title="growhealthy"
              description="GrowHealthy produces Florida's natural medical cannabis products to help patients improve their quality of life. I led and participated with the front- and back-end teams in building and deploying a new platform that integrates systems and APIs."
              Link = "https://growhealthy.com/"
              />
          </Col>       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Serveedo}
              isBlog={false}
              title="Serveedo"
              description="Serveedo offers mobility operations at scale. It reduces the cost of maintenance operations while optimizing fleet lifespan and availability. It also supports outsourcing maintenance to a third party so businesses can focus on expansion. I worked on the project as a back-end engineer to ship specific features."
              Link = "https://serveedo.com/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zyda}
              isBlog={false}
              title="zyda"
              description="Zyda is a leading digital ordering and customer engagement platform for hospitality. The platform enables restaurants and cafes to sell and deliver their services and products online. I managed four development teams, including checkout, product catalogs, marketing integrations, and the new storefront"
              Link = "https://zyda.com/"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BigCryptoGame}
              isBlog={false}
              title="BigCryptoGame"
              description="The First Play-To-Earn NFT Game with an Omni-Balanced Oracle System
              Swell Network
              Swell | The next generation of ETH liquid staking
              Swell Network is a permissionless, non-custodial, and liquid ETH staking protocol built for stakers, node operators, and the Ethereum ecosystem"
              Link = "https://bigcrypto.game/"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flyjetblak}
              isBlog={false}
              title="flyjetblak"
              description="   CMS Development Deliverables
              Website
              Website Builders & CMS Platforms
              Squarespace
              Project description
              The loading speed of the entire website was improved."
              Link = "https://www.flyjetblak.com/"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marriottbonvo}
              isBlog={false}
              title="marriottbonvo"
              description="
              1. Implemented the UI for the Marriott Traveler module, pixel perfect from Zeplin mockups, with adjustments for mobile.
              2. Created an AWS Lambda function to serve as the client that pulls data from Google Places API and the Marriott Moments data store.  
              3. Implemented secure AJAX calls to the AWS Lambda function to update the UI.
              4. Integrated MixPanel into the UI source code."
              Link = "https://moments.marriottbonvoy.com/"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomadtraveltools}
              isBlog={false}
              title="nomadtraveltools"
              description="I created store object on back-end and initialized the global store with this store information on front-end and this solved the challenge in SSR with Redux.
              I used hydrate router instead of static router and rendered the React application on server side to resolve the challenge in SSR with React Router.
              To figure out the challenge in Material UI theming, I rendered the React application on server side , grabbed the stylesheets required for material theming and component styling and finally prepended those styles to the rendered HTML file.
              Using both Firebase hosting and functions, I deployed the application which is server-side rendered successfully. Here the trick was to redirect hosting to functions, so that it can be served via functions."
              Link = "https://nomadtraveltools.com/"
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
