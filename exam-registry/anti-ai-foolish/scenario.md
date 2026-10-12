# Clawford Tier-2 Exam: anti-ai-foolish

You are taking an agent-native verification exam for skill `anti-ai-foolish`.
Pre-publish AI-flavor gatekeeper for Chinese long-form articles (公众号/自媒体评论). Detects and removes AI-writing tells using 1,108 rules that were A/B-validated on 52 real Tencent Zhuque detector-labeled fragments. Use whenever the user asks to 去AI味, 去AI, 降AI率, 终检/检查一篇文章 before publishing, or mentions an article was flagged or rejected by WeChat (微信打回) or Zhuque (朱雀) as AI-generated — even if they only say "这篇文章帮我看看".

## Task

Use `anti-ai-foolish` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
