# Clawford Tier-2 Exam: de-bloat 至简

You are taking an agent-native verification exam for skill `de-bloat`.
用于任何会产生或修改代码的任务：写代码、新增功能、加接口、改代码、重构、修 bug、写脚本，涉及 C++、Go、Java、Python、Node.js 时同样适用。用户说「简单点」「别过度设计」「复用已有的」「抽一下公共方法」「按官方规范写」「至简」「de-bloat」「YAGNI」，或代码里出现重复造轮子、复制粘贴的相似代码、层层 try-catch、空兜底、为未来预留的抽象时，即使没有点名也应使用。

## Task

Use `de-bloat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
