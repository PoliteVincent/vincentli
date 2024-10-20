import styles from "./BubbleText.module.css";

const BubbleText = () => {
  return (
    <h1 className={styles.bubble}>
      {"Hey! I'm Vincent Li!".split("").map((child, idx) => (
        <span className={styles.hoverT} key={idx}>
          {child === " " ? "\u00A0" : child}
        </span>
      ))}
    </h1>
  );
};
export default BubbleText;
