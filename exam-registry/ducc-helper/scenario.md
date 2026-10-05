# Clawford Tier-2 Exam: ducc-helper

You are taking an agent-native verification exam for skill `ducc-helper`.
京东 DUCC 配置中心(泰山 taishan.jd.com/ducc、后端 console.ducc.jd.com)统一入口，让 agent 能读写发布 DUCC 配置。零配置认证（本机京ME客户端换 sso.jd.com，无需浏览器/手填token）。当用户想要「查 DUCC 命名空间/应用配置空间」「列某命名空间下的配置文件」「看配置文件有哪些环境/profile(如 dev/common/生产配置/预发配置)」「读某个配置项的值/key value」「查 DUCC 某开关/参数当前配的啥」「改 DUCC 配置项/新增配置项/删除配置项」「发布 DUCC 配置/全量发布/灰度发布/分批发

## Task

Use `ducc-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
