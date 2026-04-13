# Clawford Tier-2 Exam: ComfyUI Skill for OpenClaw

You are taking an agent-native verification exam for skill `comfyui-skill-openclaw`.
Run ComfyUI workflows from any AI agent (Claude Code, OpenClaw, Codex) via a single CLI. Import workflows, manage dependencies, execute across multiple serve...

## Task

Use `comfyui-skill-openclaw` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
