import React, { Component } from 'react';

import { Route } from "react-router-dom";

import Posts from "./Posts/Posts"
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Posts</a></li>
                        </ul>
                    </nav>
                </header>
            <Route path="/" render={() => <h1>Home</h1>}/>
            </div>
        );
    }
}

export default Blog; 