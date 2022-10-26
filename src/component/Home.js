import React, {Component} from "react";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    render() {

        for (let i = 0; i < 10; i++) {
            this.state.users.push(
                {
                    "id": i,
                    "name": "ABC",
                    "dob": "12-12-2020",
                    "gender": "Male"
                }
            )
        }


        return (
            <div className="row">
                <div className="col s12 m12 l6 offset-l2 center">
                    <input type="text" id="search" placeholder="Type to search..."/>
                    <table cellPadding="1" cellSpacing="1" className="table table-hover" id="myTable">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users && this.state.users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className="col-md-12 center text-center">
                        <ul className="pagination">
                            <li className="disabled">
                                <a href="#!">
                                    <i className="material-icons">chevron_left</i>
                                </a>
                            </li>
                            <li className="active"><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect">
                                <a href="#!">
                                    <i className="material-icons">chevron_right</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;