import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

class CreateAdd extends React.Component{
 
  render(){ 
  	return (<section className="createSection text-secondary offset-lg-3 col-lg-6 row d-flex justify-content-center">
      <h6 className="createTitle row ">Learn more</h6>
      <div className="createtext row d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam dolor repellat ut harum nihil, officia illum ullam iure quam explicabo rem sapiente ipsam veniam animi magnam possimus ab nulla.</div>
      <div className="createbtn row">
        <Link to="/edit"><button type="button" name="createAd">Create Ad</button></Link>
      </div>
    </section>
	);
}

}

module.exports = CreateAdd;
