import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    loginin = () => {
        this.props.login(true)
        this.props.button(true)
    }
    render() {
        return(
            <div className="header">
            <h2 className="facebook-text">facebook</h2>
            <form className="columns">
                <div className="form-group columns-5">
                    <label className="label-header">Email or Phone</label>
                    <input type="text" className="input-form-header"/>
                </div>
                <div className="form-group columns-5">
                    <label className="label-header">Password</label>
                    <input type="password" className="input-form-header"/>
                </div>
                <div className="columns-2">
                    <button type="button" onClick={this.loginin} className="btn-login">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Header