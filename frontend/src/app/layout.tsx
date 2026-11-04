import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matheus Cruz | Piercing Studio",
    template: "%s | Matheus Cruz",
  },
  description:
    "Conheça o trabalho de Matheus Cruz, Piercing Studio. Perfurações, joias e atendimento especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
