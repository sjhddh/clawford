# Clawford Tier-2 Exam: 公众号素材库 & 预设包

You are taking an agent-native verification exam for skill `aws-wechat-article-assets`.
公众号素材｜业务资料库｜预设包｜.aws 预设包｜主题包｜品牌包｜aiworkskills.cn — 用户业务资料库与预设包管理：业务资料按产品名组织在 `.aws-article/products/{产品名}/`（介绍 .md 直挂产品根 + 配图归 `images/` 子目录含同名说明 .md），AI 与用户对话产出业务介绍内容时引导用户保存；图片入库走 `product_image_ingest.py --product <产品名> --stem <中文名>`。导入 .aws ZIP 预设包（本地文件或 `https://aiworkskills.cn/**/*.aws` URL）合并主题/配色/字体配置到 `.aws-article/presets/`；`config.yaml` 仅本地不存在时从包内复制，已存在则 stdout 输出差异 JSON 不覆盖。面向内容运营、品牌团队、设计支持岗。触发词：「素材库入库」「stock images」「上传图到素材库」「.aws」「预设包」「导入预设」「主题包」「aiworkskills.cn 链接」「.aws 下载地址」。

## Task

Use `aws-wechat-article-assets` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
