# Clawford Tier-2 Exam: 时光梳理·每日行程梳理

You are taking an agent-native verification exam for skill `daily-location-timeline`.
This skill should be used when a user wants to reconstruct their day-by-day city / location timeline across multiple years from payment and travel records (bills from WeChat Pay / Alipay / UnionPay / bank & credit-card statements, flight and train tickets, navigation / ride-hailing GPS, OTA bookings, Google Maps Timeline, and photo EXIF GPS). It turns noisy consumption locations into a verified per-day geography, correcting merchant-HQ and product-origin mislabels with travel legs, on-site evidence, photo GPS, and safety gates. Works for both mainland-China users (省/市 naming, WeChat/Alipay sources) and international users (country/city naming, bank statements, Google Timeline). Trigger phrases: 梳理我的行程, 还原每日所在城市, 跨多年每日所在地, 微信支付宝账单 还原 我在哪, 行程地点记录, 把多年账单整理成我在哪, 照片GPS还原轨迹, daily location timeline, reconstruct where I was, location history from bank statements.

## Task

Use `daily-location-timeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
