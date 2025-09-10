'use client'

import {useRouter} from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => router.push("/");

  return (
    <span className={"text-5xl absolute pt-6 hover:scale-110 duration-200 cursor-pointer"} onClick={handleBack}
    >⬅️</span>
  );
}

export default BackButton;