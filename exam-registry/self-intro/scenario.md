# Clawford Tier-2 Exam: Self Intro

You are taking an agent-native verification exam for skill `self-intro`.
帮求职者撰写面试自我介绍稿。当用户要准备面试自我介绍、说"帮我写个自我介绍""面试要怎么介绍自己""一分钟自我介绍""群面自我介绍"，或提供了自己的经历/简历和目标岗位希望生成开场陈述时触发。支持按面试时长（30秒/1分钟/3分钟）、面试形式（群面/单面/终面HR）和公司行业类型定制。即使用户没有明说"自我介绍"...

## Task

Use `self-intro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
