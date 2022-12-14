import React from 'react';
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

export default class LayoutPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

