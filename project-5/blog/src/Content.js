import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (

            <div>
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <Posts />

                            {/* Pager */}
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </div>
        )
    }
}
class Posts extends Component {
    render() {
        return (
            <div>
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            Man must explore, and this is exploration at its greatest
              </h2>
                        <h3 className="post-subtitle">
                            Problems look mighty small from 150 miles up
              </h3>
                    </a>
                    <p className="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
                        on September 24, 2018</p>
                </div>
                <hr />

                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            I believe every human has a finite number of heartbeats. I dont intend to waste any of mine.
            </h2>
                    </a>
                    <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
                        on September 18, 2018</p>
                </div>
                <hr />
            </div>
        )
    }
}


export default Content;