"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./GaleriaSection.module.css";

type Category =
  | "Todos"
  | "Projetos auriculares"
  | "Joias"
  | "Piercings labiais"
  | "Microdermal"
  | "Surface"
  | "Umbigo"
  | "Sobrancelha"
  | "Nariz"
  | "Antes e depois";

type GalleryImage = {
  src: string;
  category: Exclude<Category, "Todos">;
  alt: string;
};

export const BASE_PATH = process.env.NODE_ENV === "production" ? "/MatheusPiercing" : "";

function createImages(
  files: string[],
  category: GalleryImage["category"]
): GalleryImage[] {
  return files.map((file) => ({
    src: `${BASE_PATH}/imagens/${file}`,
    category,
    alt: `${category} realizado por Matheus Cruz`,
  }));
}

const galleryImages: GalleryImage[] = [
  ...createImages(
    [
      ...Array.from({ length: 19 }, (_, i) => `PA-${i + 1}.jpeg`),
      "PA-20.jpg",
      "PA-21.jpg",
      "PA-22.jpg",
      "PA-23.jpeg",
      "orelha.jpeg",
    ],
    "Projetos auriculares"
  ),

  ...createImages(
    [
      "joias-1.jpeg",
      "joias-2.jpeg",
      "joias-3.jpeg",
      "joias-4.jpeg",
      "joias-5.jpeg",
      "joias-6.jpeg",
      "joias-7.jpeg",
      "joias-8.jpeg",
      "joias-9.jpeg",
      "Joias-10.jpeg",
      "joias-11.jpg",
      "joias-12.jpeg",
      "joias-13.jpeg",
    ],
    "Joias"
  ),

  ...createImages(
    [
      ...Array.from({ length: 6 }, (_, i) => `labial-${i + 1}.jpeg`),
      "labretvertical.jpeg",
    ],
    "Piercings labiais"
  ),

  ...createImages(
    ["micro-1.jpeg", "micro-2.jpeg", "micro-3.jpg"],
    "Microdermal"
  ),

  ...createImages(
    [
      ...Array.from({ length: 9 }, (_, i) => `surface-${i + 1}.jpeg`),
      "surface-10.jpg",
    ],
    "Surface"
  ),

  ...createImages(
    ["umbigo-1.jpeg", "umbigo-2.jpeg", "umbigo-3.jpeg"],
    "Umbigo"
  ),

  ...createImages(
    ["sombrancelha-1.jpeg"],
    "Sobrancelha"
  ),

  ...createImages(
    ["nariz-1.jpeg"],
    "Nariz"
  ),

  ...createImages(
    [
      "antesdepois-1.jpeg",
      "antesdepois-2.jpeg",
      "antesdepois-3.jpeg",
    ],
    "Antes e depois"
  ),
];

const categories: Category[] = [
  "Todos",
  "Projetos auriculares",
  "Joias",
  "Piercings labiais",
  "Microdermal",
  "Surface",
  "Umbigo",
  "Sobrancelha",
  "Nariz",
  "Antes e depois",
];

export default function GaleriaSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Todos");

  const [showAll, setShowAll] = useState(false);

  const [activeImageIndex, setActiveImageIndex] =
    useState<number | null>(null);

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === selectedCategory
        );

  const visibleImages = showAll
    ? filteredImages
    : filteredImages.slice(0, 12);

  useEffect(() => {
    if (activeImageIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) =>
          current === null
            ? null
            : (current + 1) % filteredImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) =>
          current === null
            ? null
            : (current - 1 + filteredImages.length) %
              filteredImages.length
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImageIndex, filteredImages.length]);

  function changeCategory(category: Category) {
    setSelectedCategory(category);
    setShowAll(false);
  }

  return (
    <section id="galeria" className={styles.gallery}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            PORTFÓLIO
          </span>

          <h2>Conheça nosso trabalho</h2>

          <p>
            Cada projeto é único. Explore alguns dos trabalhos
            realizados e encontre inspirações para sua próxima composição.
          </p>
        </header>

        <nav
          className={styles.filters}
          aria-label="Filtrar fotografias por categoria"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? styles.activeFilter
                  : styles.filterButton
              }
              onClick={() => changeCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className={styles.galleryGrid}>
          {visibleImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={styles.galleryItem}
              onClick={() => setActiveImageIndex(index)}
              aria-label={`Ampliar fotografia: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                className={styles.galleryImage}
              />

              <span className={styles.imageOverlay}>
                Ampliar <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>

        {filteredImages.length > 12 && (
          <div className={styles.moreContainer}>
            <button
              type="button"
              className={styles.moreButton}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Mostrar menos" : "Ver mais trabalhos"}
            </button>
          </div>
        )}

        <div className={styles.galleryFooter}>
          <p>
            Gostou de algum trabalho? Vamos planejar sua próxima
            composição.
          </p>

          <a href="#contato" className={styles.contactButton}>
            Agendar atendimento
          </a>
        </div>
      </div>

      {activeImageIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setActiveImageIndex(null)}
            aria-label="Fechar fotografia"
          >
            &times;
          </button>

          <button
            type="button"
            className={`${styles.navigationButton} ${styles.previousButton}`}
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex(
                (activeImageIndex - 1 + filteredImages.length) %
                  filteredImages.length
              );
            }}
            aria-label="Fotografia anterior"
          >
            &#8249;
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.lightboxImage}>
              <Image
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].alt}
                fill
                sizes="90vw"
                className={styles.lightboxPhoto}
              />
            </div>

            <p>
              {filteredImages[activeImageIndex].category}
              {" · "}
              {activeImageIndex + 1} de {filteredImages.length}
            </p>
          </div>

          <button
            type="button"
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex(
                (activeImageIndex + 1) % filteredImages.length
              );
            }}
            aria-label="Próxima fotografia"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
