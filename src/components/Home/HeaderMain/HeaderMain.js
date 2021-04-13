import React from "react";
import { Button } from "react-bootstrap";

const HeaderMain = () => {
  return (
    <div className="">
      <main style={{height: '500px'}} className="row d-flex align-items-center">
        <div className="col-md-4 col-sm-6 offset-md-1 ">
            <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis veniam molestias eum deserunt labore unde.</p>
            <Button variant="primary">GET APPOINMENT</Button>
        </div>
        <div className="col-md-6 col-sm-6 offset-md-1">
          <img src="./images/chair.png" alt="" className="img-fluid w-75" />
        </div>
      </main>
    </div>
  );
};

export default HeaderMain;
