import React from "react";
import { useRouter } from "next/router";

export const index: React.FC = () => {
  const router = useRouter();
  router.push("/home");
  return <></>;
};
