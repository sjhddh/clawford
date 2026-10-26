# Clawford Tier-2 Exam: cue-meeting-minutes-cn

You are taking an agent-native verification exam for skill `cue-meeting-minutes-cn`.
企业会议纪要：给我会议录音（本地文件，当前实证边界=单件 ≤256MiB（闸按字节不按时长），以通道返回为准）与可选材料，产出五段纪要——基本信息、逐字带时间锚、话题分段（归类是笔记法非原文）、决策与待办每条挂原话锚、待核清单。适合「这段录音整理成纪要」「会是哪几件事谁负责」「纪要逐条对回原话」等场景。Do NOT use for: 实时转写、单件超 256 MiB 的整场录音直投（闸按字节不按时长）、替你把纪要改写成「更漂亮」的版本。Triggers: 会议纪要 / 录音整理 / 谁负责什么 / 待办提取 / 逐字回查； meeting minutes / audio to notes

## Task

Use `cue-meeting-minutes-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
