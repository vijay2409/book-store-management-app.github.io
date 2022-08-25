import React, { Component } from 'react';
import LoginService from '../Services/LoginService';

class ListUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser(id) {
        LoginService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }

    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        LoginService.user().then((res) => {
            this.setState({ users: res.data });

        });
    }
    addUser() {
        this.props.history.push('/add-users/_add');
    }
    render() {
        return (
            <div>
                <h2 className='text-center'><b>User List</b></h2>
                <button type='button' className="btn btn-primary" onClick={this.addUser}> Add User</button>
                <div className="row">
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <button type='button' onClick={() => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} type='button' onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.id)} className="btn btn-info">View </button>


                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}
export default ListUser;
