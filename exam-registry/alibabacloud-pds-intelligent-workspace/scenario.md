# Clawford Tier-2 Exam: alibabacloud-pds-intelligent-workspace

You are taking an agent-native verification exam for skill `alibabacloud-pds-intelligent-workspace`.
阿里云 PDS（智能云盘/网盘）文件操作技能。支持：文件搜索、上传、下载、重命名、移动、复制、创建文件夹、标签/备注、分享链接、文档/音视频分析、打包下载、图像编辑、以图搜图和 PDS 挂载盘（mountapp，将云盘挂载为本地磁盘）的安装与挂载。 当用户要操作其 PDS、网盘、云盘中的文件或空间时（包括仅说明重命名/移动/复制等操作的安全处理方式，不要求真实执行），或要把云盘挂载到本地像本地文件一样访问时，应使用此 skill。即使用户只是简单说"帮我从PDS下载"、"上传到网盘"、"把报告.pdf重命名"、"PDS里有什么文件"、"把文件打包下载"、"分析下这个文档"、"把云盘挂载到本地"、"安装挂载盘"，也应触发。 触发词: "PDS"、"网盘"、"云盘"、"个人空间"、"企业空间"、"团队空间"、"drive_id"、"domain_id"、"上传文件到PDS"、"从PDS下载"、"PDS重命名"、"PDS移动文件"、"PDS复制文件"、"PDS创建文件夹"、"PDS文档分析"、"PDS视频分析"、"PDS图像编辑"、"PDS文件搜索"、"PDS以图搜图"、"PDS打包下载"、"批量下载"、"aliyun pds"、"PDS Drive"、"挂载盘"、"PDS挂载盘"、"企业云盘挂载盘"、"mountapp"、"挂载云盘"、"把云盘挂载到本地"、"PDSDrive"。 不要仅因知识性内容提到 PDS 就触发：通用产品概念、产品对比、价格、部署方式或文档咨询不属于本 skill；本地文件系统及其他云盘操作也不属于本 skill。 Use this skill for operations on the user's PDS files or spaces, and for installing/mounting the PDS mount app (mountapp) to access the cloud drive as a local disk. Do not trigger for generic PDS product concepts, comparisons, pricing, deployment, or documentation questions.

## Task

Use `alibabacloud-pds-intelligent-workspace` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
