import React from "react";
import data from "../../utils/data";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import { FaReact, FaNodeJs, FaVuejs, FaAngular, FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { CgEricsson } from "react-icons/cg";
import { BiDownload, BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiJsonwebtokens,
  SiJavascript,
  SiStyledComponents,
  SiUdemy,
} from "react-icons/si";
import { MdSchool } from "react-icons/md";
import CardItem from "./CardItem";
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
          case "about":
            return <About />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

function OverViewContent() {
  return (
    <div className={styles.MainContentScroll}>
      <div className={styles.blockText}>
        <p className={styles.dataOverview}>{data.overview}</p>
      </div>
      <div className={styles.MainContent}>
        <h4>Main Technologies I use</h4>
        <div>
          <div id={styles.listItem}>
            <FaReact />
            <p>React hooks and Redux if necessary</p>
          </div>
          <div id={styles.listItem}>
            <FaNodeJs />
            <p>NodeJS most of the time combined with mongoose</p>
          </div>
          <div id={styles.listItem}>
            <DiMongodb />
            <p>MongoDB is my first choice for database (Atlas for cloud DB)</p>
          </div>
          <div id={styles.listItem}>
            <SiJsonwebtokens />
            <p>Json web token or JWT for authentication/authorization</p>
          </div>
          <div id={styles.listItem}>
            <SiJavascript />
            <p>JavaScript as well as CSS and HTML</p>
          </div>
          <div id={styles.listItem}>
            <Image src="/nextjs-3.svg" alt="CLOSE" width="44" height="44" />
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
        <div className={styles.MainContentScroll}>
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
        <div className={styles.MainContentScroll}>
        <div className={styles.experienceCard}>
            <div id={styles.listItem}>
              {/* <div style={{borderRadius: '5px', borderLeft: '1px solid white', borderRight: '1px solid white', width: '30px', textAlign: "center"}}>  <b>P</b></div> */}
              <Image src="/preciselyIcon.svg"
                alt="Stratsys"
                width="30"
                height="30"
                layout="intrinsic"/>
              <h4 className={styles.cpName}>
              Precisely<span id={styles.mn}> May/2022 - Jun/2022</span>
              </h4>
            </div>
            <p>Front-end Developer</p>
            <div className={styles.internshipDescription}>
              <p>{data.preciselyOverview}</p>
              <p>Tasks:</p>
              <ul>
                <li>Improving & fixing features on client side using React</li>
                <li>Agile processes with tools such as Jira, Git and Google cloud patform. </li>
              </ul>
            </div>
          </div>
          <div className={styles.experienceCard}>
            <div id={styles.listItem}>
              <Image
                src="/stratsysLogo.svg"
                alt="Stratsys"
                width="30"
                height="30"
                layout="intrinsic"
              />
              <h4 className={styles.cpName}>
                Stratsys<span id={styles.mn}>Sep/2021 - Mar/2022</span>
              </h4>
            </div>
            <p>Jr. Developer</p>
            <div className={styles.internshipDescription}>
              <p>{data.stratsysOverview}</p>
              <p>Tasks:</p>
              <ul>
                <li>Creating and updating micro-frontends in vue3.</li>
                <li>Writing unit tests with jest.</li>
                <li>
                  Implementing accessibility support for screen readers and
                  tested using NVDA program.
                </li>
                <li>Agile processes with tools such as Jira, Git and Azure.</li>
                <li>Learning .Net framework and engaging in bug fixes</li>
              </ul>
            </div>
          </div>
          <div className={styles.experienceCard}>
            <div id={styles.listItem}>
              <CgEricsson />
              <h4 className={styles.cpName}>
                Ericsson<span id={styles.mn}>Oct/2020 - May/2022</span>
              </h4>
            </div>
            <p>Code competition platform</p>
            <div className={styles.internshipDescription}>
              <p>{data.ericssonCodeComp}</p>
              <p>Tasks:</p>
              <ul>
                <li>Wireframe and mock up design</li>
                <li>
                  Implementation of admin front-end for administrative tasks
                  such as adding events and challenges
                </li>
                <li>
                  Implementation of user front-end where users can submit
                  scripts
                </li>
                <li>
                  Implementation of backend/Database for various tasks such as
                  authentication and serving API endpoints
                </li>
              </ul>
              <p id={styles.secondTitle}>Ericsson Runners</p>
              <p>{data.ericssonRunners}</p>
            </div>
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
        <div className={styles.projectCards}>
          <CardItem
            title="Maria's Salong Alonissos"
            shorSum={data.mariaSalongSummary}
            image="/salonLogo.svg"
            destination="salong-alonissos"
            webDestination="https://www.mariahairsalon.gr/"
          />
          <CardItem
            title="Hamster Wars"
            shorSum={data.gohamSummary}
            image="/35.svg"
            destination="HamsterWars"
            webDestination="http://goham23.herokuapp.com/"
          />
          <CardItem
            title="Vortech"
            shorSum={data.vortech}
            image="/progress.png"
            destination=""
            webDestination="https://www.figma.com/file/qExQd2XuxzmoGbXDKiLNIb/Vortech?node-id=0%3A1"
          />
        </div>
      </div>
    </div>
  );
}

function About() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div className={styles.MainContent}>
        <div className={styles.aboutHeading}>
          <div className={styles.aboutContact}>
            <p>Contact:</p>
            <div>
              <BiPhone />
              <p>073 755 20 22</p>
            </div>
            <div>
              <HiOutlineMail />
              <p>alexander.risteski @ protonmail.com</p>
            </div>

            <button className={styles.downloadBtn}>
              <BiDownload className={styles.downIcon} />
              <a href="/files/EN_RESUME_05_2022.pdf" download>
                Download CV
              </a>
            </button>
          </div>
          {width < 900 ? null : (
            <Image
              src="/me2.jpg"
              alt="me"
              width="200"
              height="230"
              className={styles.imageAbout}
            />
          )}
        </div>
        <div className={styles.description}>
          <h3 className={styles.descriptionTitle}>The past and today</h3>

          <p>{data.aboutParagraphOne} </p>

          <p>{data.aboutParagraphTwo} </p>

          <p>{data.aboutParagraphThree} </p>
        </div>
      </div>
    </div>
  );
}
