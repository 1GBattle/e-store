import React from "react";
import SlimNav from "@/app/components/SlimNav.Component";
import StoreProvider from "@/app/redux/StoreProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <SlimNav />
      {children}
    </StoreProvider>
  );
}
