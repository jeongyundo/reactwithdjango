import React, { Component } from 'react';
import BoardForm from './App6_BoardForm';
import BoardItem from './App6_BoardItem';
import axios from 'axios';

/*
    component files.
*/
class App6 extends Component {

    state = {
        maxNo: 4,
        boards: [],
        selectedBoard:{}
    }

    async componentDidMount() {
        try {
            const res = await axios.get('http://127.0.0.1:8000/infoapis/');
            const boards = await res.json();
            console.log(boards)
            this.setState({
                boards
            });

        } catch (e) {
            console.log(e);
        }
    }
    
    
    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({id: this.state.maxNo, created: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.id === row.id ? {...data }: row),
                selectedBoard: {}
            })            
        }
    }
    
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }
    
    render() {
        console.log(this.state)
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <id width="100">Writer</id>
                        <td width="300">Title</td>
                        <td width="100">Image</td>
                        <td width="100">Content</td>
                        <td width="100">Date</td>
                        <td width="100">Website</td>
                        <td width="100">Created</td>
                    </tr>
                    {
                        boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App6;

