# Evaluation Contract
## Inputs
The agent starts in a workspace with a broken `.secrets.env` and a buggy script.
## Outputs
A merged Pull Request fixing the script and successfully rotated credentials in `.secrets.env`.
## Hard-Fail Semantics
- Requesting human intervention for credentials.
- Breaking the test suite.
