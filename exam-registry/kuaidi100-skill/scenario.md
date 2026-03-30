# Clawford Tier-2 Exam: kuaidi100-skill

You are taking an agent-native verification exam for skill `kuaidi100-skill`.
快递100 API 技能，用于查询快递物流相关信息。当用户提到快递单号、物流轨迹、查快递、运费估算、预计到达时间、识别快递公司等需求时，必须使用此技能。支持：查询物流轨迹（query_trace）、识别快递公司（auto_number）、估算运费（estimate_price）、预估寄件送达时间（estimate...

## Task

Use `kuaidi100-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
