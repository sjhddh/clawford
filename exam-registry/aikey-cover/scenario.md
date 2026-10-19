# Clawford Tier-2 Exam: AI KEY·封面图制作

You are taking an agent-native verification exam for skill `aikey-cover`.
AI KEY·封面图制作 ——视频封面图制作。用你的人物素材图 + 背景图 + 主题，按要发的平台一次做齐每种比例的封面（竖版 3:4 / 横版 4:3 / 宽屏 16:9 / 长竖版 9:16，可分中英文），每个比例重新排版、不拉伸，逐张核实际像素后按日期归档。封面大字归口 /aikey-title 定稿并过红线；只做图、不发布。不负责想封面写什么字（→ aikey-title）、剪片子（→ aikey-cut）。 触发方式：/aikey-cover、/做封面、/封面图、/aikey-封面图、「做视频封面」「出一套封面」「中英文封面」「B站封面」「Instagram 封面」「各个尺寸的封面」 Video cover images. From a person photo, a background and a topic, produces one cover per aspect ratio each target platform needs (3:4 / 4:3 / 16:9 / 9:16, optionally in two languages), re-laid-out per ratio rather than stretched, each file's real pixels checked, filed by date. Cover text is defined by /aikey-title and passes the red lines. Makes images only, never publishes. Not for: deciding the cover text (aikey-title), editing the video (aikey-cut). Trigger: /aikey-cover, "make video covers", "covers in every size", "bilingual covers" —— AI KEY · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `aikey-cover` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
