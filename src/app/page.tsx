import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/quiz.jpg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.content}>
        <div className={styles.center}>
          <Button type="primary" size="large">Start</Button>
        </div>
      </div>
    </div>
  );
}