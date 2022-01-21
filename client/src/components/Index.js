import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie';
import  animationData from '../Kyc.json'

const Index = () =>{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    return(
        <Container fluid style={{height: '100vh'}}>
          <Row style={{height: "100%" ,textAlign: "center"}}>
            <Col style={{backgroundImage:`url("https://cdn0.iconfinder.com/data/icons/online-money-service-orchid-volume-1/256/KYC_Know_Your_Customer-512.png")`,backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
            </Col>
            <Col sm={5}>
              <Row style={{height: "60%",paddingTop:"60px"}}>
                <Col>
                <h1><b>KYC Blockchain</b></h1>
                <Lottie
              
              options={defaultOptions}
              height={300}
              width={300}
              />
                </Col>
              </Row>
              
              <Row style={{height: "40%" ,paddingTop:"60px"}}>
                <Col >
                  <h2><Link to="/organization">
                  <Button variant="outline-dark" size= "lg" style={{borderRadius:"10px",backgroundColor:'#242B2E'}}><i style={{color:'white'}}>Organization</i></Button>
                  </Link></h2>
                </Col>
                <Col >
                  <h2><Link to="/customer">
                  <Button variant="outline-dark" size="lg"  style={{borderRadius:"10px",backgroundColor:'#242B2E'}}><i style={{color:'white'}}>Customer</i></Button>
                  </Link></h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
}
export default Index;