"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ServiceSection.module.css";

type Service = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  imageposition?: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Piercings",
    description: "Perfurações que valorizam seu estilo e sua identidade.",
    details:
      "Cada perfuração é planejada considerando a anatomia da região, o estilo e as preferências de cada pessoa. O objetivo é criar uma composição harmônica, com atenção à técnica, à segurança e à qualidade das joias.",
    image: "/imagens/piercing.jpg",
    imageAlt: "Composição de piercings com joias delicadas",
    imageposition: "center center",
  },
  {
    id: 2,
    title: "Microdermal",
    description: "Uma joia diferenciada para expressar sua personalidade.",
    details:
      "O microdermal é uma modalidade de piercing em que a joia fica posicionada na superfície da pele. A escolha da região e a avaliação individual são importantes para o planejamento do procedimento.",
    image: "/imagens/micro.jpg",
    imageAlt: "Joia de microdermal aplicada na pele",
    imageposition: "center center",
  },
  {
    id: 3,
    title: "Surface",
    description: "Perfurações superficiais com diferentes possibilidades estéticas.",
    details:
      "O piercing surface é realizado em regiões superficiais do corpo, permitindo diferentes propostas de composição. Cada caso precisa ser avaliado individualmente para considerar a anatomia e a viabilidade da perfuração.",
    image: "/imagens/surface.jpg",
    imageAlt: "Piercing surface com joia delicada",
    imageposition: "center center",
  },
  {
    id: 4,
    title: "Troca de joias",
    description: "Renove sua composição com joias que combinam com você.",
    details:
      "A troca de joias permite renovar a aparência do seu piercing e explorar novas combinações. A substituição deve respeitar o estágio de cicatrização e as condições de cada perfuração.",
    image: "/imagens/joias.jpg",
    imageAlt: "Joias para composição de piercings",
    imageposition: "center center",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  useEffect(() => {
    if (!selectedService) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>O QUE OFERECEMOS</span>

          <h2>Cuidados e detalhes que fazem a diferença.</h2>

          <p>
            Cada atendimento é pensado para respeitar sua individualidade,
            com planejamento personalizado e atenção a cada detalhe.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={styles.serviceCard}
              onClick={() => setSelectedService(service)}
              aria-label={`Conheça mais sobre ${service.title}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                style={{ objectPosition: service.imageposition }}
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={styles.serviceImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className={styles.learnMore}>
                  Saiba mais <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedService(null)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedService(null)}
              aria-label="Fechar janela"
            >
              &times;
            </button>

            <div className={styles.modalImage}>
              <Image
                src={selectedService.image}
                alt={selectedService.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.serviceImage}
              />
            </div>

            <div className={styles.modalContent}>
              <span className={styles.eyebrow}>MATHEUS CRUZ PIERCING STUDIO</span>

              <h2 id="service-modal-title">
                {selectedService.title}
              </h2>

              <p>{selectedService.details}</p>

              <p className={styles.followUp}>
                O atendimento também conta com acompanhamento gratuito
                no pós-perfuração.
              </p>

              <a href="#contato" className={styles.modalCta}>
                Agendar atendimento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
