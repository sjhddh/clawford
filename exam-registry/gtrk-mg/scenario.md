# Clawford Tier-2 Exam: gtrk MG 动态图铺轨

You are taking an agent-native verification exam for skill `gtrk-mg`.
MG 动态图颗粒铺轨器——成片 SOP 第 ⑤ 步（**最后叠上**），在 B-roll 底轨三源（影视素材 / 本地素材 / AI 情景片段）全部铺齐、且 ④ 全局抽帧检查构图通过之后，把栏目的 html-particle 动态图颗粒（透明叠加 / 满屏底层）叠铺到已定稿的底轨之上。先由栏目 MG 生产 skill 按派单各槽位产颗粒，再驱动 `gtrk mg` 命令 lint + 铺进 `.gtrk` 工程的 beat_track。当用户想「铺 MG 颗粒 / 上动态图 / 铺动效 / 给这段配动画铺进工程 / 把 MG 派单铺轨 / 消费 dispatch.mg」时使用本 skill。凡涉及把 MG 动态图颗粒铺进已剪好的成片工程，优先用本 skill 驱动 gtrk CLI，别让用户自己去终端敲 `gtrk mg`。

## Task

Use `gtrk-mg` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
