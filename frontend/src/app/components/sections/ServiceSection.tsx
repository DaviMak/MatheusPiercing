"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ServiceSection.module.css";

import { BASE_PATH } from "./GaleriaSection";

type ServiceImage = {
  src: string;
  alt: string;
  position?: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  details: string;
  images: ServiceImage[];
};

const services: Service[] = [
  {
    id: 1,
    title: "Projeção auricular",
    description: "Perfurações que valorizam seu estilo e sua identidade.",
    details:
      "Cada perfuração é planejada considerando a anatomia da região, o estilo e as preferências de cada pessoa. O objetivo é criar uma composição harmônica, com atenção à técnica, à segurança e à qualidade das joias.",
    images: [
      {
        src: `${BASE_PATH}/imagens/PA-1.jpeg`,
        alt: "Composição de piercings na orelha",
      },
      {
        src: `${BASE_PATH}/imagens/PA-15.jpeg`,
        alt: "Projeto auricular com diferentes joias",
      },
      {
        src: `${BASE_PATH}/imagens/PA-16.jpeg`,
        alt: "Composição de piercings com joias delicadas",
      },
    ],
  },
  {
    id: 2,
    title: "Microdermal",
    description: "Uma joia diferenciada para expressar sua personalidade.",
    details:
      "O microdermal é uma modalidade de piercing em que a joia fica posicionada na superfície da pele. A escolha da região e a avaliação individual são importantes para o planejamento do procedimento.",
    images: [
      {
        src: `${BASE_PATH}/imagens/micro-3.jpg`,
        alt: "Joia de microdermal aplicada na pele",
      },
      {
        src: `${BASE_PATH}/imagens/micro-1.jpeg`,
        alt: "Exemplo de aplicação de microdermal",
      },
      {
        src: `${BASE_PATH}/imagens/micro-2.jpeg`,
        alt: "Detalhe de piercing microdermal",
      },
    ],
  },
  {
    id: 3,
    title: "Surface",
    description: "Perfurações superficiais com diferentes possibilidades estéticas.",
    details:
      "O piercing surface é realizado em regiões superficiais do corpo, permitindo diferentes propostas de composição. Cada caso precisa ser avaliado individualmente para considerar a anatomia e a viabilidade da perfuração.",
    images: [
      {
        src: `${BASE_PATH}/imagens/surface-1.jpeg`,
        alt: "Piercing surface com joia delicada",
      },
      {
        src: `${BASE_PATH}/imagens/surface-2.jpeg`,
        alt: "Exemplo de piercing surface",
      },
      {
        src: `${BASE_PATH}/imagens/surface-3.jpeg`,
        alt: "Detalhe de uma aplicação surface",
      },
    ],
  },
  {
    id: 4,
    title: "Troca de joias",
    description: "Renove sua composição com joias que combinam com você.",
    details:
      "A troca de joias permite renovar a aparência do seu piercing e explorar novas combinações. A substituição deve respeitar o estágio de cicatrização e as condições de cada perfuração.",
    images: [
      {
        src: `${BASE_PATH}/imagens/joias-11.jpg`,
        alt: "Seleção de joias para piercings",
      },
      {
        src: `${BASE_PATH}/imagens/Joias-10.jpeg`,
        alt: "Detalhes de joias para piercing",
      },
      {
        src: `${BASE_PATH}/imagens/joias-7.jpeg`,
        alt: "Opções de joias para composição",
      },
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);

  function openService(service: Service) {
    setActiveImageIndex(0);
    setSelectedService(service);
  }

  function closeModal() {
    setSelectedService(null);
    setActiveImageIndex(0);
  }

  function changeImage(direction: number) {
    if (!selectedService) return;

    const totalImages = selectedService.images.length;

    setActiveImageIndex((currentIndex) => {
      return (currentIndex + direction + totalImages) % totalImages;
    });
  }

  const currentImage = selectedService?.images[activeImageIndex];

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
              onClick={() => openService(service)}
              aria-label={`Conheça mais sobre ${service.title}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.images[0].src}
                  alt={service.images[0].alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={styles.serviceImage}
                  style={{
                    objectPosition: service.images[0].position ?? "center",
                  }}
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

      {selectedService && currentImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
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
              onClick={closeModal}
              aria-label="Fechar janela"
            >
              &times;
            </button>

            <div className={styles.modalImage}>
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.serviceImage}
                style={{
                  objectPosition: currentImage.position ?? "center",
                }}
              />

              {selectedService.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.imageArrow} ${styles.imageArrowLeft}`}
                    onClick={() => changeImage(-1)}
                    aria-label="Fotografia anterior"
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    className={`${styles.imageArrow} ${styles.imageArrowRight}`}
                    onClick={() => changeImage(1)}
                    aria-label="Próxima fotografia"
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true" />
                  </button>

                  <span className={styles.imageIndicator}>
                    {activeImageIndex + 1} / {selectedService.images.length}
                  </span>
                </>
              )}
            </div>

            <div className={styles.modalContent}>
              <span className={styles.eyebrow}>
                MATHEUS CRUZ PIERCING STUDIO
              </span>

              <h2 id="service-modal-title">{selectedService.title}</h2>

              <p>{selectedService.details}</p>

              <p className={styles.followUp}>
                O atendimento também conta com acompanhamento gratuito no
                pós-perfuração.
              </p>

              <a
                href="https://wa.me/5545991151808"
                className={styles.modalCta}
              >
                Agendar atendimento
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}