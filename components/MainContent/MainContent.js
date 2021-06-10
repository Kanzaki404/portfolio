import React from "react";
import data from "../../utils/data";
import { FaReact, FaNodeJs, FaVuejs, FaAngular, FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { CgEricsson } from "react-icons/cg";
import {
	SiJsonwebtokens,
	SiJavascript,
	SiStyledComponents,
	SiUdemy,
} from "react-icons/si";
import { MdSchool } from "react-icons/md";
import Image from "next/image";
import styles from "./MainContent.module.css";
export default function MainContent({ contentType }) {
	return (
		<div>
			{(() => {
				switch (contentType) {
					case "overview":
						return <OverViewContent />;
					case "education":
						return <EducationContent />;
					case "experience":
						return <ExperienceContent />;
					case "projects":
						return <ProjectsContent />;
					default:
						return null;
				}
			})()}
		</div>
	);
}

function OverViewContent() {
	return (
		<div>
			<div className={styles.blockText}>
				<h3>Overview</h3>
				<p className={styles.dataOverview}>{data.overview}</p>
			</div>
			<div className={styles.MainContent}>
				<h4>Main Technologies I use</h4>
				<div>
					<div id={styles.listItem}>
						<FaReact />
						<p>React hooks and Redux if necessery</p>
					</div>
					<div id={styles.listItem}>
						<FaNodeJs />
						<p>NodeJS most of the time combined mongoose</p>
					</div>
					<div id={styles.listItem}>
						<DiMongodb />
						<p>
							MongoDB is my first choice for database (Atlas for
							cloud DB)
						</p>
					</div>
					<div id={styles.listItem}>
						<SiJsonwebtokens />
						<p>
							Json web token or JWT for
							authentication/authorization
						</p>
					</div>
					<div id={styles.listItem}>
						<SiJavascript />
						<p>JavaScript as well as CSS and HTML</p>
					</div>
					<div id={styles.listItem}>
						<Image
							src="/nextjs-3.svg"
							alt="CLOSE"
							width="44"
							height="44"
						/>
						<span className={styles.nextjs}>
							NextJs which this portfolio is built with
						</span>
					</div>
					<p>Other</p>
					<div className={styles.otherSection}>
						<div className={styles.box}>
							<div id={styles.listItem}>
								<FaVuejs />
								<p>Vuejs</p>
							</div>
							<div id={styles.listItem}>
								<FaAngular />
								<p>Angluar</p>
							</div>
						</div>
						<div className={styles.box}>
							<div id={styles.listItem}>
								<FaFigma />
								<p>Figma</p>
							</div>
							<div id={styles.listItem}>
								<SiStyledComponents />
								<p>Styled-components</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function EducationContent() {
	return (
		<div>
			<div className={styles.MainContent}>
				<h3>Education</h3>
				<div>
					<div id={styles.listItem}>
						<MdSchool />
						<p>{data.educationEC}</p>
					</div>
					<div id={styles.listItem}>
						<MdSchool />
						<p>{data.educationLinn}</p>
					</div>
					<div id={styles.listItem}>
						<MdSchool />
						<p>{data.educationHigh}</p>
					</div>

					<p>Other</p>
					<div id={styles.listItem}>
						<SiUdemy />
						<p>{data.udemy}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function ExperienceContent() {
	return (
		<div>
			<div className={styles.MainContent}>
				<h3>Experience</h3>
				<div>
					<div id={styles.listItem}>
						<CgEricsson />
						<h4 className={styles.cpName}>
							Ericsson<span id={styles.mn}>(9 months)</span>
						</h4>
					</div>
					<p>Code competition platform</p>
					<div className={styles.internshipDescription}>
						<p>
							A 6 momth period internship conducted at Ericsson
							where I was responsible to design and implement a
							website for a project idea about virtual code
							competition platform.
						</p>
						<p>Tasks:</p>
						<ul>
							<li>Wireframe and mock up design</li>
							<li>
								Implementation of admin fron-end for
								administrative tasks such as adding events and
								challenges
							</li>
							<li>
								Implementation of user fron-end where users can
								submit scripts
							</li>
							<li>
								Implementation of backend/Database for various
								tasks such as authentication and serving API endpoints
							</li>
						</ul>
						<p id={styles.secondTitle}>Ericsson Runners</p>
						<p>{data.ericssonRunners}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function ProjectsContent() {
	return (
		<div>
			<div className={styles.MainContent}>
				<h3>Project</h3>
                <p>work in progress...</p>
				<div className={styles.projectCards}>
					<div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                    <div className={styles.gridItem}></div>
                 
                   
				</div>
			</div>
		</div>
	);
}
