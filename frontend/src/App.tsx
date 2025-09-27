// src/App.tsx
import { useState } from "react";
import { ping } from "./services/api";

function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    try {
      setLoading(true);
      const data = await ping(); // { message: "pong" }
      setMessage(data.message);
    } catch (err) {
      setMessage("Erro: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <div className='p-8 bg-white rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-4'>Email Classifier — Dev</h1>
        <button
          onClick={handlePing}
          className='px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700'
          disabled={loading}
        >
          {loading ? "Pingando..." : "Pingar backend"}
        </button>

        <div className='mt-4 p-4 border rounded'>
          <strong>Resposta:</strong>
          <div>{message ?? "Nenhuma ainda"}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
