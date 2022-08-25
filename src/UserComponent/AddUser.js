import React, { Component } from 'react'
import LoginService from '../Services/LoginService';

class AddUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userid: '',
            email: '',
            password: '',
            role:''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
   
    } 

    componentDidMount(){

      
        if(this.state.id === '_add'){
            return
        }else{
          LoginService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({userId: user.userId,
                    email: user.email,
                    password : user.password,
                    role : user.role
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {userId: this.state.userid, email: this.state.email, password: this.state.password,role:this.state.role};
        console.log('users => ' + JSON.stringify(user));

        
        if(this.state.id === '_add'){
LoginService.addUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            LoginService.saveOrUpdateUser(user, this.state.id).then( _res => {
                this.props.history.push('/users');
            });
        }
    }

    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeRoleHandler= (event) => {
        this.setState({role: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>User Id: </label>
                                            <input placeholder="User Id" name="userId" className="form-control" 
                                                value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password"type="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="Role" name="role" className="form-control" 
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>

                                        <button  className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddUser