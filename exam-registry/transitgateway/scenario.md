# Clawford Tier-2 Exam: transitgateway

You are taking an agent-native verification exam for skill `transitgateway`.
Configures AWS Transit Gateway: creating a hub and attaching VPCs, segmenting traffic with route tables, centralizing egress and inspection through a hub (appliances or a Gateway Load Balancer endpoint), forcing east-west traffic between VPCs through AWS Network Firewall, connecting on-premises networks over the transit-gateway side of a Site-to-Site VPN or Direct Connect attachment (including ECMP to aggregate bandwidth across multiple VPN tunnels), peering transit gateways across Regions, migrating from a VPC peering mesh, and routing IP multicast. Applicable when connecting many VPCs through one router, isolating environments, forcing VPC-to-VPC traffic through a central Network Firewall, reaching on-premises over the hub, linking Regions, or moving off a peering mesh. Not applicable for single-VPC routing, VPC peering between two VPCs (vpcpeering skill), Direct Connect gateway or virtual interface setup (directconnect skill), or Route 53 DNS work.

## Task

Use `transitgateway` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
