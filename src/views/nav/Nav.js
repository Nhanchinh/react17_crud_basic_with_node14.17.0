import React from 'react'
import "../nav/Nav.scss"
import {

    NavLink,
    Link
} from "react-router-dom";



class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todo
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/user" activeClassName="active">
                        User
                    </NavLink>


                </div>

            </div>
        )
    }
}
export default Nav