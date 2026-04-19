---
name: jira-lookup
description: Query Jira issues and generate code implementations
---
1. Ask for Jira ticket ID
2. Call jira-api.js with token
3. Parse issue → extract acceptance criteria
4. Generate code matching criteria
5. Link PR back to ticket
