# Clawford Tier-2 Exam: meizhuang-daihuo-jiaoben

You are taking an agent-native verification exam for skill `meizhuang-daihuo-jiaoben`.
专为美妆博主和电商卖家设计，输出美妆产品带货短视频脚本，包含开头钩子、分镜、口播台词。当用户提出「生成脚本」「写个美妆脚本」「来条口红/护肤品带货脚本」「帮我出个脚本」「编个美妆种草视频」等指令并提供美妆产品或主题时自动调用。输出吸睛标题、明确时长（30秒/60秒）、四列分镜表格（时间/画面内容/口播台词/备注）；每句口播台词不超过15字、口语化；开头3秒必设强钩子；结尾引导点击购物车/小黄车。支持口播、剧情、种草三种类型。

## Task

Use `meizhuang-daihuo-jiaoben` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
