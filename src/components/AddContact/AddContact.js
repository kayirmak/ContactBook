import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        lastName: '',
        phoneNumber: ''
    }


    handleChangeName = (e) => {
        const name = e.target.value;
        this.setState({name});
    }

    handleChangeLastName = (e) => {
        const lastName = e.target.value;
        this.setState({lastName});
    }

    handleChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        this.setState({phoneNumber});
    }

    handleAdd = () => {
        this.props.onAdd(this.state);
        this.setState({name: ''});
        this.setState({lastName: ''});
        this.setState({phoneNumber: ''});
    }

    render() {
        return (
            <div className="add-contact">
                <label>Name</label>
                <input value={this.state.name} onChange={this.handleChangeName} />
                <label>Last Name</label>
                <input value={this.state.lastName} onChange={this.handleChangeLastName}/>
                <label>Phone Number</label>
                <input value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber}/>
                <button className="add" onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default AddContact;
