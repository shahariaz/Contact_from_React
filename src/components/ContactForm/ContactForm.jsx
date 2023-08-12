import { MdMessage, MdCall, MdEmail } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactFrom.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form>
          <div className={styles.from_controler}>
            <label htmlFor="name"> Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.from_controler}>
            <label htmlFor="email"> Email</label>
            <input type="text" email="email" />
          </div>
          <div className={styles.from_controler}>
            <label htmlFor="text"> Text</label>
            <textarea type="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.form_img}>
        <img
          src="../../../public/images/Service 24_7-pana 1.svg"
          alt="Contact from"
        />
      </div>
    </section>
  );
};

export default ContactForm;
