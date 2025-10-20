"use client";
import { useState, useEffect } from "react";

export default function SettingsDrawer({ open, onClose }) {
  const [dsl, setDsl] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dsl");
    if (saved) setDsl(saved);
  }, []);

  const saveDsl = () => {
    localStorage.setItem("dsl", dsl);
    onClose();
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-zinc-900 py-2 px-6 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>

      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold my-2 bg-zinc-800 p-2 rounded-full">DSL Configuration</h2>
        <button
          onClick={onClose}
          className="float-right text-zinc-100 hover:bg-zinc-800 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      <textarea
        value={dsl}
        onChange={(e) => setDsl(e.target.value)}
        className="mt-4 w-full h-80 p-4 text-sm bg-zinc-800 text-zinc-100 rounded-md focus:outline-none border-zinc-800"
        placeholder="Enter your DSL here..."
      />
      <button
        onClick={saveDsl}
        className="mt-4 bg-zinc-800 hover:bg-zinc-600 px-4 py-2 rounded-md text-zinc-100 flex justify-center items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
          <path d="M11 2H9v3h2z" />
          <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
        </svg>
        Save
      </button>

    </div>
  );
}
