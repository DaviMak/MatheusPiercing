
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return ( <>
    <main>
      <div className={styles.noticeBar}>
        Atendimento somente com hora marcada
      </div>

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
            <a href="#estudio">Estúdio</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            href="#contato"
            className={styles.headerButton}
          >
            Agendar
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>
              Visagismo auricular
            </span>

            <h1>
              Sua expressão,
              <br />
              sua identidade.
            </h1>

            <p>
              Piercing e visagismo auricular em Foz do Iguaçu.
              Descubra a beleza dos detalhes através de
              perfurações e joias escolhidas para você.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#contato"
                className={styles.heroButton}
              >
                Agendar pelo WhatsApp
              </a>

              <a
                href="#galeria"
                className={styles.secondaryButton}
              >
                Conheça nosso trabalho
              </a>
            </div>

            <span className={styles.appointmentNotice}>
              Atendimento exclusivamente com hora marcada.
            </span>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/imagens/joias.jpg"
              alt="Detalhe de uma joia para piercing"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.featureImage}
            />
          </div>
        </div>
      </section>

      <section id="sobre" className={styles.section}>
        <div className="container">
          <h2>Um cuidado que vai além da estética.</h2>
        </div>
      </section>

      <section
        id="servicos"
        className={`${styles.section} ${styles.sectionAlternate}`}
      >
        <div className="container">
          <h2>Nossos serviços</h2>
        </div>
      </section>

      <section id="galeria" className={styles.section}>
        <div className="container">
          <h2>Galeria</h2>
        </div>
      </section>

      <section
        id="estudio"
        className={`${styles.section} ${styles.sectionAlternate}`}
      >
        <div className="container">
          <h2>Conheça nosso estúdio</h2>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <div className="container">
          <h2>Perguntas frequentes</h2>
        </div>
      </section>

      <section
        id="contato"
        className={`${styles.section} ${styles.sectionAlternate}`}
      >
        <div className="container">
          <h2>Agende seu atendimento</h2>
        </div>
      </section>
    </main>
    
    <footer className={styles.footer}>
        <div className={`container ${styles.footerContent}`}>
            <p>📍 Av. José Maria de Brito, 1000 — Sala 102 (Anexo à Lumynah Clínica Estética)</p>
            <p>Foz do Iguaçu - PR</p>
            <div className={styles.footerlegal}>
                <p>MATHEUS CRUZ PIERCING STUDIO LTDA | CNPJ: 56.162.098/0001-38</p>
                <p>© 2026 Todos os direitos reservados.</p>
            </div>
            <div className={styles.footerSocial}>
              <a href="https://www.facebook.com/share/19TfRFgZss/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/matheus.piercing?vrfl=bzE5aDZ6MWU3NTJl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@matheus.piercing" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
        </div>
    </footer>
  </>
  );
}
