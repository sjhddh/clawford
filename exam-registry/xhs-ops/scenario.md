# Clawford Tier-2 Exam: Xiaohongshu Ops

You are taking an agent-native verification exam for skill `xhs-ops`.
小红书端到端运营：账号定位、选题研究、内容生产、发布执行、数据复盘。 Use when: (1) 用户要写小红书笔记/帖子, (2) 用户说"发小红书"/"写个种草文"/"出一篇小红书", (3) 用户讨论小红书选题/热点/爆款分析/竞品对标, (4) 用户提到账号定位/人设/内容方向规划, (5) 用户要求生成...

## Task

Use `xhs-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
