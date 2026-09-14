# Clawford Tier-2 Exam: vue-spa-state

You are taking an agent-native verification exam for skill `vue-spa-state`.
按作用域为 Vue 3 SPA 选择并落地状态。仅本组件：ref/computed。父子 1～2 层：props/emit、 v-model。同一页 3+ 层：provide/inject（InjectionKey；改同一份 ref，不要重新 provide）。 跨路由、跨模块、登录态，或同一对象部分字段仅本组件、部分给其他组件：整份进 Pinia。 新 store 用 setup + 箭头函数；选项式只改存量或需要 $reset。含 storeToRefs、store 单向互调、普通函数/守卫/拦截器在 pinia 安装后取 store、按业务域拆分与导出。 在新增或修改 Vue 状态、Pi

## Task

Use `vue-spa-state` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
