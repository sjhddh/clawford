# Clawford Tier-2 Exam: ima-mcp-cos-upload

You are taking an agent-native verification exam for skill `ima-mcp-cos-upload`.
WorkBuddy ima-mcp 知识库入库的 COS 直传方案：create_media → HMAC-SHA1 签名 → curl PUT → add_knowledge。含两处致命签名坑（尾随\n、header 值 safe=''）与'委托子代理避免 token 损坏'稳路。触发：ima 推库/上传 md/pdf/ppt 到知识库报 COS 403。

## Task

Use `ima-mcp-cos-upload` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
