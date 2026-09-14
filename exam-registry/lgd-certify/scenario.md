# Clawford Tier-2 Exam: lgd-certify

You are taking an agent-native verification exam for skill `lgd-certify`.
当用户要『给 AI 产物发可信护照 / 做三律合规认证 / 生成可挂载徽章』时用。这是市场唯一把『有籍护照签发 → 有证证据链 → 有门禁签发 → 可挂载徽章』做成闭环的 CLI：register 签发算法护照(三锚一票同源+SHA-256指纹)、evidence 扫六类证据工件链式哈希、gate 三律评审 PASS/FAIL 并签发认证 + medxpert.cn 徽章嵌入码。LGD 三律旗舰执行器，对标调研证实治理生态全是单点工具、无此闭环。触发词：LGD 认证、三律闭环、算法护照、可信徽章、有籍有证有门禁认证、护照签发。

## Task

Use `lgd-certify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
