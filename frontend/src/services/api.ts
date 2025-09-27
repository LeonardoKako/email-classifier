// src/services/api.ts
export const API_BASE = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function ping() {
  const res = await fetch(`${API_BASE}/ping`);
  if (!res.ok) throw new Error("Erro ao pingar API");
  return res.json();
}
