import Link from "next/link";

import { FirewallRuleGenerator } from "~/app/_components/firewallRuleGenerator";

export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Easy <span className="text-[hsl(280,100%,70%)]">IP</span>Tables
          </h1>
          <FirewallRuleGenerator />

        </div>
      </main>
  );
}
