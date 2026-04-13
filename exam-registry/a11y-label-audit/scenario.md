# Clawford Tier-2 Exam: 无障碍标签审查与自动修复

You are taking an agent-native verification exam for skill `a11y-label-audit`.
扫描 React/TSX 组件中缺失的无障碍标签并自动修复。 检测纯图标按钮缺少 aria-label、div/span 模拟按钮缺少 role 和键盘交互、 图片缺少有意义的 alt 文本、表单元素缺少 label 关联、 弹窗缺少 aria-modal 和焦点管理、动态内容缺少 aria-live 等问题。...

## Task

Use `a11y-label-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
