import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { randomChar } from "../utils/randomChar";
import data from "../utils/data";
import Image from "next/image";
import Drawer from "../components/drawer";
import Button from "../components/Button";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Head from "next/head";
export default function Home() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [curtain, setCurtain] = useState(false);
	useEffect(() => {
		// randomChar(input1, setName);
		randomChar(data.name, setName);
		setTimeout(function () {
			randomChar(data.title, setDescription);
		}, 1300);
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Alexander Risteski</title>
				<meta
					name="description"
					content="Hello!, I'm Alexander Risteski,I am a front end focused developer. Wecolme to my portfolio"
				/>
			</Head>
			{curtain ? (
				<div
					className={styles.curtain}
					onClick={() => setCurtain(false)}
				>
					<div className={styles.closeBtnContainer}>
						<Image
							src="/close.svg"
							alt="CLOSE"
							width="44"
							height="44"
						/>
					</div>
				</div>
			) : null}
			<div className={styles.firstSection}>
				<Image
					src="/me.jpg"
					alt="me"
					width="200"
					height="210"
					className={styles.image}
				/>
				<div className={styles.btnTextWrapper}>
				<div className={styles.textInfo}>
					<p>{name}</p>
					<p>{description}</p>
					
				</div>
				<Button action={() => setCurtain(true)}>Profile</Button>
				</div>
				<div className={styles.linkGroup}>
				<a href="https://github.com/Kanzaki404" target="_blank">
					<AiOutlineGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/alexander-risteski-seiya/"
					target="_blank"
				>
					<AiFillLinkedin />
				</a>
			</div>
			</div>
			

			<Drawer drawerOpen={curtain} setCurtain={setCurtain}/>
		
		</div>
	);
}
