import React, { useState } from "react";
import styles from "./SmallLayoutNav.module.css";
import { menuItems } from "./NavData";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

function SmallLayoutNav({ ACTIONS, state, dispatch }) {
  const [currentPage, setCurrentPage] = useState(state.contentType);
  const [showPageList, setShowPageList] = useState(false);

  const pageList = menuItems.map((e) => {
    return (
      <li
        key={e.classChecker}
        className={styles.dropDownListItems}
        onClick={() => handlePageChange(e)}
      >
        {e.itemName}
      </li>
    );
  });

  function handlePageChange(e) {
    dispatch({ type: ACTIONS[e.action] });
    setShowPageList(false);
    setCurrentPage(e.itemName);
  }
  return (
    <div>
      <div
        className={styles.dropDown}
        onClick={() => setShowPageList(!showPageList)}
      >
        <span>{currentPage}</span>
        <IoMdArrowDropdown />
      </div>
      <AnimatePresence>
        <div>
          {showPageList && (
            <motion.ul 
            className={styles.dropDownList}
            initial={{ y: -300, opacity: 0 }}
            animate={{y: 0, opacity: 1 }}
            exit={{y: 300, opacity: 0 }}
            >{pageList}</motion.ul>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default SmallLayoutNav;
