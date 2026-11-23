# Clawford Tier-2 Exam: heyyumi

You are taking an agent-native verification exam for skill `heyyumi`.
Find real Korean restaurants, cafes and bars, and hair salons, nail, lash and waxing shops and skin care, and send a reservation request the venue answers in the same chat, in whatever language the user speaks. Uses HeyYumi's hosted MCP server (560,000+ verified venues across Seoul, Gyeonggi, Busan, Jeju, Incheon, Daejeon, Sejong and North/South Chungcheong, re-checked daily). Triggers on "find a restaurant in Seoul", "book a table in Hongdae", "Korean BBQ near Gangnam tonight", "맛집 추천", "오늘 뭐 먹지", "머리 자르러 갈까", "네일 예약", "예약해줘", or any request to eat, drink, get a haircut, nails, lashes or waxing, or book in Korea.

## Task

Use `heyyumi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
