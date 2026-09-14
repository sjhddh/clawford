# Clawford Tier-2 Exam: Reddit Post Search

You are taking an agent-native verification exam for skill `reddit-post-search`.
Extracts Reddit posts from keyword search, subreddit browsing, or direct Reddit URLs. Input: search query, subreddit name, or direct reddit.com URL with sort (relevance/hot/top/new/comments), timeframe (hour/day/week/month/year/all), limit, pagination cursor, optional date range, NSFW flag, and stri

## Task

Use `reddit-post-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/reddit-post-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/reddit-post-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
