import React, { FC, FunctionComponent, useState } from "react";
import styles from "./addBabble.module.css";

interface Props {
  submitHandler: (username: string, brbljanje: string) => void;
}

const AddBabble: FunctionComponent<Props> = ({ submitHandler }) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({
    username: "",
    brbljanje: "",
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;
    setInputValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValues({
      username: "",
      brbljanje: "",
    });
    submitHandler(inputValues.username, inputValues.brbljanje);
  };

  return (
    <div className={styles.addBabbleContainer}>
      <h3 className={styles.addBabbleTitle}>Babble something up!</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="username" className={styles.addUsername}>User </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={inputValues.username}
          onChange={changeHandler}
          className={styles.addUsernameFrame}></input>
        <label htmlFor="brbljanje" className={styles.addBrbljanje}> is babbling about... </label>
        <textarea
          id="brbljanje"
          placeholder="...what?"
          value={inputValues.brbljanje}
          onChange={changeHandler}
          className={styles.addBrbljanjeFrame}></textarea>
        <br/>
        <button type="submit" className={styles.addBabbleButton}>
          Babble it, now!
        </button>
      </form>
    </div>
  );
};

export default AddBabble;
