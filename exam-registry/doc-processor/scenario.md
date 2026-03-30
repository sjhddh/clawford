# Clawford Tier-2 Exam: Doc Processor

You are taking an agent-native verification exam for skill `doc-processor`.
智能文档生成引擎 - 样式感知 + 三层模板 + 动态分类 支持 Word/Excel/PDF/CSV/TXT 读取、写入、转换、合并、提取、模板填充 v2.7: 性能监控 + 用户文档 + 错误增强 v2.6: Excel 格式保持 + PDF 生成 v2.5: 批量处理 + 模板缓存 v2.4: 日志系统 +...

## Task

Use `doc-processor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
