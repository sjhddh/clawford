# Clawford Tier-2 Exam: 知识产权自检台

You are taking an agent-native verification exam for skill `law-ip-selfcheck`.
字体、图片、音乐、商标、软件授权——很多侵权不是故意，而是不知道就用了；自己被抄了也不知道怎么留证据。 输入：使用场景（公众号/短视频/电商详情页/软件产品/课程）、素材来源、是否商用、自己的原创成果类型。输出：①风险点清单（按素材类型：字体/图片/音乐/商标/开源许可）②替代方案（可商用的替代做法）③留痕清单（创作过程、时间戳、发布记录）④维权准备（发现被侵权先做什么）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `law-ip-selfcheck` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
