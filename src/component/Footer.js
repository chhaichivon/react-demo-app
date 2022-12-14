import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer light-blue">
            <div className="container">
                <div className="row">
                    <div className="col l3 s12">
                        <h5 className="white-text">MShop</h5>
                        <ul>
                            <li>
                                <i className="material-icons">add</i>
                                <a className="white-text" href="#!">Facebook</a>
                            </li>
                            <li>
                                <i className="material-icons">add</i>
                                <a className="white-text" href="#!">Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Services</h5>
                        <ul>
                            <li><a className="white-text" href="#!">Contact Us</a></li>
                            <li><a className="white-text" href="#!">About Us</a></li>
                            <li><a className="white-text" href="#!">Shop</a></li>
                            <li><a className="white-text" href="#!">Merchant</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Services</h5>
                        <ul>
                            <li><a className="white-text" href="#!">Contact Us</a></li>
                            <li><a className="white-text" href="#!">About Us</a></li>
                            <li><a className="white-text" href="#!">Shop</a></li>
                            <li><a className="white-text" href="#!">Merchant</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Free Download</h5>
                        <ul>
                            <li><a className="white-text" href="#!">
                                <img src="https://www.khmer24.com/khmer24-crm-80/template/img/appstore.png"></img>
                            </a></li>
                            <li><a className="white-text" href="#!">
                                <img src="https://www.khmer24.com/khmer24-crm-80/template/img/playstore.png"></img>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made by <a className="orange-text text-lighten-3" href="#">https://mshop.com</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;