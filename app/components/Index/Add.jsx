import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

var curArt;

class Buttons extends React.Component{
       
    constructor(props) {
                   super(props); 
                  
                   this.deleteArticle = this.deleteArticle.bind(this); 
               };

     deleteArticle(){ 
             removeArticleFromBase(this.props.curArt);  
           }

     render(){ 
        if (CurrentUser.id == this.props.curArt.AuthorId) {
           return (
            <div>
              <Link to={"/"}> <button className=" btn offset-lg-9 col-lg-2 " onClick={this.deleteArticle}>Delete</button> </Link>  
            </div>
          );
         }
        else{
           return  (null);
            }
        }
  }

class Add extends React.Component{
  
  render(){
 
          const id = this.props.data;
     
    	  	this.artBase = getArtBase();
    	  	 
    	  	this.artBase.arts.forEach(function(element){
    	  	 	if(id == element.id){
    	  	 		curArt = element;
    	  	 	}
    	  	});

           if(curArt == undefined){
            return (null);
           }
 
  	return(
      <div className="row add">
            <div className="row addHeader">
              <img className="col-lg-3 col-sm-5 " src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/55e7171d90336027d77078f6/images/586e4a89c697915403a0a496/file-5jXnnqjemZ.jpg" alt="add"/>
              <div className="addBody col">
               <Link to={`/${curArt.id}`}> <div><h6 className="addTitle row">{curArt.Title}</h6></div></Link>
                <div className="addAuthor row"><span className="font-weight-bold">Author Name:</span>{curArt.Author} </div>
                <div className="addDate row"><span className="font-weight-bold">Date:</span> {curArt.Date} </div>
 
              <div className="row addDescription row">{curArt.Desc}</div> 
              <Buttons curArt={curArt} onClick={Buttons.click}/>  
            </div>
        </div>
      </div>);
    }
  } 


module.exports = Add;
