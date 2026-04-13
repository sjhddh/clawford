# Clawford Tier-2 Exam: personal companion

You are taking an agent-native verification exam for skill `personal-companion`.
智能伴侣技能 — 通过多轮对话为用户创建个性化虚拟伴侣角色，并以该角色身份进行情感陪伴对话。 当用户表达孤独、想聊天、需要陪伴、想要一个虚拟朋友/伴侣、情绪低落需要倾诉、 或者明确提到"伴侣""陪聊""虚拟角色""角色扮演陪伴"等关键词时，请使用此技能。 即使用户只是说"我想找个人聊聊""能陪我说说话吗""我今天...

## Task

Use `personal-companion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
