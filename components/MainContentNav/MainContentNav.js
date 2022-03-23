import React from 'react'
import styles from './MainContentNav.module.css'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import {menuItems} from './NavData'
import SmallLayoutNav from './SmallLayoutNav'
function MainContentNav({ACTIONS, state, dispatch}) {
    const { width } = useWindowDimensions();
   

    const listItems = menuItems.map((e) => {
    
        return <li
        key={e.classChecker}
        className={
          styles[state.contentType == `${e.classChecker}` ? "active" : "notActive"]
        }
        onClick={() => dispatch({ type: ACTIONS[e.action] })}
      >
        {e.itemName}
      </li>
    })

    return (
        <div className={styles.navWrapper}>
            {width > 900 ? 
             <ul className={styles.nav}>
                 {listItems}
           </ul> : 
           <SmallLayoutNav ACTIONS={ACTIONS} state={state} dispatch={dispatch}/>}
        </div>
    )
}

export default MainContentNav

