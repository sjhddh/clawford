# Clawford Tier-2 Exam: huawei-cloud-clouddocs-aipage

You are taking an agent-native verification exam for skill `huawei-cloud-clouddocs-aipage`.
最基础的「基于内容创建在线 page 文档」技能：用户提供内容（主题/文本/要点），模型生成 markdown，经 clouddocs-cli page +create 一次创建在线 page 文档并交付链接，再用 clouddocs-cli file +export 导出为 docx 存到本地，全程 clouddocs-cli、不开编辑器。用于把一段内容变成一篇可分享的在线文档，并保留一份本地 Word 副本。Trigger: 生成一篇在线文档, 创建page文档, 根据内容生成文档, 把我的内容变成云文档, 创建在线page, 生成云文档, 把要点整理成文档, 创建一篇page。

## Task

Use `huawei-cloud-clouddocs-aipage` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
