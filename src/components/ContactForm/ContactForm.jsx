import { MdMessage, MdCall } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactFrom.module.css";

const ContactForm = () => {
  return (
    <section className={` ${styles.container}`}>
      <div className={styles.form}></div>
      <div className={styles.form_img}></div>
      <div className={styles.btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
      </div>
    </section>
  );
};

export default ContactForm;
