import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            age: '',
            gender: '',
            skill: [],
            password: '',
        }

    }
    componentDidMount() {
        var userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
        if (userInfo) {
            this.setState({
                email: userInfo.email,
                name: userInfo.name,
                age: userInfo.age,
                gender: userInfo.gender,
                skill: userInfo.skill,
            })
        }
    }
    renderSkills() {
        return (
            this.state.skill.map((skill) => {
                return (
                    <li class="list-group-item">{skill}</li>
                )
            })
        )
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>View Your Profile</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="col-sm-4 form-control"
                            value={this.state.name}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input
                            type="number"
                            className="col-sm-4 form-control"
                            value={this.state.age}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label >Gender: </label>
                        <input type="text"
                            className="col-sm-4 form-control"
                            value={this.state.gender}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label>Skills </label>
                        <ul class="list-group">
                            {this.renderSkills()}

                        </ul>

                    </div>

                </form>
            </div>
        )
    }
}