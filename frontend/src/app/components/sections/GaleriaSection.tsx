"use client";

import { useState, useRef } from "react";
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

export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/MatheusPiercing" : "";

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

  ...createImages(["sombrancelha-1.jpeg"], "Sobrancelha"),

  ...createImages(["nariz-1.jpeg"], "Nariz"),

  ...createImages(
    ["antesdepois-1.jpeg", "antesdepois-2.jpeg", "antesdepois-3.jpeg"],
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

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === selectedCategory
        );

  const currentImage = filteredImages[activeImageIndex];

  function changeCategory(category: Category) {
    setSelectedCategory(category);
    setActiveImageIndex(0);
  }

  function changeImage(direction: number) {
    setActiveImageIndex((currentIndex) => {
      return (
        (currentIndex + direction + filteredImages.length) %
        filteredImages.length
      );
    });
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      changeImage(difference > 0 ? 1 : -1);
    }

    touchStartX.current = null;
  }

  return (
    <section id="galeria" className={styles.gallery}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>PORTFÓLIO</span>

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

        {currentImage && (
          <div className={styles.carousel}>
            <div
              className={styles.carouselStage}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority={activeImageIndex === 0}
                sizes="(max-width: 650px) 100vw, (max-width: 1000px) 85vw, 680px"
                className={styles.carouselImage}
              />

              {filteredImages.length > 1 && (
                <>
                  <button
                    type="button"
                    className={`${styles.navigationButton} ${styles.previousButton}`}
                    onClick={() => changeImage(-1)}
                    aria-label="Fotografia anterior"
                  >
                    &#8249;
                  </button>

                  <button
                    type="button"
                    className={`${styles.navigationButton} ${styles.nextButton}`}
                    onClick={() => changeImage(1)}
                    aria-label="Próxima fotografia"
                  >
                    &#8250;
                  </button>
                </>
              )}

              <span className={styles.imageIndicator}>
                {activeImageIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <div className={styles.carouselCaption}>
              <span>{currentImage.category}</span>
              <span>
                {activeImageIndex + 1} de {filteredImages.length} trabalhos
              </span>
            </div>
          </div>
        )}

        <div className={styles.galleryFooter}>
          <p>
            Gostou de algum trabalho? Vamos planejar sua próxima
            composição.
          </p>

          <a href="https://wa.me/5545991151808" className={styles.contactButton}>
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}