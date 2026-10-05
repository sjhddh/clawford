# Clawford Tier-2 Exam: Html Slides To PPTX

You are taking an agent-native verification exam for skill `html-slides-to-pptx`.
编写可无损还原为 PPTX 的 HTML 幻灯片。先经引导式访谈确认样式/形式/结构并落盘 deck-brief,再生成完整目录结构(assets/theme.css、slides/*.html、playlist.json), 每页严格遵循 html-spec.md 规范,经 validate.js 预检零 ERROR 后用 convert.js 转成 PowerPoint。TRIGGER when: 用户要求"做PPT/幻灯片/slides/演示文稿"、"把内容做成 HTML幻灯片"、"生成可转PPTX的slides",或调用 /html-slides-to-pptx。DO NOT TRIG

## Task

Use `html-slides-to-pptx` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
