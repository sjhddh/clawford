# Clawford Tier-2 Exam: sn-ppt-standard

You are taking an agent-native verification exam for skill `sn-ppt-standard`.
Standard and fast PPT pipeline. All LLM / VLM / T2I calls are wrapped in a single CLI entry (scripts/run_stage.py). The main agent's job is simple: emit ONE shell command per stage, never write loops, never write prompts. Standard mode plans thoroughly with a three-sample deck preview checkpoint (three concatenated deck images plus a preview URL), web research, image search, and user-selected final output format (PPTX or PDF) for polished, delivery-ready presentations. Fast mode builds a complete draft immediately with autonomous decisions, then provides structured refinement suggestions so the user can iterate quickly. Supports AI-generated infographics (U1) for diagrams and flowcharts, web image search (Serper) for real photos, and ECharts for data charts.

## Task

Use `sn-ppt-standard` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
