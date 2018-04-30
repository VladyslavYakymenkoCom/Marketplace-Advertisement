import React from 'react'; 
import {Link, BrowserRouter}  from 'react-router-dom';

var curArt;

class AddView extends React.Component{

		 constructor(props) {
               super(props); 
               const prodId = this.props.match.params.id;
 
			  	var artBase = getArtBase();
			  	  
			  	 artBase.arts.forEach(function(element){
			  	 	if(prodId == element.id){
			  	 		curArt = element;
			  	 	}
			  	 })
			  	 
               this.deleteArticle = this.deleteArticle.bind(this); 
           };
 
	  	 deleteArticle(){
	  	 	 removeArticleFromBase(curArt)
	  	 }

	  render(){ 
	  	 if (CurrentUser.id == curArt.AuthorId) {
	  	 	return(<div className="addView " >
				    	    <h1 className="row display-4 d-flex justify-content-center">{curArt.Title}</h1>
				    	    <div className="addViewBody row">{curArt.Desc}</div>
				    	    <div className="row">
				    	    	<div className="col-lg-6 row">
				    	    		<div className="col-lg-2 font-weight-bold">Author:</div>
				    	    		<div className=" offset-lg-1 col-lg-2">{curArt.Author}</div>
				    	    	</div>
				    	    	<div className="col-lg-6 row">
				    	    		<div className="offset-lg-7 col-lg-2 font-weight-bold">Date:</div>
				    	    		<div className="offset-lg-1 col-lg-2">{curArt.Date}</div> 
				    	    	</div>
				    	    </div> 
				    	    <div className="row d-flex justify-content-center">
				    	    	<Link to={"/"}> <button className="btn  " onClick={this.deleteArticle}>Delete</button></Link>
				    	    	 
				    	    </div> 
					</div>);
		    }
    	else{ 
		  	return (  
		  	<div className="addView row d-flex justify-content-center" >
		    	    <h1 className="row display-4">{curArt.Title}</h1>
		    	    <div className="addViewBody row">{curArt.Desc}</div>
		    	    <div className="row">
		    	    	<div className="col-lg-6">
		    	    		<div className="col-lg-2 font-weight-bold">Author:</div>
		    	    		<div className=" offset-lg-1 col-lg-2">{curArt.Author}</div>
		    	    	</div>
		    	    	<div className="col-lg-6">
		    	    		<div className="offset-lg-5 col-lg-2 font-weight-bold">Date:</div>
		    	    		<div className="offset-lg-1 col-lg-2">{curArt.Date}</div> 
		    	    	</div>
		    	    </div>  
			</div>);
		  }
   	}

}

module.exports = AddView;
