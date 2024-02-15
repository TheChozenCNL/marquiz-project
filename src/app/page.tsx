import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.center}>
          <Button type="primary" size="large" href="/game">
            Почати гру
          </Button>
        </div>
      </div>
    </div>
  );
}