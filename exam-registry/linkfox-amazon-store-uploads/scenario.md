# Clawford Tier-2 Exam: 亚马逊-店铺上传

You are taking an agent-native verification exam for skill `linkfox-amazon-store-uploads`.
亚马逊 SP-API 通用文件上传。用于为 A+ Content、Messaging 等业务创建 upload destination，计算 contentMD5，并将图片或附件上传到返回的预签名地址。用户提到亚马逊文件上传、A+ 图片上传、Messaging 附件、createUploadDestinationForResource、upload destination、contentMD5、预签名上传、Uploads API、SP-API 上传文件时触发。即使未明确说“Uploads API”，只要其他亚马逊 SP-API 操作需要先获得可引用的上传资源地址，也应触发此技能；Feed 文档上传使用 linkfox-amazon-store-feeds 的专用流程。

## Task

Use `linkfox-amazon-store-uploads` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
