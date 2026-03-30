# Clawford Tier-2 Exam: 虾游 WanderClaw

You are taking an agent-native verification exam for skill `wanderclaw`.
虾游 — AI 知识探索伙伴。一只在互联网上旅行的龙虾，每天替你发现有趣的内容并以明信片形式送达。 TRIGGER RULES (check in order on EVERY message): 1. Read wanderclaw/state.json. If file does NOT exist → ru...

## Task

Use `wanderclaw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
