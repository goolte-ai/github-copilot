```
Prerequisites
GitHub Copilot (Business/Enterprise) with agent mode enabled

VS Code 1.92+ (MCP protocol support)

Atlassian Cloud site (Jira/Confluence) admin access for first-time OAuth

Node.js 18+ (for local proxy if needed)

Step-by-Step Setup
1. Enable MCP in VS Code
text
Ctrl+Shift+P → "MCP: Enable MCP Support" 
Or check Extensions → "MCP Servers" panel exists. If missing, install "MCP Servers" from marketplace first.

2. Install Atlassian MCP (2 Options)
Option A: VS Code Marketplace (Recommended)

text
1. Extensions (Ctrl+Shift+X) → Search "Atlassian MCP Server" → Install
2. Command Palette → "MCP: View Installed Servers" 
3. Find "Atlassian" → Click "Start" → Triggers OAuth
Option B: Manual Config
Create .vscode/mcp.json:

json
{
  "servers": {
    "atlassian-jira": {
      "type": "http",
      "url": "https://yourcompany.atlassian.net/mcp",
      "auth": "oauth2"
    }
  }
}
3. OAuth Flow (First User Only)
text
1. Click "Start" on Atlassian server → Opens browser
2. Sign in → Grant Jira/Confluence scopes
3. "Lazy install" registers MCP app on your Atlassian site
4. VS Code shows "Connected" + detected tools (getIssue, createTicket, etc.)
4. Verify in Copilot Chat
text
1. Open Copilot Chat (Ctrl+Shift+P → "Copilot: Open Chat")
2. Click 🛠️ Tools icon → See "atlassian-jira" listed
3. Agent mode dropdown → Select model (Claude/GPT-4o)
4. Test: "Use atlassian-jira to fetch JIRA-123"
Troubleshooting
Issue	Fix
Issue	Fix
"MCP not found"	Install "MCP Servers" extension first 
OAuth fails	Site admin must approve first; check app permissions 
No tools detected	Restart MCP server (🛠️ → Restart) 
Server won't start	Check .vscode/mcp.json syntax; use absolute URLs 
Post-Setup Usage
text
# In Copilot Chat (agent mode)
/fix Use atlassian-jira getIssue("ABC-123") then implement
# Tools auto-discovered: getIssue, updateTicket, searchProjects, etc.
Result: Copilot can now create/update Jira tickets, fetch requirements, and link PRs without local scripts or API tokens. Perfect for your Zensar Jira+GitHub Actions workflow.

Test immediately: "List my open Jira issues" → should return JSON from your Atlassian site.
```
