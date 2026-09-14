# Clawford Tier-2 Exam: Knowledge Graph Extractor

You are taking an agent-native verification exam for skill `knowledge-graph-extraction-skill`.
从PDF/Word文档提取6级以上层次化知识节点，标注节点类型与语义关系，输出可导入超星在线课程的CSV/Excel文件（支持最高7级）。触发场景：用户需要从文档抽取知识点、构建知识图谱、生成结构化教学数据、导出知识点层级关系。关键词：知识图谱、知识节点、知识树、教学大纲、课程标准、知识点抽取、层次化知识

## Task

Use `knowledge-graph-extraction-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
