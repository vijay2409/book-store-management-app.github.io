import React, { Component } from 'react'
import LoginService from '../Services/LoginService';

class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userId: '',
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
       LoginService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({userId: user.userId,
                email: user.email,
                password : user.password,
                role : user.role
            }); 
        });
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {userId: this.state.userid, email: this.state.email, password: this.state.password,role:this.state.role};
        console.log('users => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        LoginService.saveOrUpdateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({Email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({Password: event.target.value});
    }
    
    changeRoleHandler= (event) => {
        this.setState({Role: event.target.value});
    }


    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User Id: </label>
                                            <input placeholder="User Id" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="lastName" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="Role" name="role" className="form-control" 
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Saves</button>
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

export default UpdateUser