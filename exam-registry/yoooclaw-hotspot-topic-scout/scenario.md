# Clawford Tier-2 Exam: yoooclaw-hotspot-topic-scout

You are taking an agent-native verification exam for skill `yoooclaw-hotspot-topic-scout`.
当用户希望从消息通知和全网热点中快速筛出值得跟进的热点选题、爆款参考、竞品动态和粉丝需求时使用；适用于内容创作者、主编、运营负责人做"昨天有什么值得追""哪些能转成我赛道的内容""给我直接的选题建议"这类任务。典型触发句子：'帮我筛一下昨天有什么热点可以做选题'、'昨天行业里有什么新动向，帮我按相关度排个序'、'看看群里和推送里有没有值得跟的话题'、'按我的内容定位找今天能做的素材'。

## Task

Use `yoooclaw-hotspot-topic-scout` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
