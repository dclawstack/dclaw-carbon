"use client";

import { useState } from "react";
import { api, CarbonReport } from "@/lib/api";
import { Leaf } from "lucide-react";

export default function DashboardPage() {
  const [organization, setOrganization] = useState("");
  const [reportingPeriod, setReportingPeriod] = useState("Monthly");
  const [result, setResult] = useState<CarbonReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api<CarbonReport>("/carbon/reports", {
        method: "POST",
        body: JSON.stringify({ organization, reporting_period: reportingPeriod }),
      });
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="mb-8 flex items-center gap-3">
        <Leaf className="h-8 w-8" style={{ color: "#22C55E" }} />
        <h1 className="text-2xl font-bold" style={{ color: "#22C55E" }}>
          DClaw Carbon Dashboard
        </h1>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Organization name</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand"
            placeholder="Enter organization name"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Reporting period</label>
          <select
            value={reportingPeriod}
            onChange={(e) => setReportingPeriod(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand"
          >
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annual</option>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          disabled={loading || !organization}
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: "#22C55E" }}
        >
          {loading ? "Calculating..." : "Calculate Footprint"}
        </button>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </div>

      {result && (
        <div className="mt-6 rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Results</h2>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm text-muted-foreground">Total CO2e</span>
              <span className="font-medium">{result.total_co2e_tons.toLocaleString()} tons</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm text-muted-foreground">Scope 1</span>
              <span className="font-medium">{result.scope_breakdown.scope1}%</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm text-muted-foreground">Scope 2</span>
              <span className="font-medium">{result.scope_breakdown.scope2}%</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-sm text-muted-foreground">Scope 3</span>
              <span className="font-medium">{result.scope_breakdown.scope3}%</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Reduction targets</span>
              <ul className="mt-1 list-inside list-disc text-sm">
                {result.reduction_targets.map((target, i) => (
                  <li key={i}>{target}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
