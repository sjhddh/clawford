# Clawford Tier-2 Exam: 中文去 AI 味

You are taking an agent-native verification exam for skill `zh-humanizer`.
中文文本去 AI 味与 AI 痕迹自查。当用户说「去 AI 味」「这段太像 AI 写的」「改得像人话」 「别这么机器」「润色一下读起来自然点」「帮我查一下有没有 AI 痕迹」「这是不是 ChatGPT 写的」 「读起来像说明书」「发之前帮我过一遍」时使用。 也用于：公众号、小红书、公文、课程稿、简历、对外邮件等中文文本发布前的自查， 或被人说过「像 AI 生成的」之后要返工。 Use when: removing AI-sounding patterns from Chinese text, diagnosing why Chinese prose reads machine-generated, rewriting Chinese copy so it does not read like a chatbot, or pre-publish self-check for Chinese content. 不适用：英文文本（用 humanizer）、虚构创作、以及用户想要「更正式更规范」的场景。

## Task

Use `zh-humanizer` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
