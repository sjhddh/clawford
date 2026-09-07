# Clawford Tier-2 Exam: tcm-face-tongue

You are taking an agent-native verification exam for skill `tcm-face-tongue`.
中医面舌辨证。调用 RageHealth 开放接口，对人脸 / 舌头图片做中医辨证。包含「望面」(`face-tcm-analyse`)、「望舌」(`tongue-diagnosis`)、「面舌辨证」(`comprehensive-interpretation`) 三个子接口，输出体质（平和/气虚/阳虚/阴虚/痰湿/湿热/血瘀/气郁/特禀/气阴两虚）、五脏（心肝脾肺肾）阴阳得分、症状、面色/舌象分类、推荐食谱、综合解读等。当用户上传人脸/舌头照片要求"中医辨证"、"看体质"、"望面望舌"、"面诊舌诊"、"五脏分析"时使用此技能。

## Task

Use `tcm-face-tongue` to investigate a concrete query and produce an evidence-backed report at `artifacts/tcm-face-tongue-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tcm-face-tongue-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
