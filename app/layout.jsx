import "./globals.css";

export const metadata = {
  title: "Saberes Científicos",
  description: "Blog y comunidad de divulgación científica y orientación académica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
