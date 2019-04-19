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
            skillCount: 0,
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);

        this.onChangeSkill = this.onChangeSkill.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeSkill(e) {
        var isChecked = e.target.checked;
        var array = [...this.state.skill]; // make a separate copy of the array

        // if checkbox is unchecked just remove that skill from array
        var index = array.indexOf(e.target.name)
        if (index !== -1 && !isChecked) {
            array.splice(index, 1);
            this.setState({ skill: array, skillCount: this.state.skillCount - 1 });
        }

        // if checkbox is checked just add that skill in array
        if (isChecked) {
            var newArr = array.concat(e.target.name);
            this.setState({ skill: newArr, skillCount: this.state.skillCount + 1 });
        }

    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            skill: this.state.skill,
            password: this.state.password,
        };
        window.localStorage.setItem('userInfo', JSON.stringify(newUser));

    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create Your Profile</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            className="col-sm-4 form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="col-sm-4 form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input
                            type="number"
                            className="col-sm-4 form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ marginRight: "8px" }}>Gender: </label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="male"
                                value="Male"
                                checked={this.state.gender === 'Male'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="genderOptions"
                                id="female"
                                value="female"
                                checked={this.state.gender === 'Female'}
                                onChange={this.onChangeGender}
                            />
                            <label className="form-check-label">Female</label>
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Select any 5 skills from options given below: </label>
                        <div class="checkbox">
                            <label><input type="checkbox" name={`JAVA`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />JAVA</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" name={`NODEJS`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />NODEJS</label>
                        </div>
                        <div class="checkbox disabled">
                            <label><input type="checkbox" name={`REACT`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />REACT</label>
                        </div>
                        <div class="checkbox disabled">
                            <label><input type="checkbox" name={`REDUX`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />REDUX</label>
                        </div>
                        <div class="checkbox disabled">
                            <label><input type="checkbox" name={`ML`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />ML</label>
                        </div>
                        <div class="checkbox disabled">
                            <label><input type="checkbox" name={`NLP`} onChange={this.onChangeSkill} disabled={this.state.skillCount == 5} />NLP</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="col-sm-4 form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Profile" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}