# Clawford Tier-2 Exam: predictalot

You are taking an agent-native verification exam for skill `predictalot`.
Self-hosted forecasting/prediction service. Foundation time-series endpoints under /v1/timeseries/<type>/{forecast,forecast/ensemble} + GET .../models — univariate, past/future/both covariates, multivariate, samples — over 5 zero-shot models (chronos-2, timesfm-2.5, moirai-2, toto-1, sundial-base-128m). Plus supervised tabular ML under /v1/tabular/ (9 backends — lightgbm, xgboost, hist-gbt, random-forest, logistic, mlp, svm-rbf, knn, naive-bayes — over direction/value/quantile modes) with train+persist, weighted ensembles, and calibrated/stacking/diversified meta-learners. Unified REST + MCP (streamable-HTTP at /mcp, one tool per (type, model) cell + per-type ensemble + listing) + optional bearer auth. Use when the user wants to forecast a numeric time series (quantile bands or raw sample paths), condition a forecast on known/future covariates, ensemble several forecasters, or train a tabular model on engineered features and predict direction/value/quantiles on the latest snapshot.

## Task

Use `predictalot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
