"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Assessment() {
  const router = useRouter();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const submit = () => {
    const h = Number(height) / 100;
    const w = Number(weight);
    const bmi = (w / (h * h)).toFixed(1);
    router.push(`/result?bmi=${bmi}`);
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">
        แบบประเมินสุขภาพเบื้องต้น
      </h2>

      <input
        type="number"
        placeholder="ส่วนสูง (ซม.)"
        className="border p-3 w-full mb-4"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="น้ำหนัก (กก.)"
        className="border p-3 w-full mb-4"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-black text-white p-3 w-full"
      >
        ดูผลการประเมิน
      </button>
    </div>
  );
}
