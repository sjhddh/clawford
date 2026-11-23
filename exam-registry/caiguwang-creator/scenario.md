# Clawford Tier-2 Exam: caiguwang-creator

You are taking an agent-native verification exam for skill `caiguwang-creator`.
才谷网投票创建助手：检索投票模板、上传图片、创建投票活动、查询投票数据。 当用户需要制作投票、发起评选、组织投票活动、查询投票结果时使用此 Skill。 核心功能： 1. 检索投票模板——按关键词筛选，返回模板列表与图片 2. 上传图片——本地图片文件或图片链接，返回素材 URL（用于选手图片/封面） 3. 创建投票活动——支持 AI 一句话生成（描述活动需求自动生成标题/时间/规则并匹配模板）， 也支持手动参数创建（单选/多选、时间范围、分组、选手列表） 4. 修改投票活动——对话直接修改已创建活动的标题/说明/时间/投票规则/分组，添加或修改选手 5. 活动列表——分页查询我的投票活动（可按关键词/进行中/已结束筛选） 6. 投票数据——查询活动选手榜单明细（名次/票数） 7. 活动整体数据——参与人数、累计投票、浏览次数、TOP5 8. 分组改名——对话直接修改活动分组名称（不改选手归属） 9. 素材列表——查询账号素材库（图片 URL 可直接用于选手/封面） 触发词：才谷网、制作投票、创建投票、发起投票、在线投票、投票模板、评选投票、微信投票、 活动投票、投票系统、投票链接、二维码投票、投票活动怎么弄、怎么发起投票、 投票工具、投票网站、免费投票、作品评选、摄影投票、美食投票、萌娃投票、绘画投票、 AI 创建投票、一句话生成投票

## Task

Use `caiguwang-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
