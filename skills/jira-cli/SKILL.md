---
name: jira-cli
description: Query Jira tickets and generate code/PRs from tickets
user-invocable: true
disable-model-invocation: false
---
# Jira CLI Instructions

1. Extract Jira ticket ID from user prompt (e.g., "JIRA-123")
2. Run `scripts/jira-lookup.js $TICKET_ID` to fetch details  
3. Parse JSON response for summary, description, acceptance criteria
4. Generate implementation code matching acceptance criteria
5. Create PR template with Jira ticket link in description
6. Run tests before finalizing changes

**Example Usage**: `/jira-cli JIRA-123` or "implement JIRA-123"
