import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <section className={styles.titleSection}>
        <h1>Hello!</h1>
        <h2>
          I'm Francisco, a Full-Stack Developer who specializes in React and
          React Native.
        </h2>
      </section>
    </main>
  );
}
