import React, { Component } from 'react';
import axios from 'axios';

import AddContact from './../AddContact/AddContact';
import List from '../List/List';

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.fetchContactBooks();
    }

    fetchContactBooks = async () => {
        const {data} = await axios.get("http://localhost:8000/todos");
        this.setState({data})
    }

    handleAdd = async (contact) =>{
        await axios.post("http://localhost:8000/todos", contact);
        this.fetchContactBooks();
    }
    
    handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/todos/${id}`);
        this.fetchContactBooks();
    }

    handleChange = async () => {
        
    }

    checkPage = (currentItem) => this.props.page === undefined || this.props.page === currentItem;

    render() {
        return (
            <div className="contactBooks">
                {this.checkPage('Add') && <AddContact onAdd={this.handleAdd}/>}
                {this.checkPage('List') && (
                    <List 
                        data={this.state.data}
                        onChange={this.handleChange}
                        onDelete={this.handleDelete}
                    />
                )}
                
            </div>
        );
    }
}

export default Home;
