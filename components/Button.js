import React from 'react'
import styles from './button.module.css'
function Button(props) {
    return (
        
        <div onClick={props.action} className={styles.buttonBox}>
          <button  className={styles.btn}>{props.children}</button>
          <div  className={styles.border} ></div>
          <div  className={styles.border}></div>
        </div>
      
      
     
    )
}

export default Button
