import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
var artIdRoute = 0;

var artBase = getArtBase();

artIdRoute =  ++(artBase.arts[artBase.arts.length-1].id);

class  CreateAds extends React.Component{

  constructor(props) {
      super(props); 
      
      this.submit = this.submit.bind(this); 
  };
 
  submit(){ 

        if($("#title").val().length==0||$("#desc").val().length==0)
        {
          alert("Value is empty");
          return;
        }

         var article = {
            id: artIdRoute,
            Title:$("#title").val(),
            Author: CurrentUser.login,
            AuthorId : CurrentUser.id,
            Desc:$("#desc").val(),
            Date: (new Date()).toLocaleDateString()
            }; 

          artBase.arts.push(article);
          setArtBase(artBase);
          
  };
     
  render(){return( 
    <section className="col-lg-8 offset-lg-2 createAddSection">
      <form method="POST">
        <div className="form-group ">
          <label htmlFor="title" className="row">Title:</label>
            <input type="text" required placeholder="Enter title please" className="form-control row" id="title"/>
          </div>
          <div className ="form-group" >
            <label htmlFor="desc" className="row">Description:</label>
            <textarea className="form-control row" required rows="5" id="desc"></textarea>
          </div>
        <Link to={`/${artIdRoute}`}><button type="submit" onClick={this.submit} className="btn-lg btn-default row">Create</button></Link>
      </form>
    </section>);
  }
}

module.exports = CreateAds;
