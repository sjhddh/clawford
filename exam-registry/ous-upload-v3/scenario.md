# Clawford Tier-2 Exam: ous-upload-v3

You are taking an agent-native verification exam for skill `ous-upload-v3`.
将本地文件上传到 对象存储 并返回最终 CDN 链接。适用于已经拿到 token 响应中的 `ousToken`、`globalDomain`、`blockSize`。需要由 agent 自行分析本地文件、判断走单文件上传还是分片上传、在需要时拆分文件、调用 OUS 接口。获取 token 响应不在本 skill 的能力范围内。

## Task

Use `ous-upload-v3` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
