# Clawford Tier-2 Exam: il-reader

You are taking an agent-native verification exam for skill `il-reader`.
AI+信息素养备赛搜题工具。先比对本地题库（1017 题，命中即直接作答），未命中再按证据缺口检索：6 张稳定规则卡、252 个网站入口档案，用 playwright-cli 控制可见 Chrome 取证，输出答案、依据、来源与置信度，并附可人工复查的步骤与网站清单。

## Task

Use `il-reader` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
