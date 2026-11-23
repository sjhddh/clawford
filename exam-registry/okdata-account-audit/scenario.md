# Clawford Tier-2 Exam: 账号体检诊断 okdata

You are taking an agent-native verification exam for skill `okdata-account-audit`.
How is this account doing? Gets one account's profile (followers, posts) and its latest page of posts, as one table: a row per post with the account's figures beside it. Two paid calls. Use when the user asks this about Douyin, Xiaohongshu (RedNote), WeChat Official Accounts, Bilibili, Weibo, TikTok, X (Twitter), Instagram, Reddit, Kuaishou, WeChat Channels. 这个号最近表现怎么样？取一个账号的资料（粉丝、作品数）和最新一页作品，排成一张表：每条作品一行，旁边带上账号本身的数据。两次计费调用。

## Task

Use `okdata-account-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
