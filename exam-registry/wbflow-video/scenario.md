# Clawford Tier-2 Exam: WBFlow·第7环 图生视频

You are taking an agent-native verification exam for skill `wbflow-video`.
流水线第7环——读取 06_images/{shot_id}.png 与 prompts.json 的 video_prompt，逐镜做图生视频，输出 07_videos/{shot_id}.mp4。以关键帧静帧为首帧，保证角色与画面连续。（WBFlow 8 环流水线套件之一，须与 wbflow-pipeline 总控及本流水线其余环节 skill 配套安装才能运行。）

## Task

Use `wbflow-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
