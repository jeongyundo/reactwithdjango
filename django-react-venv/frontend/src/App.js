//frontend/src/app.js
import React, { Component } from 'react';

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const url = 'http://localhost:8000/api/';
            const res = await fetch(url);
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log("error",e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;