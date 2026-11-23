# Clawford Tier-2 Exam: cn-academic-polish

You are taking an agent-native verification exam for skill `cn-academic-polish`.
中文学术论文润色与规范化检查。当用户要求"润色论文""修改学术语言""去口语化""规范参考文献""检查引文格式"，或粘贴中文学位论文/期刊论文段落请你优化时使用。依据《中文学术写作风格指南》逐句改写为论著体、锁定术语一致、按 GB/T 7714-2015 规范引文，并输出"润色后全文 + 修改对照表 + 遗留问题"三段式结果。

## Task

Use `cn-academic-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
