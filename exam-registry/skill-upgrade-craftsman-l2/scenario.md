# Clawford Tier-2 Exam: 技能升级巧匠L2

You are taking an agent-native verification exam for skill `skill-upgrade-craftsman-l2`.
面向已有基础结构但不够稳定、放进技能群后容易调错或打架的AI技能，进行系统化升级改造。执行五机制会诊（注册格式合规、入口匹配、去打架、衔接契约、命名记忆），按六条标准修法逐项改造。当用户说"这个技能调不对""多个技能互相抢""帮我做L2升级""这个技能在技能群里不行"时调用。

## Task

Use `skill-upgrade-craftsman-l2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
