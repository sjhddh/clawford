# Clawford Tier-2 Exam: agnes-图片生成

You are taking an agent-native verification exam for skill `agnes-image-gen`.
使用 Agnes AI 升级版图像生成模型 agnes-image-2.1-flash 生成图片。同时支持文生图（text-to-image）与图生图（image-to-image）。当用户说「用 Agnes 生成图片」「用 Agnes 画一张」「Agnes 生成」「用这张图生成/改成……」或明确要求使用 Agnes API 进行文生图/图生图时，加载本 skill。不消耗 WorkBuddy 积分，仅消耗 Agnes API 额度（当前图像生成免费）。

## Task

Use `agnes-image-gen` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
