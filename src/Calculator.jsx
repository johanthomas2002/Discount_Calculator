import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './styleHead.css'

function Calculator() {

  const[percentage,setPercentage]=useState(0);
  const[amount,setAmount]=useState(0);  

  const[Price,setPrice]=useState(0);

  // function to calculate new price with discount included
  const calculate = (e) => {
    const disPrice = (percentage/100)*amount;
    const newPrice = amount-disPrice;
    setPrice(newPrice);
  }

  const reset = (e) => {
    setAmount(0);
    setPercentage(0);
    setPrice(0);
  }

  return (
    <>
      <Row className="mt-5 px-4">
        <Col xs={0} md={1} lg={1}></Col> 

        <Col xs={12} md={5} className="d-flex justify-content-center">
          <img 
            src="https://www.srs.sg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalculator.577db6f2.gif&w=640&q=75" 
            alt="gif" 
            style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }} 
          />
        </Col>

        <Col xs={12} md={6} lg={5} className="d-flex justify-content-center mt-4 mt-md-0">
          <div className="container d-flex flex-column align-items-center text-center w-100 p-3 main">
            <h3 className="text-center text-danger">Calculations</h3>

            <div className="d-flex align-items-center flex-column w-100">
              <FloatingLabel controlId="floatingPercentage" label="Enter Discount Value (%)" className="mt-4 w-75">
                <Form.Control 
                  type="number" 
                  placeholder="Enter Discount Value (%)" 
                  className="input" 
                  value={percentage || ""} 
                  onChange={(e) => setPercentage(e.target.value)} 
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPrice" label="Enter Amount" className="mt-4 w-75">
                <Form.Control 
                  type="number" 
                  placeholder="Enter Amount" 
                  className="input" 
                  value={amount || ""} 
                  onChange={(e) => setAmount(e.target.value)} 
                />
              </FloatingLabel>

              <div className="d-flex justify-content-around w-100 mt-4">
                <Button variant="warning" className="fs-5" onClick={(e) => calculate(e)}>Calculate</Button>
                <Button variant="danger" className="fs-5" onClick={(e) => reset(e)}>Reset</Button>
              </div>
            </div>

            <div className="result text-center mt-4 text-warning">
              <p className="fs-4">Your new Price is</p>
              <h2>&#8377;{Price}</h2>
            </div>
          </div>
        </Col>

        <Col xs={0} md={1} lg={1}></Col>
      </Row>


    </>
  )
}

export default Calculator
