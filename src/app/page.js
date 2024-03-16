"use client";
// Packages
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/duas/1`);
  });
  return <section className="flex flex-1">Home Page</section>;
}
