"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import getData from "@/utils/fetch";
const queryClient = new QueryClient();

function Provider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Provider;
