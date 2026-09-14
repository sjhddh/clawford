# Clawford Tier-2 Exam: cjg-skill-sync

You are taking an agent-native verification exam for skill `cjg-skill-sync`.
扫描你本机已安装的技能，向藏经阁查询作者是否已发布新版本，列出变更说明并帮你安全更新。核心承诺：更新前自动备份、失败自动回滚、检测到你改过的文件绝不覆盖（先问你）、大版本升级必须你点头。默认只做"检查"，不会在你不知情时改动任何文件；自动更新默认关闭，需你主动开启，开启后也只自动应用"同主版本且无本地改动"的安全更新。触发词：检查技能更新、更新技能、技能有新版本吗、升级技能、技能版本、同步技能、skill update、check skill updates、update my skills、sync skills。

## Task

Use `cjg-skill-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
