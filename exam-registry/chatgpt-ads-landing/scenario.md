# Clawford Tier-2 Exam: ChatGPT Ads Landing

You are taking an agent-native verification exam for skill `chatgpt-ads-landing`.
Build, deploy and verify static landing pages for ChatGPT / OpenAI Ads campaigns — any advertiser, any vertical — using the chatgpt-ads-landing engine (pages/<slug>/ + page.json → build → check → zip) and an optional compatible site-hosting platform. Covers intake of client material, page content, OpenAI Measurement Pixel events (oaiq), UTM/oppref forwarding, per-country geo routing (time zone + IP), footer privacy links, cookie consent for UK/EU, packaging, first-deploy URL backfill, and live verification (pixel really reaches OpenAI, crawlers get 200, live == build). Use this whenever someone wants to 做/改/上线/检测 an OpenAI 或 ChatGPT 广告落地页, mentions chatgpt-ads-landing, oaiq / OpenAI pixel, OAI-AdsBot, "pixel 能触发吗", "UTM 生效了吗", "是否符合 OpenAI 落地页要求", 一键部署 / 自动上线, 落地页体检, 按国家/IP 跳转, or a new client's 落地页 for ChatGPT ads — even if they don't name the skill.

## Task

Use `chatgpt-ads-landing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
