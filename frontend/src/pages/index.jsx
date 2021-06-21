import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(async () => {
    const token = localStorage.getItem("token");

    if (!token) await router.push("/login");
  }, []);

  return <div>Home</div>;
}
