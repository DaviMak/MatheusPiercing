"use client";

import Image from "next/image";
import styles from "./VisagismoSection.module.css";

import { BASE_PATH } from "./GaleriaSection";

export default function VisagismoSection() {
  return (
    <section id="visagismo" className={styles.visagismo}>
      <div className={styles.container}>

        <div className={styles.imageWrapper}>
          <Image
            src={`${BASE_PATH}/imagens/PA-6.jpeg`}
            alt="Composição personalizada de piercings realizada por Matheus Cruz"
            fill
            sizes="(max-width: 650px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>
            VISAGISMO AURICULAR
          </span>

          <h2>
            Mais do que piercings, uma composição pensada para você.
          </h2>

          <p className={styles.introduction}>
            Cada orelha tem características únicas. Por isso, cada
            composição começa com um olhar atento aos detalhes.
          </p>

          <p>
            O visagismo auricular é uma forma de valorizar a beleza
            natural da orelha através da escolha e da combinação
            estratégica de piercings e joias.
          </p>

          <p>
            Analisamos o formato, as proporções e as características
            de cada orelha para criar uma composição harmoniosa,
            que combine com o estilo e a personalidade de cada pessoa.
          </p>

          <div className={styles.highlight}>
            <span className={styles.highlightLine} />
            <p>
              É como uma consultoria de imagem, só que para a orelha.
              Uma experiência exclusiva, planejada para você.
            </p>
          </div>

          <a
            href="https://wa.me/5545991151808"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            Agendar avaliação
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
