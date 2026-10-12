# Clawford Tier-2 Exam: meme-digger

You are taking an agent-native verification exam for skill `meme-digger`.
网络梗考古与科普（刨根问底式）。连接贴吧（Tieba）与 B 站（Bilibili），针对用户问到的网络梗/抽象话/热梗，读取 B 站搜索、视频详情与评论区（含评论里的梗图），从评论中提取线索做发散式搜索，把 B 站、贴吧、评论、梗图、来源考证分文件收集，最后整合成一份带文字说明、梗图、来源介绍的综合科普报告。当用户问"这是什么梗 / 这个梗什么来历 / 这个说法哪来的"时使用。

## Task

Use `meme-digger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
