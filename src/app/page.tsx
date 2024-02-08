import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'antd';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.banner}>
          <div className={styles.imageContainer}>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={100}
              priority
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button type="primary">Button</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
