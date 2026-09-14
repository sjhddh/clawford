# Clawford Tier-2 Exam: gov-procurement-doc-assistant

You are taking an agent-native verification exam for skill `gov-procurement-doc-assistant`.
政府采购 / 企业招标文件解读与深度分析助手。当用户上传招标文件（PDF / DOCX / 图片）或说"解读这份标书 / 拆解招标文件 / 标书解读 / 算价格分 / 提取废标条款 / 出风险清单 / 出Excel清单 / 生成投标框架"时触发。默认输出 6 大模块结构化解读（项目信息 / 资格性 / 符合性 / 商务红黄预警 / 技术要求 / 废标项）；当用户进一步要求"价格分测算 / 出 Excel / 投标框架 / 投标建议"时，额外生成含价格分情景测算的 6-Sheet Excel 与投标研判摘要。基于公开工商信息 / 行业惯例给出红黄预警，疑似违规 / 歧视性 / 差别待遇条款须调用

## Task

Use `gov-procurement-doc-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
