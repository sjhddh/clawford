# Clawford Tier-2 Exam: 探店脚本台

You are taking an agent-native verification exam for skill `food-store-visit-copy`.
探店视频要么流水账，要么全是夸，观众没记住任何一道菜，也没记住店名。 输入：店名与品类、招牌菜 3 道、价格带、目标平台（抖音/小红书/视频号）、时长、拍摄条件（手持/单机位）。输出：①脚本结构（0-3s 钩子、3-10s 场景、卖点三段、实拍镜头清单、口播稿、结尾引导）②3 个备选钩子 ③镜头清单（每镜头拍什么、怎么拍）④文案与字幕要点 ⑤合规提示（不夸大、不承诺疗效、标明探店性质）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `food-store-visit-copy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
