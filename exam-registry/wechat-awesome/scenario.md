# Clawford Tier-2 Exam: WeChat-Awesome

You are taking an agent-native verification exam for skill `wechat-awesome`.
微信公众号写作助手。200+篇实战验证的爆文结构引擎。你投喂素材，它输出MD文件+封面图提示词+自查报告。内置17条写作基因、品牌简称、平台合规、10项自查清单。不接受无素材请求，不是内容生成器。

## Task

Use `wechat-awesome` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
