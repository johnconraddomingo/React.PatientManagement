import React, { Component } from 'react';
import '../styles/toolbar.css'; 
import Link from '../../node_modules/react-router-dom/Link';
export class Toolbar extends Component {
 render() {
     return (
         <div className="toolbar">
             {this.props.buttons.map(function (item, i) {
                 return <Link key={i} className={item.className} to={item.link}>{item.text}</Link>;
          })}
        </div>
     );
 }    
}  