import React from 'react';
import CreateAddSection from './CreateAddSection.jsx';
import SignIn from './SignIn.jsx';
import AddsList from './AddsList.jsx';
import AccountInfo from './AccountInfo.jsx';  
import CreateAdd from './CreateAdd.jsx'

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
			        <CreateAddSection></CreateAddSection>
			    </div>);
 		} 
  } 
}

module.exports = Index;
