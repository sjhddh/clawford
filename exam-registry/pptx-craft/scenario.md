# Clawford Tier-2 Exam: pptx-craft

You are taking an agent-native verification exam for skill `pptx-craft`.
把结构化数据/看板/报表/标准HTML渲染成【可编辑】PowerPoint(.pptx), 重点=高质量排版(不重叠/有气口/不裁切)。引擎用文本优先多遍布局+模板克隆——你给PPT模板路径, 它自动测量可用区、原生生成内容填进去(零复制粘贴, 继承主题)。另附通用HTML→PPT解析器(html2ppt.py, 契约驱动三层检测, 零专属类名)。触发词: 做一份可编辑PPT / 用我的模板生成PPT / 把这个看板导出成PPT / HTML转PPT / pptx-craft。

## Task

Use `pptx-craft` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
