import React, {useReducer} from "react";
import styles from "./drawer.module.css";

import MainContent from './MainContent/MainContent';
import Button from './Button'

const ACTIONS = {
    OVERVIEW: 'overview',
    EDUCATION: 'education',
    PROJECTS: 'projects',
    EXPERIENCE: 'experience'
}
function reducer(state, action){
    switch(action.type){
        case ACTIONS.OVERVIEW:
            return {contentType: 'overview'}
        case ACTIONS.EDUCATION:
            return {contentType: 'education'}
        case ACTIONS.PROJECTS:
            return {contentType: 'projects'}
        case ACTIONS.EXPERIENCE:
            return {contentType: 'experience'}
        default:
            return state    
    }

}
export default function Drawer(props) {
    const [state, dispatch] = useReducer(reducer, {contentType: 'overview'})
   

	return (
		<div className={styles[props.drawerOpen]}>
			<div className={styles.elContainer}>
                <MainContent contentType={state.contentType} />
                
               
            </div>
                <div className={styles.btnGroup}>
                    {state.contentType !== 'overview' ?  <Button action={()=> dispatch({type: ACTIONS.OVERVIEW})}>overview</Button> : null}
                    {state.contentType !== 'education' ?  <Button action={()=> dispatch({type: ACTIONS.EDUCATION})}>education</Button> : null}
                    {state.contentType !== 'experience' ?  <Button action={()=> dispatch({type: ACTIONS.EXPERIENCE})}>experience</Button> : null}
                    {state.contentType !== 'projects' ?  <Button action={()=> dispatch({type: ACTIONS.PROJECTS})}>projects</Button> : null}
                </div>
              
               
		</div>
	);
}



