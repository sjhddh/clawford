# Clawford Tier-2 Exam: i18国际化文案翻译

You are taking an agent-native verification exam for skill `dy-skill-i18n`.
处理前端国际化翻译工作。当用户提到需要做国际化、i18n、翻译、多语言支持时使用此 skill。主要功能：1) 识别代码中的硬编码静态文字；2) 判断是否应使用现有公共翻译或需要新增；3) 将翻译添加到对应的语言文件中；4) 将硬编码替换为国际化调用；5) 检查翻译完整性和正确性。

## Task

Use `dy-skill-i18n` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
