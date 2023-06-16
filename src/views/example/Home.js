import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    render() {
        return (
            <div>
                hello from Home Component
            </div>
        )
    }
}


export default withRouter(Home)