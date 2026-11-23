# Clawford Tier-2 Exam: ima-mcp-cos-upload

You are taking an agent-native verification exam for skill `ima-mcp-cos-upload`.
把本地文件（md/pdf/pptx/docx/图片等）上传导入 ima 知识库：走通 create_media → COS 签名直传 → add_knowledge 全流程，自带 403 报错自修复；md 卡片上传前可按规范自动打标（原料层三段式/资产层五维）。触发：上传文件到 ima 知识库、ima 导入文档、ima 推库/入库、上传报 COS 403 或 SignatureDoesNotMatch、ima 打标。

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
