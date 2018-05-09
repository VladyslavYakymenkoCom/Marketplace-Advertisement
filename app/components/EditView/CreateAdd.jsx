import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
var artIdRoute = 0; 
var artBase = [];
 
class  CreateAds extends React.Component{

  constructor(props) {
      super(props);   
      this.submit = this.submit.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);

      artBase = getArtBase();
      artIdRoute =  (artBase.arts[artBase.arts.length-1].id);
  };
 
  submit(){ 

        if($("#title").val().length==0||$("#desc").val().length==0)
        {
          alert("Fields is empty");
          return;
        }

         var article = {
            id: artIdRoute+1,
            Title:$("#title").val(),
            Author: CurrentUser.login,
            AuthorId : CurrentUser.id,
            Desc:$("#desc").val(),
            Date: (new Date()).toLocaleDateString()
            }; 
  
          artBase.arts.push(article);
  
          setArtBase(artBase); 
          
  };

   handleSubmit(e) {
        e.preventDefault(); 
      }
     
  render(){ 
 
      return( 
        <section className="col-lg-8 offset-lg-2 createAddSection">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="form-group ">
              <label htmlFor="title" className="row">Title:</label>
                <input type="text" required placeholder="Enter title please" className="form-control row" id="title"/>
              </div>
              <div className ="form-group" >
                <label htmlFor="desc" className="row">Description:</label>
                <textarea className="form-control row" required rows="5" id="desc"></textarea>
              </div> 
            <Link to={`/${artIdRoute+1}`}><button className="btn-lg btn-default row" onClick={this.submit}>Create</button></Link>
          </form>
        </section>); 
  }
}

module.exports = CreateAds;
