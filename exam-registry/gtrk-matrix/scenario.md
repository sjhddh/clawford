# Clawford Tier-2 Exam: gtrk B-roll 检索铺轨

You are taking an agent-native verification exam for skill `gtrk-matrix`.
B-roll 检索铺轨编排手册——成片管线里第一个铺的车道（SOP ③ B-roll 底轨阶段）。消费拆分派单的 FILM_BROLL 队列（`dispatch.film_broll`），检索素材并在工程里平铺 N 条候选 B-roll 轨，供用户在 opencut 里用轨道小眼睛切换对比、挑选/调整；确认后交棒同阶段的 AI 情景片段腿（`/gtrk-ai-drama`，车道非空时）。命令族还含：**本地素材模式**（`matrix index` 建索引、`--local` 用自己的素材铺轨，**视频本体不上云**，只送抽帧图；选中上轨的图片会上云转运镜，`--no-image-broll` 可排除）、**按需理解**（`matrix describe`，为排序提供画质与看点信号）、**源时间窗检索**（`--source-window`，电影解说式逐段推进）、**通用三态素材检索**（`matrix material`：clip/image/audio 整条素材下载向，BGM/配图主场）、**plan 可编辑通路**（agent 改 plan 后 `matrix lay` 消费）。当用户想「铺 B-roll / 检索素材 / 找空镜 / 给空镜配画面 / 填 B-roll 候选 / 单独搜个词补个空槽 / 找 BGM / 搜配乐 / 搜张配图 / 用我自己的素材铺 B-roll / 给素材文件夹建索引 / 理解一下这些素材能不能用 / 把这堆素材剪成片 / 影视解说配画面」时使用本 skill。凡涉及把素材检索并铺进工程，优先用本 skill 驱动 gtrk CLI 的 `matrix` 命令族，别让用户自己去终端敲、也别手搓检索。

## Task

Use `gtrk-matrix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
