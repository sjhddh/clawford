# Clawford Tier-2 Exam: 亚马逊-店铺数据上传

You are taking an agent-native verification exam for skill `linkfox-amazon-store-feeds`.
亚马逊店铺 Feeds（与 linkfox-amazon-store-auth / report / listings / pricing / orders 同系列），经 /spApi/developerProxy 调用 SP-API Feeds v2021-06-30：createFeedDocument、getFeedDocument、createFeed、getFeed、getFeeds、cancelFeed；另含 upload_feed_document 向预签名 URL 上传内容。当用户提到亚马逊 Feed、提交库存/Listing Feed、POST_FLAT_FILE、feedType、feedDocumentId、feedId、取消 Feed、查询 Feed 处理状态、Feeds API、SP-API 上传文件 时触发。

## Task

Use `linkfox-amazon-store-feeds` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
