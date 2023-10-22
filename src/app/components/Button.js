import styles from './Button.module.css';

function Button() {
  return (
    <div>
      <a href="https://ironhack.com">
        <button className={styles.button}>REACT DOCS</button>
      </a>
    </div>
  );
}
export default Button;
