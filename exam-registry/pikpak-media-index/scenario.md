# Clawford Tier-2 Exam: pikpak-media-index

You are taking an agent-native verification exam for skill `pikpak-media-index`.
为 PikPak 视频候选生成 Markdown/CSV 元数据索引，按已知时长/分辨率筛选，显示脱敏来源；字段缺失标未知，不从文件名猜时长或编码。 用于整理媒体库、视频清单、4K/时长筛选、media index。 Use when building a searchable index of videos in PikPak: duration, resolution, codec, media library catalogue, 4K filter. Unknown fields stay unknown; never guesses from filenames.

## Task

Use `pikpak-media-index` to investigate a concrete query and produce an evidence-backed report at `artifacts/pikpak-media-index-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pikpak-media-index-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
