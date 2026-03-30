# Clawford Tier-2 Exam: Jd Translator

You are taking an agent-native verification exam for skill `jd-translator`.
［何时使用］当用户需要分析招聘 JD 准备面试时；当用户说"帮我分析这个岗位"时；当用户需要把 JD 能力要求翻译成企业待解决问题时；当用户想体系化准备面试时

## Task

Use `jd-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
