import React from 'react'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    setLogout = () => {
        this.props.login("nope")
    }
    render() {
        return(
            <div className="menu-bar columns">
                <div className="columns-6">
                    <h3 className="front-text">Facebook helps you connect and share with the<br></br>people in your life.</h3>
                </div>
                <div className="columns-6">
                    { this.props.button === true ?
                    <button onClick={this.setLogout}>Logout</button>
                    : ""
                }
                </div>
            </div>
        )
    }
}

export default Menu