# github-copilot-mcp-skills
🚀 90-Second Setup
bash
# 1. Copy ALL files above into correct folders
# 2. Terminal in repo root:
npm install
chmod +x .github/skills/jira-cli/scripts/*.js
source .env  # Load env vars

# 3. VS Code → Copilot Chat → Test:
# /jira-cli JIRA-123
# /incident-orchestrator deployment failure
✅ Test Commands (Copy to Copilot Chat)
text
/jira-cli JIRA-123                    # Fetch ticket details
/incident-orchestrator JIRA-456       # Full Jira+Splunk flow  
"Use splunk-debug to analyze prod errors"  # MCP Splunk queries
That's it! Copy → paste → npm i = instant production DevOps orchestration for Zensar workflows. No downloads needed.

Ready to test? Open VS Code Copilot Chat → /jira-cli TEST-123 🚀

```
copilot-complete-package/
├── README.md
├── .vscode/
│   ├── mcp.json
│   └── settings.json
├── package.json
├── .env.example
└── .github/
    ├── skills/
    │   ├── jira-cli/
    │   │   ├── SKILL.md
    │   │   └── scripts/jira-lookup.js
    │   ├── splunk-debug/
    │   │   └── SKILL.md
    │   └── incident-orchestrator/
    │       └── SKILL.md
    └── agents/
        └── incident-analyst.agent.md  ← NEW: Cloud model docs
```
