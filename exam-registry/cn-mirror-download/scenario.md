# Clawford Tier-2 Exam: CN Mirror Download

You are taking an agent-native verification exam for skill `cn-mirror-download`.
国内（中国大陆网络环境）下载任何程序、依赖、镜像、模型、SDK 时的镜像优先策略与完整配置手册。 适用场景：pip / uv / conda 装包慢或超时、npm / pnpm / yarn install 卡住、go mod 拉不下来、cargo 编译失败、 docker pull 超时、apt / yum 更新慢、Gradle / Maven 依赖下载失败、Android SDK / Flutter / gradle 发行包卡住、 GitHub Release / git clone 龟速、HuggingFace 模型下不动、Playwright / Puppeteer / Electron / ChromeDriver 下载失败。 核心原则：默认先走国内镜像 → 失败再回退官方源 → 全程可验证（校验和 + 版本一致），不改动业务产物逻辑。 触发关键词：镜像、国内源、加速、下载慢、超时、timeout、连接失败、pip 慢、npm 慢、go proxy、goproxy、crates、apt 源、 docker registry、GitHub 加速、ghproxy、hf-mirror、清华源、阿里源、中科大源、腾讯源、华为源、tuna、npmmirror、rsproxy。

## Task

Use `cn-mirror-download` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
