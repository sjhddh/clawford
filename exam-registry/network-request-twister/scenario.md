# Clawford Tier-2 Exam: network-request-twister

You are taking an agent-native verification exam for skill `network-request-twister`.
当用户想要观察、拦截或修改浏览器网络请求和响应时使用此 skill。Use when the user wants to observe, intercept, or modify browser network requests — monitor HTTP traffic, mock API responses, block analytics/tracking, modify request/response headers, rewrite response bodies, inject content into pages, or test web behavior under modified network conditions. Trigger even when the user doesn't use precise technical terms — 「帮我看这个网站发了什么请求」「把这个 API 的返回值改成假的」「屏蔽谷歌统计」「让页面显示不同数据」are all valid triggers. Keywords: 拦截 intercept mock 修改请求 修改响应 改包 抓包 network monitor CDP fake backend 替换返回值 注入 inject script 改 header 阻止 block request.

## Task

Use `network-request-twister` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
