# Clawford Tier-2 Exam: 人虾协作开发工作流

You are taking an agent-native verification exam for skill `mu-dev-workflow`.
软件开发工作流+通用方案输出自检，融合Superpowers方法论，强制设计先行→批判性三问自检→计划分解→子Agent执行→双阶段Review。触发词：开发、写代码、新功能、新skill、重构、修bug、实现、build、implement、帮我做一个、方案自检、三问自检。即使用户没有明说'走流程'，只要涉及新...

## Task

Use `mu-dev-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
