import * as React from 'react';
import AddBabble from "../addBabble/addBabble";
import styles from "./body.module.css";
import {MouseEvent  } from "react";

export interface BodyProps {
    
}
 
export interface BodyState {
    brbljaj: Brbljanje[];
    load: boolean;
    error: any;
}
 
interface Brbljanje {
    postId: number;
    id: number;
    name: string;
    username: string;
   /* email: string;*/
    body: string;
}

class Body extends React.Component<BodyProps, BodyState> {
    constructor(props: BodyProps) {
        super(props);
        this.state = {
            brbljaj: [],
            load: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ load: true });
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong ...");
                }
            })
            .then((data) =>
                this.setState({ brbljaj: data.slice(0, 1), load: false })
            )
            .catch((error) => this.setState({ error, load: false }));
    }

    componentDidUpdate(){

    }

     appendComment = (username: string, brbljanje: string): void => {
        this.setState((prevState) => ({
            brbljaj: [
                ...prevState.brbljaj,
                {
                    postId: 0,
                    id: this.state.brbljaj.length + 1,
                    name: username,
                    /*email: email,*/
                    username: username,
                    body: brbljanje,
                },
            ],
        }));
    };

    editComment = (id:number) =>{
        const user :any = document.getElementById("username");
        const brblj :any = document.getElementById("brbljanje");
        this.state.brbljaj.forEach(item =>{
            if(item.id === id)
            {
                console.log( user?.innerHTML);
                item.name = user?.value ; 
                item.body = brblj?.innerHTML;
            }
           
        });
        this.forceUpdate();
        /*this.setState((prevState) => ({
            brbljaj: [
                prevState.brbljaj.map((brbljanje: Brbljanje) => ());
               
            ],
        }));*/

    };
    render() { 
        return ( <>
            <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Babbles:</h1>
            </div>
                <div className={styles.babblesContainer}>
                    {this.state.load
                        ? "Babbles loading..."
                        : this.state.error && !this.state.brbljaj
                            ? "An error occurred during babbles' loading."
                            : this.state.brbljaj.map((brbljanje: Brbljanje) => (
                                <div key={brbljanje.id} className={styles.babbleContainer}>
                                    <div className={styles.babblePersonal}>
                                        <div className={styles.babbleUsername}>
                                            <strong>Username: </strong>
                                            {brbljanje.name}
                                        </div>
                                        <img
                                            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ="
                                            className={styles.babbleImage}
                                            alt={brbljanje.name}
                                        ></img>
                                    </div>
                                    <div className={styles.babbleBody}>{brbljanje.body}</div>
                                    <button onClick={() => this.editComment(brbljanje.id)}>Edit</button>
                                </div>
                            ))}
                </div>
                <AddBabble submitHandler={this.appendComment} />
        </>  );
    }
}
 
export default Body;