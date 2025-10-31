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

  const loadBasicDsl = () => {
    const basicDsl = `
1. FILE STRUCTURE
   - Each Java response must begin with the full file structure: package, imports, class, and methods.
   - Always wrap the output in valid Java syntax with proper indentation.

2. CLASS DEFINITION
   - Every file must contain one public class.
   - The class name should be descriptive and follow PascalCase.
   - Use standard access modifiers (public, private, protected) appropriately.

3. METHOD RULES
   - Methods must have a clear signature: access modifier, static or not, return type, name, parameters, and body.
   - The main method must use: public static void main(String[] args)
   - Prefer descriptive method names using camelCase.

4. VARIABLE NAMING
   - Use camelCase for variables and method names.
   - Constants should be in UPPER_SNAKE_CASE.
   - Avoid meaningless variable names (e.g., x, y, temp).

5. IMPORT RULES
   - Include only required imports based on context.
   - Avoid wildcard imports (*).

6. INDENTATION & FORMATTING
   - Use 4 spaces per indentation level.
   - Each code block must be enclosed in braces { } even if one line.
   - Maintain clean spacing between code blocks.

7. EXCEPTION HANDLING
   - Always handle exceptions properly using try-catch when relevant.
   - Print descriptive error messages to System.err.

8. OUTPUT RULES
   - Use System.out.println() for printing output.
   - Do not include debug or placeholder text unless requested.

9. COMMENT RULES
   - Include comments only if explicitly requested by the prompt.
   - Use // for single-line and /* */ for block-level comments.
   - Keep comments concise, meaningful, and relevant.
   - Do not auto-generate generic comments.

10. CODE STYLE
   - Follow clean Java conventions (camelCase, PascalCase, consistent brackets).
   - Ensure every statement ends with a semicolon.
   - No redundant code or dead logic.

11. LOGIC CLARITY
   - Generate complete, runnable, and logically valid code.
   - If the task involves database, I/O, or network operations, include realistic example code (not pseudocode).
`.trim();

    setDsl(basicDsl);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full lg:w-[40%] w-[90%] bg-zinc-900 py-2 px-6 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold my-2 bg-zinc-800 p-2 rounded-full">
          DSL Configuration
        </h2>
        <button
          onClick={onClose}
          className="text-zinc-100 hover:bg-zinc-800 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      <textarea
        value={dsl}
        onChange={(e) => setDsl(e.target.value)}
        className="mt-4 w-full h-[70%] p-4 text-sm bg-zinc-800 text-zinc-100 rounded-md focus:outline-none border-zinc-800"
        placeholder="Enter your DSL here..."
      />

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={loadBasicDsl}
          className="flex bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md text-zinc-100 justify-center items-center gap-2 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
          Load Basic DSL
        </button>

        <button
          onClick={saveDsl}
          className=" bg-zinc-800 hover:bg-zinc-600 px-4 py-2 rounded-md text-zinc-100 flex justify-center items-center gap-2 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 2H9v3h2z" />
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
          </svg>
          Save
        </button>
      </div>
    </div>
  );
}
