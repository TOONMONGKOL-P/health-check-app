import "../styles/globals.css";

export const metadata = {
  title: "เว็บแอปตรวจสุขภาพ",
  description: "ประเมินสุขภาพเบื้องต้น"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
