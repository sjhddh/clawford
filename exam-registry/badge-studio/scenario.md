# Clawford Tier-2 Exam: badge-studio

You are taking an agent-native verification exam for skill `badge-studio`.
Generate ORCID-style fresh badges (20px, color-coded, thin type) for any project. 为任意项目生成 ORCID 清新风格徽章（20px、四色、细字）。 适用场景：当需要为项目或技能生成 SVG 徽章时使用本技能；触发词：badge、studio、徽章、VERIFIED。

## Task

Use `badge-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
