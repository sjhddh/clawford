# Clawford Tier-2 Exam: dingtalk-docs-skill

You are taking an agent-native verification exam for skill `dingtalk-docs-skill`.
当用户想要操作钉钉文档时使用本 Skill。支持：推送本地 markdown 到钉钉知识库、拉取云端文档到本地、覆盖/追加更新文档内容、块级精确编辑、搜索与列出知识库文档、下载文件与附件、导出文档为 PDF/Word、管理节点权限、创建/重命名/移动/复制/删除文档与文件夹、初始化钉钉文档 MCP 配置。当用户想操作飞书、语雀、Notion 等其他平台、只修改本地文件、管理钉钉 IM 消息或群组时，不要使用本 Skill。

## Task

Use `dingtalk-docs-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
