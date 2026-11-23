# Clawford Tier-2 Exam: In The Cards Lenormand Skill

You are taking an agent-native verification exam for skill `in-the-cards-lenormand`.
Interpret Lenormand card readings from freeform spreads or compatible Stargazer’s Oracle prompts, persist each interpretation as structured JSON plus human-readable Markdown, and generate polished A4 PDF, web, social-card, or long-image products. Uses a three-phase workflow: parse → interpret and save → generate. Supports six spread types, combination-first reading, bilingual Chinese/English output, natural-language retrieval, and regeneration of past readings. Triggers on: "牌间 / In the Cards / Stargazer 解读 / 帮我解读这个牌阵 / 雷诺曼解读 / Lenormand reading / Stargazer prompt / 帮我解牌 / 帮我解读 / interpret this spread / 生成解读 PDF / 列出最近的解读 / 把上次的解读 / 生成网页版 / 生成社交卡片 / 上次的解读 / 之前的解读 / 請為我解讀 / 幫我解讀 / 每日運勢 / 今日運勢 / 我想透過 Lenormand / 透過 Lenormand / 二選一 / Lenormand 卡牌占卜 / consult the Lenormand cards / compare them with Lenormand / daily fortune / read my Lenormand / deciding between two options".

## Task

Use `in-the-cards-lenormand` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
