import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image src="/logo.png" alt="ReRace Logo" width={510} height={150} />
        <p>Github | Discord | Download</p>
      </div>
    </main>
  );
}
