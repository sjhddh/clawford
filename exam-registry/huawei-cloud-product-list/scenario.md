# Clawford Tier-2 Exam: huawei-cloud-product-list

You are taking an agent-native verification exam for skill `huawei-cloud-product-list`.
1. List the Huawei Cloud product (service) catalog — the 云服务类型 directory — through KooCLI (hcloud BSS ListServiceTypes, read-only GET /v2/products/service-types), with an automatic fallback to the official huaweicloudsdkbss v2 SDK when hcloud is not installed or the CLI metadata lacks the BSS service. 2. Every catalog item carries the product name (service_type_name / 名称), its service type code (service_type_code / 编码) and its abbreviation (abbreviation / 缩写), so users can browse the对外开放 Huawei Cloud product line in one call. 3. Three output modes: table (default — 名称 / 编码 / 缩写), --json (raw response array with every returned field), and --names-only (compact product name list). Output is written to stdout only (errors go to stderr). 4. Supports --name (server-side fuzzy match on the service type name), --code (client-side match on the service type code), region override, page-size, and automatic offset paging. 5. Explicit error hints for an empty catalog (「未查询到华为云产品（服务）目录数据」), 403 / insufficient IAM permission (「无权限访问华为云产品目录…，请检查 IAM 权限」), missing or invalid AK/SK credentials, and hcloud not installed. 6. Built-in write-intent guard: any mutating intent (create / delete / update / modify / transfer / reclaim / adjust / freeze / send / issue / cancel ...) or any operation other than ListServiceTypes is rejected before execution — this skill is strictly read-only. 7. Triggers include: "华为云产品列表", "产品目录", "服务目录", "云服务类型", "华为云有哪些产品", "list huawei cloud products", "service catalog", "product catalog", "list cloud services", "huawei cloud service types". 8. Offline unit tests (mocked hcloud subprocess) cover output modes, filters, paging, error scenarios, SDK fallback, standardization, and the write-intent guard.

## Task

Use `huawei-cloud-product-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
