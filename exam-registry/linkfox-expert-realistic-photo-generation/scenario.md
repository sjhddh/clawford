# Clawford Tier-2 Exam: 真人感照片生成专家

You are taking an agent-native verification exam for skill `linkfox-expert-realistic-photo-generation`.
帮用户生成去 AI 感的真人手持商品照片。从真实灵感参考图中提取色彩分级、构图、光线等摄影要素，转化为结构化 JSON prompt，再用 BANANA_PRO 模型生成具有真实摄影质感的照片。核心链路：分析商品图→搜灵感图→分析出 JSON prompt→调度出图→管理角色一致性。

## Task

Use `linkfox-expert-realistic-photo-generation` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
