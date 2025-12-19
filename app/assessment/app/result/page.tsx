"use client";

import { useSearchParams } from "next/navigation";

export default function Result() {
  const params = useSearchParams();
  const bmi = Number(params.get("bmi"));

  let status = "ปกติ";
  if (bmi < 18.5) status = "น้ำหนักน้อย";
  else if (bmi < 25) status = "ปกติ";
  else if (bmi < 30) status = "น้ำหนักเกิน";
  else status = "อ้วน";

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">
        ผลการประเมินสุขภาพ
      </h2>

      <p>BMI: <strong>{bmi}</strong></p>
      <p>สถานะ: <strong>{status}</strong></p>
    </div>
  );
}
