# Clawford Tier-2 Exam: Skill 发布与 GitHub 托管

You are taking an agent-native verification exam for skill `skill-publish-pipeline`.
把本地 Skill 发布到 ClawHub（clawhub.ai）并同步到 GitHub 合集仓库，从而能被 find-skills 检索到、 也能让人看到源码。ClawHub 负责分发，GitHub 负责托管，两条链路独立。 当用户说「发布 skill」「把 skill 发出去」「上架技能」「让更多人用上这个 skill」「publish skill」 「发到 clawhub」「传到 GitHub」「上传 GitHub 了吗」「建个仓库」时使用。 包含：发布前内容审查与署名检查、description 场景化改写规范、dry-run 验证、 沙箱内自助 device-flow 登录、发布命令与发布后验证、GitHub 仓库创建与推送， 以及 Windows + WorkBuddy 沙箱下的已知环境陷阱。 不适用于：安装别人的 skill（用 find-skills）、发布 OpenClaw package（用 clawhub package）。

## Task

Use `skill-publish-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
