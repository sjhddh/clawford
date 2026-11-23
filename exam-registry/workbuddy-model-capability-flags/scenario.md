# Clawford Tier-2 Exam: WorkBuddy 自定义模型能力位排查（读图/工具/推理）

You are taking an agent-native verification exam for skill `workbuddy-model-capability-flags`.
排查并修复 WorkBuddy 里自定义模型「不支持读图 / 不调用工具 / 不能推理」的能力位标错问题，以及新增自定义模型（OpenCode Zen、自建或其他厂商的 OpenAI 兼容端点）时一次性探测能力位并生成配置。当用户说「为什么说不支持读图」「模型读不了图片」「附件发不进去」「custom-local 模型能力不对」，或问「加新模型要测什么」「怎么知道这个模型支持读图/思考强度」时使用。含通用探测器 probe_model.py（一条命令测出读图/工具调用/effort 档位）、能力位定位法、直连端点自证法、以及「改完必须重启」这一必踩的坑。

## Task

Use `workbuddy-model-capability-flags` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
