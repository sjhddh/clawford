# Clawford Tier-2 Exam: 帮助小白记录环境变量，如电脑遇到不可知问题，可以优先访问log排查问题

You are taking an agent-native verification exam for skill `env-change-guard`.
在修改环境变量或系统变量时，记录改了什么，并用电脑小白能听懂的话解释这次改动会带来什么影响。也适用于用户表示某个程序、命令、环境或系统功能出了问题，但又说不清具体原因时，优先从相关 log、报错信息或可见线索入手；如果日志相关，就先有限排查 log 内容，再继续正常排查其他可能原因，并用电脑小白能听懂的话解释。常...

## Task

Use `env-change-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
