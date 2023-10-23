import Button from './components/Button/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 style={{ fontSize: '20vh' }}>Hello World</h1>
      </div>
      <Button/>
    </main>
  );
}
