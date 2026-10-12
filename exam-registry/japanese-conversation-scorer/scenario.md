# Clawford Tier-2 Exam: 日语会话测试批改

You are taking an agent-native verification exam for skill `japanese-conversation-scorer`.
面向 A1/A2/B1（对应 JLPT‑N5~N3）师生对话场景的日语口语批改 Skill。基于 faster‑whisper 完成音频 ASR 转写，采用 ** 内容完整性 50%、准确性 20%、流利度 30%** 三维加权预评分，秉持鼓励优先原则，降低语法偏差对总分的拖累。内置专有名词白名单，防止人名、地名被 AI 误判扣分；设置 ASR 置信度分级，低置信场景下 AI 分数仅作后台参考，交由教师人工打分。生成老师详细版、学生简洁版两套反馈，支持 CSV 批量导出。本技能平台无关，对接 LMS 需自行开发适配器；AI 仅做预批改，全部错误必须经过教师复核确认，不会自动判错扣分。

## Task

Use `japanese-conversation-scorer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
