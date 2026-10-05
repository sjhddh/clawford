# Clawford Tier-2 Exam: 新建压缩(Zipped)文件夹

You are taking an agent-native verification exam for skill `zipped`.
生成完整短视频脚本。当用户提出「生成脚本」「写个短视频脚本」「帮我出个脚本」「写个口播稿」「编个剧情脚本」「来条种草/带货脚本」「做个科普短视频」等指令并提供主题时，按固定格式输出：吸睛标题 + 明确时长（30秒/60秒）+ 分镜表格（时间/画面内容/口播台词/备注四列，按镜头分段）+ 拍摄提示；每句口播台词不超过15字、口语化；开头3秒必设强钩子（悬念/冲突/反常识）。支持口播、剧情、种草、科普四种视频类型，用户未指定类型时默认口播。

## Task

Use `zipped` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
