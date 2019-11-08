import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import ChildView from "../components/ChildView";
import { cpus } from "os";

class KidPortal extends Component {
  render() {
    return (
      <div>
        <SideNav></SideNav>
        <Container>
          <ChildView></ChildView>
        </Container>
      </div>
    );
  }
}

export default KidPortal;

