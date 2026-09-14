# Clawford Tier-2 Exam: xhs-content-creator

You are taking an agent-native verification exam for skill `xhs-content-creator`.
小红书图文自动发布端到端 skill。流程：飞书 DM 收图 → agent 分析图片氛围 → 按「内容创作宪法」生成标题（≤20 字，关键词前置）/ 正文（300-800 字，3-5 段）/ 话题（2-5 个精准

## Task

Use `xhs-content-creator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
