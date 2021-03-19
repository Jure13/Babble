import * as React from 'react';
import styles from './contact.module.css';

export interface ContactProps {
    
}
 
export interface ContactState {
    
}
 
class Home extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);

    }
    render() { 
        return ( <>
        <header className={styles.mainContainer}>
        <div className={styles.topContainer}>
                <div className={styles.overlay1}>
                    <h2 className={styles.contact}>Contact us:</h2>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.overlay2}>
                    <a className={styles.email} href="https://www.outlook.com/" target="_blank">jantun00@fesb.hr</a>
                    <h2 className={styles.footerTitle}>&copy;<em> 2021, All rights reserved!</em> <br />
                        <strong><a href="https://github.com/Jure13" target="_blank">Jure </a>
                        <a href="https://www.linkedin.com/in/jure-antunovi%C4%87-049758200/" target="_blank">Antunović</a></strong>
                    </h2>
                </div>
            </div>
        </header>
        </>  )
    }
}
 
export default Home;