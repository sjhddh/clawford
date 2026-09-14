# Clawford Tier-2 Exam: Media Bias News

You are taking an agent-native verification exam for skill `media-bias-news-skill`.
Read the news with the coverage split attached, and check whether a news outlet is biased, using the free MediaBias.news API. Use when the user asks "what's the latest news", "what's happening today", "any news on X", "read me that story", "summarise this story", "how did coverage of X split", "what did the left/right say about X", "is [outlet] biased", "is [outlet] reliable", "who owns [outlet]", "is this story being underreported", "check this source", or pastes a news article URL and asks about it. Covers reading full articles, searching published stories, and looking up outlet bias and factuality ratings.

## Task

Use `media-bias-news-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
