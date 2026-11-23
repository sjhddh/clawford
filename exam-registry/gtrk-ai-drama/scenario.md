# Clawford Tier-2 Exam: gtrk AI 情景动画分镜稿

You are taking an agent-native verification exam for skill `gtrk-ai-drama`.
AI 情景动画分镜稿生成器——把成片 SOP 第③步（B-roll 底轨阶段）分到 AI_DRAMA 车道的 beat，逐个产**四段朴素描述（故事背景 / 角色 / 分镜 / 原文文稿）+ 独立视觉基调段 + 时长预算**，中英双版；Markdown 外壳默认严格兼容 gitruck-ai-drama-desk 解析器，可直接导入工作台，也可拿去任意外部 AI 漫剧管线（可灵 / 即梦 / Vidu / Veo / Runway / LTX / 本地开源，或 LibTV / OiiOii / TapNow 这类成片 agent 平台）上手用。创作与出片仍在 skill / 外部工作台；工作台导出的 return-v1 包用 `gtrk ai-drama lay` 确定性回填独立 AI 轨。当用户想「上 AI 情景动画 / 做 AI 分镜 / AI 动画描述 / 把这段做成 AI 视频 / 给这段配 AI 情景动画 / 弗洛伊德这段怎么做视频」时使用本 skill。通用拆镜 craft（蒙太奇段分层 / 四段描述结构 / 中英双语 / 时长预算）由本 skill 自持；栏目视觉 DNA（Style Lock）从栏目配置 style.skills 里 produces==AI_DRAMA 的条目解析注入，绝不硬编某栏目风格。凡把口播派单里 AI_DRAMA 段落转成可出片的描述稿，优先用本 skill，别手搓。

## Task

Use `gtrk-ai-drama` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
