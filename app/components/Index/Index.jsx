import React from 'react';
import CreateAdd from './CreateAddSection.jsx';
import SignIn from './SignIn.jsx';
import AddsList from './AddsList.jsx';
import AccountInfo from './AccountInfo.jsx';  

class Index extends React.Component{

  render(){ 
 		if(CurrentUser==undefined){
 			return (
 				<div>
			        <SignIn></SignIn>
			    </div>);
 		}
 		else{
  		 return (<div> 
  		 			<AccountInfo/>
			        <AddsList/> 
			        <CreateAdd></CreateAdd>
			    </div>);
 		} 
  } 
}

module.exports = Index;
