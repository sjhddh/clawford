# Clawford Tier-2 Exam: huawei-cloud-modelarts-vllm-ascend-model-deploy

You are taking an agent-native verification exam for skill `huawei-cloud-modelarts-vllm-ascend-model-deploy`.
指导在华为云 ModelArts 推理平台通过 vLLM-Ascend 推理框架部署开源大语言模型(GLM/Qwen/DeepSeek/Llama 等)为昇腾 NPU 在线推理服务的完整流程。覆盖:确认模型后按 vllm-ascend 社区文档与用户确认部署形式(单节点/多节点/PD分离/PD共置 4 种形式,统一单部署单元承载),从 HuggingFace/ModelScope 下载模型权重并上传 OBS、从 Quay.io 拉取 vllm-ascend 镜像并推送 SWR、按确认的部署形式选用专用脚本模板(单节点/多节点/PD/PD共置 四套,脚本内不做部署形式运行时分支)生成启动/探针/角色识别脚本并上传 OBS、按 ModelArts 平台适配要点(端口 8080、OBS 挂载、bash 数组、探针命令检查、超节点亲和组、Mooncake KV 传输)通过新版在线服务部署(二选一: 方式A 调用 CreateInferService API(POST /v2/{project_id}/services)自动部署 / 方式B 在 ModelArts 控制台按一步步点击指导手动部署;不再创建 AI 应用——该模块已废弃)、通过 OpenAI 兼容 API 调用验证。Triggers include: "ModelArts 部署大模型/开源模型", "vllm-ascend", "昇腾 NPU 推理", "HuggingFace/ModelScope 模型上云", "OBS/SWR 镜像迁移", "大模型在线服务", "多机部署", "多副本部署", "PD 分离部署", "PD 共置部署", "超节点亲和组", "Mooncake KV 传输", "新版在线服务", "CreateInferService", "控制台手动部署在线服务"。当用户提到以上任一场景时都应使用本技能,即使没有明确说出'部署'二字。

## Task

Use `huawei-cloud-modelarts-vllm-ascend-model-deploy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
