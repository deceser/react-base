import React from "react";
import ButtonUi from "../../UI/ButtonUi";

import styles from "./index.module.scss";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div className={styles.content}>{props.post.content}</div>
      </div>
      <div>
        <ButtonUi onClick={() => props.remove(props.post)}>Delete</ButtonUi>
      </div>
    </div>
  );
};

export default Post;
