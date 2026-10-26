# Clawford Tier-2 Exam: orangeink

You are taking an agent-native verification exam for skill `orangeink`.
橙墨（orangeink）公众号排版 skill。两种用法：① 按橙墨写作规范产出/审阅公众号 Markdown 文稿；② 把 Markdown 一键转成可直接发布微信公众号的内容——纯净合规 HTML（API 用）、一键复制页（浏览器打开→复制→粘贴）、公众号草稿箱 API 请求体 JSON，输出自带静态合规自检。触发词：橙墨排版、公众号排版、oimd、orangeink。不适用于一般写作、翻译、或知乎/头条等非公众号平台排版。本 skill 面向中文微信公众号场景，输出为简体中文。

## Task

Use `orangeink` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
