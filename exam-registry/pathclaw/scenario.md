# Clawford Tier-2 Exam: PathClaw

You are taking an agent-native verification exam for skill `pathclaw`.
通过华银康集团 PathClaw 服务对病理切片进行泛癌 AI 辅助诊断，适用于病理科医生或研究人员在收到切片图像后的初步筛查场景。当用户提供 .svs 格式的病理切片文件时，自动完成：认证登录、提交诊断任务、轮询推理结果、返回诊断结论及热力图链接。触发条件：用户请求分析病理切片、进行泛癌预测、肿瘤筛查、或提到...

## Task

Use `pathclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
