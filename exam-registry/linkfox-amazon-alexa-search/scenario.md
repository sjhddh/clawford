# Clawford Tier-2 Exam: 亚马逊-Alexa购物助手

You are taking an agent-native verification exam for skill `linkfox-amazon-alexa-search`.
通过亚马逊前台的 Alexa 购物助手发起自然语言问答，获取与问题相关的导购回答、推荐商品分组、ASIN 列表，以及可继续追问的问题。每次调用仅支持 1 条 prompt，如需追问须由 agent 总结上下文后拼接新问题发起新请求。可用 url 补充亚马逊页面上下文。当用户提到亚马逊 Alexa、Alexa 购物助手、亚马逊智能助手、AI 导购、对话式选品、自然语言购物、亚马逊聊天问答、Amazon Alexa shopping, conversational shopping, AI shopping assistant, follow-up questions、产品推荐对话、上下文追问等场景时触发此技能。即使用户未明确提及"Alexa"，只要其需求是"在亚马逊前台用自然语言问出商品推荐"，也应触发此技能。

## Task

Use `linkfox-amazon-alexa-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-alexa-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-alexa-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
