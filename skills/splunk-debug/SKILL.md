---
name: splunk-debug
description: Debug deployments using Splunk MCP server
user-invocable: true
---
# Splunk Debug Instructions

1. Identify deployment context (Jira ticket, timestamp, service name)
2. Use splunk-mcp tools:
   - searchLogs("error $SERVICE last 2h")
   - runSPL("index=prod | stats count by sourcetype")
3. Parse results for error patterns, stack traces
4. Generate root cause analysis comment
5. Suggest fixes based on common patterns
6. Update Jira ticket with findings
