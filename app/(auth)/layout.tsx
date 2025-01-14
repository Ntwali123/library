import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");

  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className={cn("text-2xl font-semibold text-white")}>
              BookWise
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
