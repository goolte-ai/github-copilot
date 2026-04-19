#!/usr/bin/env node
const JiraApi = require('jira-client');

const jira = new JiraApi({
  protocol: 'https',
  host: process.env.JIRA_HOST || 'yourcompany.atlassian.net',
  username: process.env.JIRA_EMAIL,
  password: process.env.JIRA_TOKEN,
  apiVersion: '2',
  strictSSL: false
});

async function main() {
  const issueId = process.argv[2];
  try {
    const issue = await jira.findIssue(issueId);
    console.log(JSON.stringify({
      key: issue.key,
      summary: issue.fields.summary,
      description: issue.fields.description,
      assignee: issue.fields.assignee?.displayName,
      priority: issue.fields.priority?.name,
      labels: issue.fields.labels
    }, null, 2));
  } catch (error) {
    console.error(JSON.stringify({ error: error.message }));
  }
}

main();
