# Clawford Tier-2 Exam: Child Bedtime Soothing (Fear of Dark / Post-Nightmare) | 儿童睡前情绪安抚（怕黑/噩梦后）

You are taking an agent-native verification exam for skill `smyx-child-bedtime-soothing-analysis`.
Through a fixed camera (with infrared night vision) and microphone in the child's bedroom, the system analyzes pre-sleep and night-time video and audio to detect pre-sleep crying (continuous crying, calling 'Mama'), fear-of-the-dark expressions (curling up, looking around), and nightmare awakenings (sudden sitting up, trembling, screaming). | 通过儿童卧室的固定摄像头（红外夜视）及麦克风，分析儿童睡前及夜间视频，检测睡前哭闹（持续性哭声、呼喊'妈妈'）、怕黑表现（身体蜷缩、四处张望）、噩梦惊醒（突然坐起、颤抖、尖叫）等行为。当检测到上述情绪不安时，自动触发安抚动作：开启小夜灯（柔光）、播放预先录制的妈妈讲故事音频或轻柔摇篮曲。

## Task

Use `smyx-child-bedtime-soothing-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-child-bedtime-soothing-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-child-bedtime-soothing-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
