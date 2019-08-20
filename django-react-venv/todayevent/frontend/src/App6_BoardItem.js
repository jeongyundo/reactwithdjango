import React, { Component } from 'react';

class BoardRow extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.id);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    
    
    render() {
        return(
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.writer}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.name}</a></td>
                <td>{this.props.row.image}</td>
                <td>{this.props.row.content}</td>
                <td>{this.props.row.date}</td>
                <td>{this.props.row.created}</td>
                <td>{this.props.row.website}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        );
    }
}

export default BoardRow;

