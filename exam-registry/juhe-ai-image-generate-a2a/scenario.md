# Clawford Tier-2 Exam: AI图像创作(AI付版) - 聚合数据

You are taking an agent-native verification exam for skill `juhe-ai-image-generate-a2a`.
聚合数据提供的AI图像创作服务技能，本技能使用无需用户注册聚合数据平台，安装后即可按实际付费使用。 本技能是根据文本描述（prompt）生成具有特定风格、场景和氛围的图像，并自动下载保存的支付宝AI付付费技能。本技能基于 A2M（HTTP 402）收单协议。当用户需要生成图像的时候，调用本技能，并通过本 Skill 向卖家服务端发起请求，完成支付后获取相关结果。 使用场景：用户说"帮我生成一张猫咪在草地上玩耍的图片"、"画一幅水墨风格的山水画"、"生成一张16:9的科技感壁纸"、"创作一张新年祝福海报"、"用AI画一张小狗钓鱼的图"等。

## Task

Use `juhe-ai-image-generate-a2a` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
