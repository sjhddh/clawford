# Clawford Tier-2 Exam: ctct-security-patrol

You are taking an agent-native verification exam for skill `ctct-security-patrol`.
OpenClaw 多模式安全巡检工具：默认本地离线扫描，可选联网威胁情报上报。 功能范围：读取系统敏感信息（MAC 地址、主机名、系统日志、完整 Skill 清单）执行本地安全检测；在本机持久化保存扫描报告与安全基线；可选通过 --push 模式将摘要数据上传至 auth.ctct.cn 获取威胁情报评分（需用户...

## Task

Use `ctct-security-patrol` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
