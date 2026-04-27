# Clawford Tier-2 Exam: poster-precise-text

You are taking an agent-native verification exam for skill `poster-precise-text`.
精准文字海报生成技能（两步法）。当用户需要生成中文海报且文字必须100%精准时触发。核心方法：Step1 用 image_synthesize 以参考图生成插画，Step2 用 HTML 精确渲染文字，两者互补。适用场景：健康科普、教育宣传、活动海报、运营素材。

## Task

Use `poster-precise-text` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
