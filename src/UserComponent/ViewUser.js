import React, { Component } from 'react'
import LoginService from '../Services/LoginService'

class ViewUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }
       
    /*viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }*/
    componentDidMount(){
        LoginService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User UserId: </label>
                            <div> { this.state.user.userId}</div>
                        </div>
                        <div className = "row">
                            <label> User Email: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> User Password: </label>
                            <div> { this.state.user.password }</div>
                        </div>
                        <div className = "row">
                            <label> User Role: </label>
                            <div> { this.state.user.role }</div>
                          
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default  ViewUser