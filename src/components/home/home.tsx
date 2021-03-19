import * as React from 'react';
import styles from './home.module.css';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

    }
    render() { 
        return ( <>    
        <header className={styles.mainContainer}>  
             <div className={styles.innerContainer1}>
                <div className={styles.overlay1}>
                    <h2 className={styles.headerTitle}>Welcome to <i><a className={styles.babbleNaslov}>Babble</a></i>!</h2>
                </div>
            </div>
            <div className={styles.innerContainer2}>
                <div className={styles.overlay2}>
                    <h2 className={styles.middleTitle}>Connect, talk & enjoy!</h2>
                </div>
            </div>
            <div className={styles.innerContainer3}>
                <div className={styles.overlay3}>
                    <h2 className={styles.bottomTitle}>Follow us on other social media platforms:</h2>
                </div>
            </div>
            <div className={styles.innerContainer4}>
                <div className={styles.overlay4}>
                    <ul className={styles.socialMediaList}>
                        <li>
                        <a
                        className={styles.socialMediaLinks}
                        href="https://www.facebook.com/"
                        target="_blank"
                        >
                            <i>FB</i>
                        </a>
                        </li>
                        <li>
                        <a
                        className={styles.socialMediaLinks}
                        href="https://www.instagram.com/"
                        target="_blank"
                        >
                            <i>IG</i>
                        </a>
                        </li>
                        <li>
                        <a
                        className={styles.socialMediaLinks}
                        href="https://www.youtube.com/"
                        target="_blank"
                        >
                            <i>YT</i>
                        </a>
                        </li>
                    </ul>
                    <h2 className={styles.footerTitle}>&copy;<em> 2021, All rights reserved!</em> <br />
                        <strong><a href="https://github.com/Jure13" target="_blank">Jure </a>
                        <a href="https://www.linkedin.com/in/jure-antunovi%C4%87-049758200/" target="_blank">Antunović</a></strong>
                    </h2>                    
                </div>
            </div>    
        </header>                      
        </>  );
    }
}
 
export default Home;