//own files
import styles from "./navbar.module.css";
//icons
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
export function NavBar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.sideA}>
        <a>Harihara Sudhan</a>
        <a>home</a>
        <a>About</a>
        <a>projects</a>
      </div>
      <div className={styles.sideB}>
        <FaLinkedin className={`${styles.icon} ${styles.linkedin}`} />
        <AiFillGithub className={styles.icon} />
        <IoMail className={styles.icon} />
      </div>
    </div>
  );
}
//todo
//add link to the icon
//make the harihara sudhan come to the starting of the page
//make the about and projcets go to the respective section
