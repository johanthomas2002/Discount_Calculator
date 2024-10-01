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
      <Row className='mt-5 p-4=5'>
        <Col></Col>

        <Col lg={5}>
            <img src="https://www.srs.sg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalculator.577db6f2.gif&w=640&q=75" alt="gif"
            style={{borderRadius:'10px'}} />
        </Col>

        <Col lg={6}>
            <div className="container d-flex flex-column w-75 p-4 main">

              <h3 className='text-center text-danger'>Calculations</h3>

              <div className='d-flex align-items-center flex-column'>

              <FloatingLabel controlId="floatingPercentage" label="Enter Discount Value (%)" className='mt-4'>
                <Form.Control type="Number" placeholder="Enter Discount Value (%)"  className='input' value={percentage || ""} onChange={(e) => setPercentage(e.target.value)}/>
              </FloatingLabel>

              <FloatingLabel controlId="floatingPrice" label="Enter Amount" className='mt-4'>
                <Form.Control type="number" placeholder="Enter Amount" className='input' value={amount || ""}  onChange={(e) => setAmount(e.target.value)}/>
              </FloatingLabel>

              <div>
                <Button variant="warning" className='btn mt-5 fs-5 me-5' onClick={e => calculate(e)}>Calculate</Button>
                <Button variant="danger" className='btn mt-5 fs-5' onClick={e => reset(e)}>Reset</Button>
              </div>

              </div>

              <div className="result text-center mt-5 text-warning">
              <p className='fs-4'>Your new Price is</p>
              <h2>&#8377;{Price}</h2>
              </div>

          </div>
              
        </Col>

        <Col></Col>
      </Row>
    </>
  )
}

export default Calculator
