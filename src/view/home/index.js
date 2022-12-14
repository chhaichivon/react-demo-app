import React from "react";

import LayoutPage from "../layout";

import CategoryService from "../../service/CategoryService";
import ProductService from "../../service/ProductService";

import ProductCard from './../../component/ProductCard';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            categories: [],
            products:[]
        }
    }

    componentDidMount() {
        console.log("REACT_APP_API_URL : ")
        console.log(process.env.REACT_APP_API_URL)

        CategoryService.findAll().then((res) => {
            console.log(res.data)
            this.setState({categories: res.data.data});
        });

        ProductService.findAll().then((res) => {
            console.log(res.data)
            this.setState({products: res.data.data});
        });

    }

    render() {

        for (let i = 0; i < 12; i++) {
            this.state.users.push(
                {
                    "id": i,
                    "name": "សាឡាត់",
                    "dob": "12-12-2020",
                    "gender": "Male"
                }
            )
        }

        return (
            <LayoutPage>
                <div className="container">
                    <div className="section">
                        <div className="row">
                            {
                                this.state.products != null && this.state.products.length > 0 && this.state.products.map(product => {
                                    return (
                                        <ProductCard key={product.id} product={product} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default HomePage;