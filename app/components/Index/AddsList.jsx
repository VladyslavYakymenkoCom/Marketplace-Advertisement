import React from 'react';
import Add from './Add.jsx';
import {Link, BrowserRouter}  from 'react-router-dom';

class AddsList extends React.Component{
 
  constructor(props) {
               super(props); 
           		this.artBase = JSON.parse(localStorage.getItem("articleBase"));	     
           };
   
	  render(){
	  	return (  <div className="row ads d-flex justify-content-center" >
	      <div > 
		      { 
		      	 getCurrentPagesIds().map(function(item,i){
		      	 	if(item==undefined)
		      	 		return (null);
		      		return <Add key={i} data={item.id}/>
		      	})
		      } 
			   </div>
				<nav aria-label="...">
				  <ul className="pagination pagination-sm justify-content-center">
				  {
				  	this.artBase.arts.map(function(item,i){
				  		if(i%5==0)
				  		return <Link key={i+1} to={"/"}> <li id={i/5+1} onClick={function(e){ 
				  			$(`.active`).removeClass("active");
				  			paginationIndex = i+1;
				  			$(e.target).addClass("active");
				  		} 
				  	} className="page-item page-link"  > {i/5+1} </li></Link>  
				  	}) 
				  }
				  </ul>
				</nav>
		</div>
		);
   	}

}

module.exports = AddsList;
