import React from "react";

import LayoutPage from "../layout";
import Home from './../../component/Home';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <LayoutPage>
                <Home />
            </LayoutPage>
        )
    }
}
export default HomePage;