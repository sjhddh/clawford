# Clawford Tier-2 Exam: 发布前侵权审核 Release Infringement Audit

You are taking an agent-native verification exam for skill `release-infringement-audit`.
发布前侵权/法律风险审核。当用户说「发布前审一下」「有没有侵权风险」「能发到 npm/ClawHub/GitHub 吗」「release audit」时使用。扫描开源许可证兼容性（GPL 传染/CC-NC）、复制的第三方代码、文档图片字体素材、商标冲突、密钥泄漏五大类，输出结构化分级报告。判定锚定 SPDX 与 FSF/CC 官方分类。

## Task

Use `release-infringement-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
