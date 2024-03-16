"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/duas/1`);
  });
  return <div>Please select a dua</div>;
};

export default page;
