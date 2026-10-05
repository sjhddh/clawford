# Clawford Tier-2 Exam: local-material-batch

You are taking an agent-native verification exam for skill `local-material-batch-skill`.
通过收件箱、dry-run、运行和清单输出流程，把已下载到本地的视频、音频、图片和文本笔记转换成可复用文本资产。适用于用户想要一个本地优先、不中台抓取的平台无关素材 intake 流程。

## Task

Use `local-material-batch-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
