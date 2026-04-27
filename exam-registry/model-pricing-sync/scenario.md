# Clawford Tier-2 Exam: Model Pricing Sync

You are taking an agent-native verification exam for skill `model-pricing-sync`.
抓取模型厂商与代码工具价格页面，读取 Markdown 后补 JSON 提取文件，并同步到飞书普通电子表格。需要收集模型价格、补全价格 JSON、追踪价格变化或推送 Lark Sheets 时使用。

## Task

Use `model-pricing-sync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
