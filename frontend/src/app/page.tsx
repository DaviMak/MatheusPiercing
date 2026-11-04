
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <a href="/" className={styles.brand}>
            <Image
              src="/imagens/logo.png"
              alt="Matheus Cruz Piercing Studio"
              width={600}
              height={180}
              priority
              className={styles.logo}
            />
          </a>

          <nav className={styles.navigation}>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href="#contato"
            className={styles.headerButton}
          >
            Entre em contato
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>
              MATHEUS CRUZ · PIERCING STUDIO
            </span>

            <h1>
              Sua expressão,
              <br />
              sua identidade.
            </h1>

            <p>
              Descubra a beleza dos detalhes através de
              perfurações e joias escolhidas para você.
            </p>

            <a href="#contato" className={styles.heroButton}>
              Conheça nosso trabalho
            </a>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/imagens/helix.jpg"
              alt="Detalhe de uma joia para piercing"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.featureImage}
            />
          </div>
        </div>
      </section>

      <section id="sobre" className={styles.placeholder}>
        <div className="container">
          <p>MATHEUS CRUZ · PIERCING STUDIO</p>
          <h2>Um cuidado que vai além da estética.</h2>
        </div>
      </section>

      <section id="servicos" className={styles.placeholder}>
        <div className="container">
          <h2>Nossos serviços</h2>
        </div>
      </section>

      <section id="galeria" className={styles.placeholder}>
        <div className="container">
          <h2>Galeria</h2>
        </div>
      </section>

      <section id="contato" className={styles.placeholder}>
        <div className="container">
          <h2>Entre em contato</h2>
        </div>
      </section>
    </main>
  );
}
