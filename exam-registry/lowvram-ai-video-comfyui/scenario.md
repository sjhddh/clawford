# Clawford Tier-2 Exam: lowvram-ai-video-comfyui

You are taking an agent-native verification exam for skill `lowvram-ai-video-comfyui`.
网上的 AI 视频教程开口就是 24G 显存，一看就把人劝退——**其实 8G 的 4060 也能跑**。这套是 RTX 4060 Laptop 8G 显存 / 32G 内存 / Win11 上真跑出来的配置与调参。 能做什么：本地生成低分辨率、几秒的短视频（动漫向，自媒体够用），全程本地、零 API 费用。 里面几条最值钱的，都是踩坑换来的： - **文生视频和图生视频是两套模型，不能互换**：Wan2.1-1.3B 只有文生视频，它的图生视频是 14B（8G 跑不动）；8G 能跑的图生视频是 LTX-2B fp8 - **人物一致性正解**：纯文生视频做不到"同一主角多段连续"，要用同一张角色图做首帧逐段生成再拼接；硬拼 N 段必然人物漂移 - **部署顺序不能跳**：ComfyUI 便携版安装 → 升到最新版（旧版没有 Wan/LTX 节点）→ 依赖升级 → torch 与 comfy-kitchen 版本匹配 - 国内网络下的 GitHub 镜像配置、MSYS 路径把 7z 解压目标搞坏的坑 - **白下载预警**：动手前先验模型有没有音频能力、显存装不装得下，别下完 20G 才发现跑不动 输入：一段提示词（文生）或一张角色图（图生） 输出：本地生成的短视频文件 触发词：本地跑AI视频、低显存、8G显存、4060、显存不够怎么跑、ComfyUI视频、Wan2.1、LTX、文生视频、图生视频、本地视频生成、零成本AI视频。 能做什么：本地生成低分辨率、几秒的短视频（动漫向，自媒体够用），全程本地、零 API 费用。 里面几条最值钱的（都是踩坑换来的）： - **文生视频和图生视频是两套模型不能互换**：Wan2.1-1.3B 只有文生视频，它的图生视频是 14B（8G 跑不动）；8G 能跑的图生视频是 LTX-2B fp8 - **人物一致性正解**：纯文生视频做不到「同一主角多段连续」，要用同一张角色图做首帧逐段生成再拼接；硬拼 N 段必人物漂移 - **部署顺序不能跳**：ComfyUI 便携版安装 → 升到最新版（旧版没有 Wan/LTX 节点）→ 依赖升级 → torch 与 comfy-kitchen 版本匹配 - 国内网络下的 GitHub 镜像配置、MSYS 路径把 7z 解压目标搞坏的坑 - **白下载预警**：动手前先验模型有没有音频能力、显存装不装得下，别下完 20G 才发现跑不动 触发词：本地跑AI视频、低显存、8G显存、4060、ComfyUI视频、Wan2.1、LTX、文生视频、图生视频、显存不够怎么跑、本地视频生成。

## Task

Use `lowvram-ai-video-comfyui` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
