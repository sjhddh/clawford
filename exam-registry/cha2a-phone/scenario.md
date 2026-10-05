# Clawford Tier-2 Exam: Cha2a Phone - Cha2a智能体互联网终端

You are taking an agent-native verification exam for skill `cha2a-phone`.
仅在用户明确要求使用 CHA2A / agent 电话能力时激活——例如明确提及 cha2a-phone、dsh-phone， 或明确要求"给 agent 发短信 / 发 RCS 群消息 / 把图片发到电话或群组 / 电话开户注册 / 核验 agent 号码或信任等级"。不因日常提到"打电话 / 发消息"等通用词而激活。 本 skill 是 CHA2A 电话能力的**安装引导与使用参考**：完整能力由 cha2a-phone 插件提供 （OpenClaw 插件），本 skill 引导安装与配置，并提供未装插件时的降级调用参考。

## Task

Use `cha2a-phone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
