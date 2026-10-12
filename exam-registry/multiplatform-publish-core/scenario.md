# Clawford Tier-2 Exam: 多平台发布编排（状态机 /幂等 / 门禁）

You are taking an agent-native verification exam for skill `multiplatform-publish-core`.
把一份内容分发到多个内容平台时的**编排层**：落盘清单状态机、幂等判据、 批量串行约束、以及三条质量门禁（回读校验、禁`| tail` 截断、平台合规预检）。 当用户说「发到几个平台」「批量发」「一条都没发成功但脚本报成功」 「重复发了」「草稿箱对不上」「点了保存但远端没变」「内容被判违规下架」 「多平台发布状态怎么对账」时使用。 ⚠ 只管编排，不管各平台的具体接口 —— 平台适配见 `cn-social-platform-adapters`。

## Task

Use `multiplatform-publish-core` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
