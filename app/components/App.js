import React from "react";
import Footer from './Footer'
import Nav from './Nav'



export default React.createClass({
    render() {
        return (
            <div>
                {this.props.children || <Home/>}
                <Nav/>
                <Footer/>
            </div>
        )
    }
})
