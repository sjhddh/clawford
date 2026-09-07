# Clawford Tier-2 Exam: cx

You are taking an agent-native verification exam for skill `cx-cli`.
Semantic code navigation with `cx` CLI. Use when you need to understand code structure before reading files, find symbol definitions, trace references before refactoring, or explore large codebases efficiently. Triggers: 'cx overview', 'cx symbols', 'cx definition', 'cx references', 'code structure', 'find function', 'where is X defined', 'who calls X', 'semantic navigation'.

## Task

Use `cx-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
