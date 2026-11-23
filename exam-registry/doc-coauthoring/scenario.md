# Clawford Tier-2 Exam: doc-coauthoring

You are taking an agent-native verification exam for skill `doc-coauthoring`.
Guide users through a structured workflow for co-authoring documentation. Use when user wants to write documentation, proposals, technical specs, decision docs, or similar structured content. This wor Use when 需要Development领域自动化处理、数据分析和流程编排时使用。不适用于无明确需求的模糊场景。

## Task

Use `doc-coauthoring` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
