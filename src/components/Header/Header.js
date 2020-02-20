import React from 'react';
import './Header.css';
import {connect} from 'react-redux';
import {getSession} from '../../redux/reducer'

class Header extends React.Component{
    
    componentDidMount(){
        this.props.getSession()
    }
    
    render(){
        console.log(this.props)
        return(
            <header>
                <h1>WELCOME,</h1>
                {this.props.loading
                ?
                <h1>waiting...</h1>
                :
                <h1>{this.props.user.username}</h1>}
            </header>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    getSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);