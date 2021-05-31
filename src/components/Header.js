import React from 'react';
import logo from '../img/duck.svg'
import '../scss/_header.scss'

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        
        return (
            <header>
                <div className="container">
                <div className="header_content">
                    <div className="logo">
                        <img src={logo} />
                        <h1>Touiteur</h1>
                    </div>
                    <p>Il s'agit d'un monde peuplé de petits canards trop tchoupi.</p>
                </div>
                </div>
            </header>
        )}
}
export default Header;