import React, { Component } from "react";
import axios from "../../../axios";
import { Route } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {

    state = {
        posts: []
    }

    
    postSelectedHandler = ( id ) => {
        this.props.history.push({pathname: "/posts/" + id});
    }

    componentDidMount () {
        console.log(this.props);
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Mark"
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            });
    }

render () {
    let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
    if (!this.state.error) {
        posts = this.state.posts.map(post => {
        return (
        <Post 
        key={post.id} 
        title={post.title} 
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
        />
        // <Link to={"/" + post.id}>
        // </Link>
        )
        });
    
    }
    return (
        <div>
    <section className="Posts">
        {posts}
    </section>
    <Route path="/posts/:id" exact component={FullPost} />
        </div>
    )
}
}

export default Posts