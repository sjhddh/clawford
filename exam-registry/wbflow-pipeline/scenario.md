# Clawford Tier-2 Exam: WBFlow·多Agent视频流水线总控

You are taking an agent-native verification exam for skill `wbflow-pipeline`.
流水线总控——按顺序串联 story→script→storyboard→(定妆char)→prompt→image→video→assemble 八个环节，只调度与校验，不产出任何内容。用于一句话驱动整套 AI 漫剧/短视频生产。（WBFlow 由 9 个 skill 组成：本总控 + story/script/storyboard/prompt/char/image/video/assemble 八环，须全套配套安装，单独安装无法运行。）

## Task

Use `wbflow-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
