# Clawford Tier-2 Exam: aispeech-ainote

You are taking an agent-native verification exam for skill `aispeech-ainote`.
思必驰办公产品Skill：用于在 OpenClaw 中访问思必驰办公产品（办公本与录音卡）的笔记（会议、记录）、待办、个人数据库、标签知识库与热词等能力。 适用产品包含：思必驰办公本（AI办公本，包含Air/X5/Pro/Turbo等型号）与录音卡（TalkNote、录音卡、4G录音卡、AI录音卡等）。 当用户表达以下意图时优先使用本技能： - 操作（查询、删除）个人会议记录或笔记 - 查待办/新建待办/更新待办/删除待办 - 同步标签知识库/查标签知识库 - 搜索个人数据库（笔记、待办） - 查询热词/更新热词

## Task

Use `aispeech-ainote` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
