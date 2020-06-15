import React from 'react';
import Link from 'next/link';
import {Navbar, Nav, Form} from 'react-bootstrap';


export default function Navigation() {
    return(
        <div>
            
        <Navbar className="navbar navbar-light" expand="lg" id="navbar">
        <Navbar.Brand className="navbar-brand"><Link href="/"><a><img className="logo" src="/logo.svg"></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="m-auto">
                <Link href='/chances'><a className="nav-link" id="nav-link">Chances</a></Link>
                <Link href='/keys'><a className="nav-link" id="nav-link">13 Keys</a></Link>
                <Link href='/writings'><a className="nav-link" id="nav-link">Writings</a></Link>
                <Link href='/method'><a className="nav-link" id="nav-link">Method</a></Link>
                {/* <NavLink className="nav-link" id="nav-link" activeClassName='is-active' to='/about'>About</NavLink> */}
            </Nav>

            <Form>
                <a id="icon-link" href="https://www.facebook.com/sharer/sharer.php?u=http://www.lichtman2020.com/" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/facebook.svg"/></a>
                <a id="icon-link" href="https://www.twitter.com/lichtman2020" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/twitter.svg"/></a>
                {/* <a id="icon-link" href="https://www.github.com/apologeticaly/lichtman2020" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/github.svg"/></a> */}
                <a id="icon-link" href="https://www.youtube.com/channel/UC8b0wJtvEf_beuc0K0WJ_IQ" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/youtube.svg"/></a>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
        
        // <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        // <a class="navbar-brand"><Link to="/">Navbar</Link></a>
        // <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //     <span class="navbar-toggler-icon"></span>
        // </button>

        // <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul class="navbar-nav m-auto">
        //     <li class="nav-item active">
        //         <a class="nav-link"><Link id="nav-link" to="/">Home</Link></a>
        //     </li>
        //     <li class="nav-item" id="nav-link">
        //         <a class="nav-link"><Link id="nav-link" to="/chances">Chances</Link></a>
        //     </li>
        //     <li class="nav-item" id="nav-link">
        //         <a class="nav-link"><Link id="nav-link" to="/nav">Method</Link></a>
        //     </li>
        //     <li class="nav-item" id="nav-link">
        //         <a class="nav-link" tabindex="-1" aria-disabled="true">About</a>
        //     </li>
        //     </ul> 
        //     <Icon name="medium" size="large"/>
        //     <Icon name="twitter" size="large" id="icon"/>
        //     <Icon name="facebook official" size="large" id="icon"/>
        // </div>
        // </nav>
    );
}