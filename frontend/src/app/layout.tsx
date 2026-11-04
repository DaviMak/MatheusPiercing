import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matheus Cruz | Piercing em Foz do Iguaçu",
    template: "%s | Matheus Cruz",
  },
  description:
    "Piercing e visagismo auricular em Foz do Iguaçu. Conheça o trabalho de Matheus Cruz, explore os serviços e agende seu atendimento.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <body>{children}</body>
    </html>
  );
}
