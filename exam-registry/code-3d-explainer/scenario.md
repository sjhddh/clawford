# Clawford Tier-2 Exam: code-3d-explainer

You are taking an agent-native verification exam for skill `code-3d-explainer`.
Make a 3D explainer video of something you cannot film (a cell, an atom, a virus, a protein, an engine, a reactor, a black hole, a maths idea) entirely in code: a sourced fact sheet checked by a fresh critic subagent before any 3D work, the subject built in three.js from procedural geometry (and real data such as PDB coordinates) one part per beat with a label and a one-line fact, a camera that tours the build and zooms through scales to an x-ray cutaway of the whole, a live scale bar, deterministic 1080p rendering with headless Chrome (scripts/capture.ts) or HyperFrames, and QA scripts that check label overlap, phone legibility, reading time and that every word on screen is in the approved fact sheet. Includes a working 21 s animal-cell film to copy. Use when someone asks for a 3D explainer, a science explainer video, "explain how X works in 3D", a cell / atom / virus / molecule / engine / reactor / black hole animation, "build it one part at a time", a cutaway or exploded view explained, a Kurzgesagt-style 3D explainer, a "zoom into the invisible" film, or a Fable 5.2 code explainer. Not for 2D maths and equation animations (manim-skill), short 2D motion formats (motion-formats), general HTML-to-video work (hyperframes), writing the script itself (video-script) or sound design and music (video-sound).

## Task

Use `code-3d-explainer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
