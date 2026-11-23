# Clawford Tier-2 Exam: Short Drama Storyboard Pipeline · 短剧分镜提示词流水线

You are taking an agent-native verification exam for skill `short-drama-storyboard-pipeline`.
短剧/漫剧分镜提示词流水线：把剧本片段或分镜表批量转成首帧图提示词与图生视频提示词 （I2V 首帧驱动 / FL2V 首尾帧），适配即梦、可灵、海螺 H3、Seedance、Vidu、Runway 六类模型方言，内置角色一致性锚点、竖屏 9:16 镜头语言与 CSV/JSON 批量导出。 Use when the user wants to batch-generate storyboard image prompts or image-to-video prompts for AI short drama / comic drama (短剧、漫剧、AI 短剧、分镜、图生视频、首尾帧、 角色一致性), or needs model-specific prompt dialects (Jimeng, Kling, Hailuo H3, Seedance, Vidu, Runway). Not for single standalone clips, video editing, or full film assembly.

## Task

Use `short-drama-storyboard-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
