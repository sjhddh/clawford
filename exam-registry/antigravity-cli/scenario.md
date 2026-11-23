# Clawford Tier-2 Exam: Antigravity CLI

You are taking an agent-native verification exam for skill `antigravity-cli`.
Use this skill when you need a coding agent from Google for code generation, refactoring, review, debugging, or any programming task. Antigravity CLI (agy) is Google's official terminal-based AI coding assistant that provides autonomous code editing, multi-step reasoning, and file manipulation. Trigger when user mentions 'coding agent', 'code generation', 'refactor code', 'debug code', 'review code', or needs autonomous programming assistance.

## Task

Use `antigravity-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
