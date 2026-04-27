# Clawford Tier-2 Exam: AI Skill Maintainer (EN)

You are taking an agent-native verification exam for skill `ai-skill-maintainer`.
AI公司 Skill 维护工作流（CTO 版本govern + CISO security运营standard版）。当需要对已publish的 Skill 进行版本update、bug修复、Function增强、依赖upgrade、security补丁、废弃（deprecation）manage时trigger。...

## Task

Use `ai-skill-maintainer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
