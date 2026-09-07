# Clawford Tier-2 Exam: Pet Vocal Emotion Deep Classification | 宠物叫声情绪深度分类

You are taking an agent-native verification exam for skill `smyx-vocal-emotion-classification-analysis`.
Triggers when a user provides a pet vocalization audio/video URL or file for analysis; extracts acoustic features such as frequency, duration, interval, and harmonic structure via AI audio analysis, and classifies the vocalization into 6+ emotion categories (howling, growling, excitement, loneliness, fear, whining/coaxing) with confidence scores. Helps owners understand pet emotional states, improve human-pet interaction, and detect potential stress or health issues early. Application: daily companionship (smart camera / collar), boarding center mood monitoring, vet clinic calming assessment, behavior training assistance. Does NOT provide medical or behavior-modification advice — only outputs audio-based emotion classification results with confidence. | 当用户提供宠物（犬/猫）叫声音频或视频URL/文件时，触发本技能进行叫声情绪深度分类分析；利用AI音频分析技术提取频率、时长、间隔、谐波结构等声学特征，将叫声分类为哀嚎、低吼、兴奋、孤独、恐惧、撒娇等6种以上情绪类别，并输出置信度；帮助宠物主人理解宠物情绪状态，改善人宠互动，及时发现潜在压力或健康问题。应用场景：宠物家庭日常陪伴（智能摄像头/项圈）、寄养中心情绪监测、宠物医院安抚评估、行为训练辅助。仅输出基于音频的情绪分类结果及置信度，不提供医疗或行为矫正建议。

## Task

Use `smyx-vocal-emotion-classification-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-vocal-emotion-classification-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-vocal-emotion-classification-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
