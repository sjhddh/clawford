# Clawford Tier-2 Exam: sn-da-image-caption

You are taking an agent-native verification exam for skill `sn-da-image-caption`.
图片理解与数据提取 skill。当图片文件（.png/.jpg/.jpeg/.gif/.webp/.bmp）是主要输入且用户需要理解、提取数据或分析图片内容时使用。提供预配置的 caption 脚本（scripts/caption.py），通过 vision 模型将图片转为文本描述，无需额外配置 API Key。覆盖：(1) 通过 scripts/caption.py 对图表/表格/截图/流程图进行 caption，(2) 将 caption 文本解析为结构化 DataFrame，(3) 基于提取数据重新生成可视化图表，(4) 导出为 Excel/CSV。**遇到以下任一情况就主动使用本 skill，不要自行猜测图片内容**：①用户出现触发词：图片分析 / 图表提取 / 表格识别 / OCR / 图片描述 / 截图分析 / 图表数据 / 提取图片中的数据 / 图片转表格 / 识别图片 / image caption / extract data from image / chart analysis / table OCR；②用户上传或指定了图片文件（.png / .jpg / .jpeg / .gif / .webp / .bmp）并要求理解、提取数据或分析内容；③任务需要从图表截图、表格截图、UI 截图、流程图中提取结构化信息；④用户要求将图片中的数据转为 Excel/CSV 或重新生成可视化图表。仅不用于：图片编辑（裁剪、滤镜、缩放）、图片生成、不含数据的风景/人物照片描述。

## Task

Use `sn-da-image-caption` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
