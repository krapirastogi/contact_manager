import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import {Consumer} from '../../context';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  // static PropTypes={
    
  //     name:PropTypes.string.isRequired,
  //     email:PropTypes.string.isRequired,
  //     phone:PropTypes.string.isRequired
    
  // }
  state={
    ShowContactInfo:true
  };
  onShowClick=(e)=> {
     this.setState({
     ShowContactInfo:!this.state.ShowContactInfo
     });
  };
   onDeleteClick=async(id,dispatch)=>{
     try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type:'DELETE_CONTACT',payload:id});}
    catch(e){
      dispatch({type:'DELETE_CONTACT',payload:id});
    }
    
    
  };
  render() {
    const {id,name,phone,email}=this.props.contact;
    const{ShowContactInfo}=this.state;

    return (
      <Consumer>
        {value=>{
          const {dispatch}=value;
        return(
<div className="card card-body mb-3">
      <h4>{name}{' '}<i onClick={()=> this.setState({
     ShowContactInfo:!this.state.ShowContactInfo
     })
     } className="fas fa-sort-down"
     style={{cursor:'pointer'}}>
        </i>
        <i className="fas fas-times" style={{cursor:'pointer',
      float:'right',color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}>
        </i>
       <Link to={`contact/edit/${id}`}><i className="fas fa-pencil-alt"
       style={{
         cursor:'pointer',
         float:'right',
         color:'black',
         marginRight:'1rem'
       }}></i>
         </Link>
        </h4>
        {ShowContactInfo?(<ul className="list-group">
        <li className="list-group-item">Email:{email}</li>
        <li className="list-group-item">Phone:{ phone } </li>
      </ul>):null}
      
      </div>
        )
        }}
      </Consumer>
      
    );
  }
};
Contact.PropTypes={
contact:PropTypes.object.isRequired 

};
export default Contact;