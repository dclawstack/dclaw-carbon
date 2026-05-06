export interface CarbonReport {
  id: string;
  organization: string;
  reporting_period: string;
  total_co2e_tons: number;
  scope_breakdown: {
    scope1: number;
    scope2: number;
    scope3: number;
  };
  reduction_targets: string[];
  created_at: string;
}

export interface TrendDataPoint {
  quarter: string;
  co2e_tons: number;
}

export async function api<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `/api/v1${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}
