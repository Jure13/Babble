import * as React from 'react';
import styles from './header.module.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

export interface HeaderProps {
}

export interface HeaderState {
    isSticky: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isSticky: false,
        };
    }

    componentDidMount() {

        const stickyElm = document.querySelector('#navigation');

        const observer = new IntersectionObserver(            
            ([e]) => this.setState({ isSticky: !this.state.isSticky }),
            { threshold: [1] }
        );

        if (stickyElm) {
            observer.observe(stickyElm)
        }

    }

    render() {

        return (
            <>
                <header className={styles.mainHeader}>
                    <div className={styles.innerHeaderContainer}>
                        <div className={styles.overlay}>
                            <h2 className={styles.headerTitle}>Y talk serious? Let's <i><a className={styles.babbleNaslov}>Babble</a></i>!</h2>
                        </div>
                    </div>
                </header>
                <nav id="navigation" className={`${styles.primaryNavigation} ${!this.state.isSticky ? "isSticky" : ""}` }>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/body`}>Babble!</Link></li>
                        <li><Link to={`/contact`}>Help</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;

