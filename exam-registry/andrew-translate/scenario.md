# Clawford Tier-2 Exam: andrew-translate

You are taking an agent-native verification exam for skill `andrew-translate`.
高质量三步式翻译工作流（初稿 → 专家反思 → 精稿），基于 Andrew Ng 的 translation-agent 思路，产出接近母语者水准的译文。凡是用户要翻译成段文本（中英互译或任意语种；文章、技术文档、论文、书籍、邮件、字幕、产品文案、代码注释），或要求"高质量翻译""专业翻译""信达雅""润色/校对已有译文""三步翻译""反思式翻译""translation agent"时都应使用本 skill；即使用户只说"帮我翻译这段话""把这段英文翻成中文""translate this"，也应使用它而不是直接给一遍机翻。需要指定地区风格（台湾繁体、香港繁体、美式/英式英语、墨西哥西班牙语、巴西葡语等）时尤其适用。单个词义查询或术语解释不需要本 skill。

## Task

Use `andrew-translate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
