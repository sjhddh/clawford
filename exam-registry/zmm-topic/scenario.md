# Clawford Tier-2 Exam: 詹明明·今天拍什么

You are taking an agent-native verification exam for skill `zmm-topic`.
📐 詹明明·今天拍什么 ——短视频选题技能。交互式选题：供需判定 + 对标信号 + 本人真实数据佐证 + 配比检查，不一键生成选题清单。 触发方式：/zmm-topic、/拍什么、/选题、/zmm-选题、「今天拍什么」「帮我出选题」「这个题能不能做」「有个想法你帮我判断下」「这题只有一头」「这题没劲」「帮我把它讲出两头来」 Topic selection for short videos: supply-demand test, benchmark signals, real data evidence. Trigger: /zmm-topic, "what topic should I shoot", "is this topic worth making" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-topic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
