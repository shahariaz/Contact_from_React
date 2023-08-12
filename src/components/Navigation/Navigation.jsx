import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div>
      <nav className={`container ${styles.navigation}`}>
        <div className="logo">
          <img src="../../public/images/Frame 2 1.png" alt="" />
        </div>
        <div className="list">
          <ul>
            <li herf="#">Home</li>
            <li herf="#">About</li>
            <li herf="#">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
