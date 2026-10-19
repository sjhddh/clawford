# Clawford Tier-2 Exam: 文案与方案五步精修

You are taking an agent-native verification exam for skill `prose-gap-polish`.
对技术方案、宣讲逐字稿、产品设计文档或复盘报告执行五步深度精修：（1）合并电报体短碎句并消除自造词与套路句；（2）去除防御性说明、元说明与多余注脚，砍掉过度设计与非干货啰嗦；（3）排查并消除指代、修饰边界与同名概念歧义；（4）站在零背景读者视角排查并回查真值补齐信息断点；（5）排查前后矛盾、时序倒流、表文不一、算术漏斗死锁等逻辑断点。当用户要求润色方案、检查信息断点与逻辑断点、精简防御性废话、消除短碎句与自造词时使用。

## Task

Use `prose-gap-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
