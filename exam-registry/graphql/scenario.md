# Clawford Tier-2 Exam: GraphQL

You are taking an agent-native verification exam for skill `graphql`.
Designs, debugs, and hardens GraphQL schemas, resolvers, and clients: N+1 batching, nullability, cost limits, subscriptions, federation. Use when writing or reviewing a schema, SDL, or resolvers; when a query is slow or fires hundreds of database queries; when the response says "Cannot return null for non-nullable field", comes back with an errors array, or nulls a whole branch; when designing mutations, cursor pagination, custom scalars, unions, or input types; when an Apollo, Relay, or urql cache will not update after a mutation; when subscriptions drop or never fire; when adding depth, alias, complexity, or persisted-query limits, disabling introspection, or masking errors; when a schema change breaks clients; or when composing Apollo Federation subgraphs and entity references. Not for consuming someone else's GraphQL API (api) or for designing REST endpoints (rest-api).

## Task

Use `graphql` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
