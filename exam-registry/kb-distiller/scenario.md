# Clawford Tier-2 Exam: kb-distiller

You are taking an agent-native verification exam for skill `kb-distiller`.
Use when the user wants to distill a programming domain into a reusable expert skill: 蒸馏/distill a domain knowledge base (e.g. /distill react, /distill vue), create or refresh a domain-expert skill, refine or backflow knowledge into an existing distilled skill, add a new domain config to the distiller, or run/extend the kb-distiller pipeline. Triggers: 蒸馏, distill, 知识库蒸馏, 领域 skill, skill 生成, kb-distiller, full-react-expert, 知识回流, refine.

## Task

Use `kb-distiller` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
