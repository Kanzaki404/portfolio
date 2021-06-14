import React from "react";
import Image from "next/image";
import styles from "./CardItem.module.css";
import Button from "../Button"
function CardItem(props) {
	return (
		<div className={styles.card}>
			<div className={styles.innerCard}>
				<div className={styles.cardContentFront}>
					<div className={styles.cardContent}>
					<Image
						src={props.image}
						alt="SALONG"
						width="64"
						height="64"
						layout="intrinsic"
					/>
					<p className={styles.title}> 
						{props.title}
					</p>
					</div>
					
				</div>
				<div className={styles.cardContentBack}>
				<div className={styles.cardContent}>
					<p className={styles.summary}>{props.shorSum}</p>
					<Button>Details</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
