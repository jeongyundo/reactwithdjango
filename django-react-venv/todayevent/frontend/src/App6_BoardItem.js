import React, { Component } from 'react';

class BoardRow extends Component {
 
    
    render() {
        return(
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.image}</td>
                <td>{this.props.row.content}</td>
                <td>{this.props.row.date}</td>
                <td>{this.props.row.created}</td>
                <td>{this.props.row.website}</td>
            </tr>
        );
    }
}

export default BoardRow;

