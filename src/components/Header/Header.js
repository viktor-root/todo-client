import React from 'react';
import { Link } from 'react-router';
import './Header.css';
import { Loader } from '../Loader/Loader';

const img_logo = require('./logo.png');
const img_avatar = require('./avatar.png')

export class Header extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {}
    }

    componentDidMount(){
        this.props.loadUser();
    }

    render(){
        if(this.props.pageStatus === "LOADING") {
            return <Loader />
        } else {
            return(
                <div className="wrapper_comp_header">
                    <div className="comp_header_logo">
                        <img src={img_logo} alt="logo"/>
                    </div>
                    <div className="comp_header_list">
                        <ul>
                            <li>
                            <a href="/auth"><i className="fas fa-users"></i></a>
                            </li>
                            <li>
                                <a href="/about"><i className="fas fa-info-circle"></i></a>
                            </li>
                            <li>
                                <a href="/"><i className="fas fa-home"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="comp_header_user_info">
                        <div className="comp_header_user_wrapper">
                            <div className="comp_header_user_logo">
                                <img src={img_avatar} alt="icon"/>
                            </div>
                            <div className="comp_header_user_name">
                                <span>{this.props.user.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="comp_header_user_exit" onClick={e => { localStorage.clear() }}>
                        <a href="/auth"><i className="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
            )
        }
    }
}