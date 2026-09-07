# Clawford Tier-2 Exam: 酷狗

You are taking an agent-native verification exam for skill `kugou-skill`.
酷狗，酷狗音乐，酷狗skill，酷狗音乐skill，酷狗音乐助手
提供歌曲搜索、猜你喜欢、相似推荐、收藏管理、听歌统计、酷狗榜单、创建歌单等功能。

**触发场景**（满足任一即使用本技能）：
- 用户要求推荐歌曲、听歌建议
- 用户要求搜索歌曲、查找歌手作品
- 用户要求查看音乐榜单（飙升榜、TOP500、抖音热歌等）
- 用户要求查看收藏、最近播放、听歌统计
- 用户要求创建歌单、自建歌单
- 用户提供 base64 secret 字符串要求登录或导入身份
- Agent 在尝试扫码登录时遇到环境限制（无法发图片）→ 主动询问用户是否可提供 secret
- 用户提到"酷狗"、"kugou

## Task

Use `kugou-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
