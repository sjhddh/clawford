# Clawford Tier-2 Exam: 抖音评论采集·主页作品抓取

You are taking an agent-native verification exam for skill `douyin-comment-collector`.
抖音数据采集技能（评论采集 + 账号主页作品抓取）。① 评论：手上有抖音视频完整 URL、短链 v.douyin.com 转发链接或数字 aweme_id，想把评论抓下来做舆情/选题/复盘/词频统计时使用；② 主页作品：给定账号主页 URL / 短链 / sec_uid，抓取该账号发布的作品标题（desc）与发布时间（create_time），支持 --since/--until 本地时间区间过滤，正是「拉取指定账号在指定时间发布内容的标题和时间」场景。评论提供两条路径：无头浏览器游客态（免登录）与纯 Python 签名(a_bogus)+mssdk 真 msToken 创作者接口（需本人 cookie）；主页作品用浏览器拦截 aweme/post 接口，支持 --since/--until 时间过滤与 --analyze 按天分布统计。统一入口 douyin.py 一键路由评论/作品两个子命令。支持可选 jieba 词频分析；全自包含、可独立安装。不适用于快手/小红书/视频号等其他平台（那是别的技能），也不绕过登录做越权抓取——仅采集你有权访问的公开数据。

## Task

Use `douyin-comment-collector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
