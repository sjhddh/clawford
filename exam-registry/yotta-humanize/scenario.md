# Clawford Tier-2 Exam: 元真 yotta-humanize

You are taking an agent-native verification exam for skill `yotta-humanize`.
去 AI 味（元真）—— 把像 AI 写的中文改得更自然：粘贴文章、文案、报告或邮件，先得到 0-100 AI 味评分，再定位空泛升华、套话、AI 黑话、同义堆叠、机械排比、聊天残渣和标点滥用，输出可逐条核对的前后改写（词表替换 / 套话删除 / 残渣清理 / 标点限流）。触发：用户说「去 AI 味」「润色」「改写」「太像 AI」「像人写的」。边界：只处理已有文本，不生成内容、不改事实 / 数据 / 专有名词；需要判断的润色只给建议，不调用模型。

## Task

Use `yotta-humanize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
