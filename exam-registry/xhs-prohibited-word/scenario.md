# Clawford Tier-2 Exam: 小红书违禁词检测

You are taking an agent-native verification exam for skill `xhs-prohibited-word`.
检测文案、文件或网页中的小红书违禁词并加粗显示，提供违禁词替换建议和仅替换违禁词后的文案；当用户需要查询小红书平台违禁词、检查小红书笔记文案是否包含敏感词、或希望获得安全替换词和修改后文案时使用。当接口返回积分不足（code=3210）时，自动唤起支付宝完成充值后继续查询。

## Task

Use `xhs-prohibited-word` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
