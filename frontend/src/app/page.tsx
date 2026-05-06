import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <Leaf className="h-16 w-16" style={{ color: "#22C55E" }} />
      <h1 className="text-4xl font-bold" style={{ color: "#22C55E" }}>
        DClaw Carbon
      </h1>
      <p className="text-lg text-muted-foreground">Carbon footprint tracking</p>
      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: "#22C55E" }}
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
