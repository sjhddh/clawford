# Clawford Tier-2 Exam: pi-jev 决策层

You are taking an agent-native verification exam for skill `pi-jev`.
决策层技能（Jev 式自动选技能 + 模型档位路由 + 使用学习）。当用户不确定该用本技能包里的哪个技能、需要自动推荐技能与脚本命令、需要按任务类型建议模型档位（快/标准/深度）、需要周复盘各技能使用频率并固化经验时使用。与 ip-peipao-9clients、yihaiyoudao、qingchuang-shizhan、zhanlue-peipao 四个技能联动，是新任务的统一入口。

## Task

Use `pi-jev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
