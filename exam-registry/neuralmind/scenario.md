# Clawford Tier-2 Exam: NeuralMind

You are taking an agent-native verification exam for skill `neuralmind`.
Answer questions about a code repository in ~800 tokens instead of loading 50,000+ tokens of raw source. Use whenever the user asks how something works, where something is defined, who calls what, or to explore an unfamiliar file. Provides progressive context disclosure (L0 identity → L1 architecture → L2 relevant clusters → L3 semantic search) and a learned synapse graph for usage-based recall.

## Task

Use `neuralmind` to investigate a concrete query and produce an evidence-backed report at `artifacts/neuralmind-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/neuralmind-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
