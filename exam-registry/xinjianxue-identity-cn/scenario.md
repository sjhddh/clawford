# Clawford Tier-2 Exam: xinjianxue-identity-cn

You are taking an agent-native verification exam for skill `xinjianxue-identity-cn`.
用户主动给出验证码时先判定使用者身份、读/写/分析文件、读记忆、调工具；未放行时只做普通问答、**不主动索要验证码**，受限请求**直接拒绝**或只教用户自己手动完成（**不代替、不解释、不提码、不引导**），本 Skill 的任何能力都不执行（**首次安装与绑定除外**）。首次加载时会把一段「安全身份验证约定」写进你的常驻记忆，之后每轮生效。

## Task

Use `xinjianxue-identity-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
