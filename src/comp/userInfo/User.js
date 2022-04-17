import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Header from '../header'


export default function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeMarkerPosition =(e)=>{
    this.setState({
    ...this.state,
      details:{
        ...this.state.details,
        lat:e.lat,
        lng:e.lng
      }
    })
  }
  
  const mapStyles = {
    width: '20%',
    height: '20%'
  };
  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>City</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyB44XRaBVsN2uuXaRI4sNXVulm8b5cF1EE"
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            height: '400px',
            width: '400px'}}
          center={{lat:12.9716, lng: 77.5946}}
          zoom={8}
        >
        </GoogleMap>
      </LoadScript>


        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Save address
        </Button>
      </Form>
    </div>
  );
}
