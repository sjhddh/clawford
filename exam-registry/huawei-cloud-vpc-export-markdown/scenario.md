# Clawford Tier-2 Exam: huawei-cloud-vpc-export-markdown

You are taking an agent-native verification exam for skill `huawei-cloud-vpc-export-markdown`.
1. Query the Huawei Cloud Virtual Private Cloud (VPC) list of a tenant region through KooCLI (`hcloud VPC ListVpcs`, the official read-only GET /v1/{project_id}/vpcs), with an automatic fallback to the official huaweicloudsdkvpc v2 SDK (VpcClient.list_vpcs) when hcloud is not installed. 2. Export the VPC list into a well-formed local Markdown table whose first column is the required **VPC 名称** (VPC name), followed by VPC ID / 区域 / 网段 / 状态 / 企业项目 ID / 描述 / 创建时间 — strictly local file generation, nothing is ever written back to the cloud. `--output`/`-o` sets the path (default `vpc_list_<region>_<timestamp>.md`); the parent directory is created automatically and the file is written via a temp file + atomic rename. 3. Three output modes: `--format md` (default) / `table` / `json`. Region aware: `--region` (default cn-north-4). Optional `--id` / `--enterprise-project-id` server-side filters and `--page-size` (default 100); paging follows the reported `page_info.next_marker`. 4. Explicit error classification: missing AK/SK credentials (「缺少 AK/SK 凭证」), hcloud not installed (falls back to the SDK, else a clear hint), invalid/insufficient credentials (403 / 401 → IAM hint), KooCLI usage errors, and generic API/network failures. An empty VPC list still outputs an empty (header-only) Markdown table and exits 0 — never a corrupt file. 5. Built-in write-intent guard: any mutating intent (create / delete / update / associate / disassociate / attach / detach / release / change ...) or any operation other than the read-only ListVpcs is rejected before execution — this skill is strictly read-only. 6. Triggers include: "导出 VPC 名称清单为 Markdown", "VPC 列表导出 Markdown", "vpc markdown", "VPC 导出 Markdown", "虚拟私有云 Markdown 报表", "VPC 名称留档", "vpc 报表", "export VPC to markdown" — Markdown/export specialised only (plain VPC list / query intents are owned by the separate VPC list skill, not by this Markdown export skill). 7. Offline unit tests (mocked hcloud subprocess) cover output modes, marker paging, Markdown format correctness, empty results, filters, error classification, the SDK fallback, the skill-quality-cli wrapper and the write-intent guard.

## Task

Use `huawei-cloud-vpc-export-markdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
