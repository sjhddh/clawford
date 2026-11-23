# Clawford Tier-2 Exam: naming-machine

You are taking an agent-native verification exam for skill `naming-machine`.
给宠物、项目、WiFi、播客、群聊、产品、活动、账号起名。按“正经 / 好玩 / 有梗”三档各出 3 个名字，每个名字配一句理由和一个避坑提示。强触发词为“起名器”“帮我起名”“起个名字”。当用户说“给猫起个名”“WiFi 叫什么好”“播客取名”时也可触发。轻量、卡片式输出，内置侵权、低俗、歧视、钓鱼 WiFi、恶意群名等合规边界。

## Task

Use `naming-machine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
