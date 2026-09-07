# Clawford Tier-2 Exam: 多平台内容检测&安全改写

You are taking an agent-native verification exam for skill `multi-platform-content-check`.
多平台内容检测&安全改写技能。对任意中文文本执行三维一体检查：广告法合规（绝对化用语、虚假宣传、特殊品类限制等）、主流平台内容规范（微信公众号、小红书、抖音、快手、知乎、B站、微博、百家号、头条号、搜狐号）、去AI化（基于Wikipedia完整模式清单的30+种AI写作特征检测）。每次检查前强制执行实时联网搜索，获取最新的广告法动态、平台政策变更、新增敏感词和监管执法案例，确保检查依据不过时。检查完成后输出可直接复制发布的合规版本，已按目标平台格式适配（标题字数、排版、标签、emoji等），用户无需二次修改。本技能不读取用户本地文件，不向第三方发送用户内容；联网搜索仅用于获取最新政策信息。触发

## Task

Use `multi-platform-content-check` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
