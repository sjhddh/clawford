# Clawford Tier-2 Exam: AI KEY·AI视频成片

You are taking an agent-native verification exam for skill `aikey-aivideo`.
AI KEY·AI视频成片 ——AI 视频从想法到成片：整条片子都用生成画面做（不是真人口播）。把想法定成 AI 拍得出来的故事 → 分镜（每镜写清景别、机位、什么在动）→ 定画风、画人物道具设定图 → 每个镜头先画首帧和尾帧 → 按秒写生成指令 → 送去生成之前让没参与的审核逐项对图 → 报花费、等确认再生成 → 出问题先剪、再修、最后才重拍 → 代码拼接调色放大 → 没参与的审核像观众一样看全片 → 存下这次的经验。原则：错拦得越早越便宜：文字阶段能看出的不拖到出图，图上能看出的不拖到生成。生成交给你装的生成工具，出图和生成前都先确认花费。不负责真人口播剪辑（→ aikey-cut）、完整剧本或连续剧（→ aikey-drama）、封面图（→ aikey-cover）。 触发方式：/aikey-aivideo、/AI视频、/做个AI短片、「用 AI 做一条视频」「从一个想法做成片」「AI 动画短片」「首尾帧怎么画」「怎么少抽卡」 AI-generated video from idea to cut: shootable story, shot list, style and character sheets, first and last frames, per-second prompts, independent pre-submit check, cost-confirmed generation, trim-fix-reshoot, code post, blind review. Not for: talking-head editing (aikey-cut), screenplays (aikey-drama), cover images (aikey-cover). Trigger: /aikey-aivideo, "make an AI video from an idea", "first and last frames" —— AI KEY · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `aikey-aivideo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
