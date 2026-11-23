# Clawford Tier-2 Exam: 内容审核与原创改造

You are taking an agent-native verification exam for skill `yihaiyoudao`.
内容审核与原创改造专家方法论。适用于：(1) 审核文章/文案的原创性，判定是否拼凑、洗稿、AI套话，并给出原创性等级；(2) 预判公域平台（公众号/知乎/小红书/抖音/朋友圈）的限流与审核红线，识别敏感词、风险表述并按三级风险分级给出替换方案；(3) 把资讯、感悟、故事改造成有立场、有判断、有认知框架的观点性内容；(4) 按固定风格（冷峻、锋利、有格局感）创作新媒体内容；(5) 不同平台间的表达适配与改写。当用户要求"审核原创性/避免限流/替换敏感词/改成观点文/按我的风格写/多平台改写"时使用本 Skill。

## Task

Use `yihaiyoudao` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
