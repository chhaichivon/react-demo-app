import React from 'react';

class ProductCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const product = {...this.props.product}
        const imageUrl = product.productImages !== undefined ? product.productImages[0].imageUrl : "https://aadibio.com/wp-content/uploads/2016/07/default_image_01.png";

        return <div className="col s12 m3">
            <div className="card">
                <div className="card-image">
                    <img src={imageUrl} />
                </div>
                <div className="card-content">
                    <span className="card-title">{product.name}</span>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.discount}</p>
                </div>
                <div className="card-action">
                    <div className="valign-wrapper">
                        <div className="valign">
                            <a className="waves-effect waves-light btn-small"> Remove </a>
                            <span> 1 </span>
                            <a className="waves-effect waves-light btn-small"> Add </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default ProductCard;