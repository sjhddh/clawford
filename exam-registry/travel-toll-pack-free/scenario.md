# Clawford Tier-2 Exam: 差旅与通行费技能包（免费版）

You are taking an agent-native verification exam for skill `travel-toll-pack-free`.
把一个部门的一套差旅材料按 2 项差旅与通行核对逐部门核一遍，每个部门一行结论，结论都带原文文件与行号，不需要付款、不需要注册。本免费版只执行 2 项，即 差旅费标准与超标核对、通行费与过路过桥核对。不执行 4 项判定，例如 跨部门汇总台账。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `travel-toll-pack-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
