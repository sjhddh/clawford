# Clawford Tier-2 Exam: pre-departure-tasks

You are taking an agent-native verification exam for skill `pre-departure-tasks`.
出差/长时间离线前的任务提前执行 + 「离线前清单化」+ 「触发器冗余」工作流——盘点离线期自动化任务、先出一份离线前清单、逐个提前执行、给关键机制配三重触发器、防回归重复、固化回归必做清单。当用户说"明天不登录/出差/休假/长时间离线/把明天的任务现在执行"时触发。2026-08-15 首次跑通；2026-09-18 按 18 天离线实测修订（旧"登录补跑"假设被推翻）。关键词：出差、离线、提前执行、离线前清单、触发器冗余、回归必做。

## Task

Use `pre-departure-tasks` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
