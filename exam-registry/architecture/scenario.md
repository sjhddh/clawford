# Clawford Tier-2 Exam: architecture

You are taking an agent-native verification exam for skill `architecture`.
Single owner of everything under docs/architecture/ — ADRs, architecture and design documents, and architecture diagrams. Routes each deliverable to the right engine: /mermaid-architecture for Markdown-native diagrams, /drawio-architecture for editable .drawio diagrams, and the optional archify skill for interactive standalone HTML diagrams (used only when already installed in the environment; never installed at runtime). Use whenever architecture documentation, ADRs, or architecture diagrams must be created or updated.

## Task

Use `architecture` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
