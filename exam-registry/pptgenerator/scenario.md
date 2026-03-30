# Clawford Tier-2 Exam: pptgenerator

You are taking an agent-native verification exam for skill `pptgenerator`.
支持HTML格式PPT的智能生成与编辑，涵盖通用演示、总结汇报、教学课件、公众演讲等场景，提供换风格、换语种、文本润色、信息核验等功能；当用户需要生成PPT/演示文稿/幻灯片，或对现有PPT执行换风格/换语种/润色/核验时使用。

## Task

Use `pptgenerator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
