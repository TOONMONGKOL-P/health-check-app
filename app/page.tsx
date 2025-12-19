import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-black text-center mb-6">
        เว็บแอปตรวจสุขภาพอย่างครบวงจร
      </h1>

      <Link
        href="/assessment"
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        เริ่มตรวจสุขภาพ
      </Link>
    </main>
  );
}
