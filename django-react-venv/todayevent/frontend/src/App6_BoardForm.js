import React, { Component } from 'react';


class BoardForm extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.id) {
        this.name.value = "";
            this.content.value = "";        
            return true;
        }
        
        this.name.value = selectedBoard.name;
        this.content.value = selectedBoard.content;        
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            name: this.name.value,
            content: this.content.value
        }
        if (selectedBoard.id) {
            data.id = selectedBoard.id
            data.id = selectedBoard.id
        }        
        this.props.onSaveData(data);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" ref={node => this.name = node}/>
                <input placeholder="content" ref={node => this.content = node}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;

