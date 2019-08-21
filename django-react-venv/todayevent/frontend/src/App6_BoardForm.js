import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
class BoardForm extends Component {
    
    state = {
        writer:'',
        name: '',
        content: '',
        date: '',
        website: '',
        image: ''
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let selectedBoard = nextProps.selectedBoard;
    //     if (!selectedBoard.id) {
    //     this.name.value = "";
    //         this.content.value = "";        
    //         return true;
    //     }
        
    //     this.name.value = selectedBoard.name;
    //     this.content.value = selectedBoard.content;        
    //     return true;
    // }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            writer: this.state.writer,
            name: this.state.name,
            content: this.state.content,
            date: this.state.date,
            website: this.state.website,
            image: this.state.image
        }

        console.log("1",item)
        axios.post('http://127.0.0.1:8000/infoapis/', { item },
            {auth: { username: 'admin' ,password: 'admin1234'}})
            .then(
                res => {
                    console.log(item)
                    console.log(res)
                }
            ).catch(
                res => {
                    console.log(item)
                    console.log(res)
                }
            )
        // let selectedBoard = this.props.selectedBoard;
        // let data = {
        //     name: this.name.value,
        //     content: this.content.value
        // }
        // if (selectedBoard.id) {
        //     data.id = selectedBoard.id
        //     data.id = selectedBoard.id
        // }        
        // this.props.onSaveData(data);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="writer" name="writer" onChange={this.handleChange}/>
                <input placeholder="name" name="name" onChange={this.handleChange}/>
                <input placeholder="content" name="content" onChange={this.handleChange}/>
                <input placeholder="date" name="date" onChange={this.handleChange}/>
                <input placeholder="website" name="website" onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;

