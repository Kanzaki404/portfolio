import React from "react";
import Image from "next/image";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import styles from "./CardItem.module.css";
import Button from "../Button";

export default function CardItem(props) {

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
						<p className={styles.title}>{props.title}</p>
					</div>
				</div>
				<div className={styles.cardContentBack}>
					<div className={styles.cardContent}>
						<p className={styles.summary}>{props.shorSum}</p>
						{props.note  ? <p>{props.note}</p>: null}
						<div className={styles.linkGroup}>
							{props.destination !== "" ?
							<a
								href={`https://github.com/Kanzaki404/${props.destination}`}
								target="_blank"
							>
								<AiOutlineGithub />
							</a> : null}
							{props.webDestination !== "" ?
							<a
								href={props.webDestination}
								target="_blank"
							>
								<AiOutlineLink />
							</a>: null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
