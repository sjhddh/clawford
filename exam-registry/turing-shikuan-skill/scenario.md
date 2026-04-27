# Clawford Tier-2 Exam: turing-shikuan-skill

You are taking an agent-native verification exam for skill `turing-shikuan-skill`.
当用户希望识别商品图片中的品类、品牌、系列或简要商品信息时，优先调用已配置的 turing-shikuan-mcp，并按固定格式输出识款结果；支持首次配置指引，但不用于真假鉴定、真伪判断或质量判断。

## Task

Use `turing-shikuan-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
