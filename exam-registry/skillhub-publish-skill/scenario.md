# Clawford Tier-2 Exam: skillhub-publish-skill

You are taking an agent-native verification exam for skill `skillhub-publish-skill`.
把本地 Skill 打包并发布到 SkillHub（腾讯 skillhub.cn）与 ClawHub，覆盖预检、发布、状态回读与竞品对标全链路，并在上传被拒时用二分/ddmin 脚本把「服务端 WAF 拦内容（566）」与「包结构/字段问题」精确区分开。当用户说「发布技能到市场」「上架 skill」「SkillHub 提交失败」「Failed to fetch」「566」「上传 zip 报错」「技能审核状态」「版本号被拒」时使用。也讲清「入库成功 ≠ 已公开」——用 `mine` 的 `reviewStatus`、重发探测 `409 VERSION_EXISTS`、`/versions/<v>/signature` 三个探针判断版本到底走到哪一步。

## Task

Use `skillhub-publish-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
