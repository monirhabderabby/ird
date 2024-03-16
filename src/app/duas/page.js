"use client";
// Packages
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/duas/1`);
  });
  return <div>Please select a dua</div>;
};

export default Page;
