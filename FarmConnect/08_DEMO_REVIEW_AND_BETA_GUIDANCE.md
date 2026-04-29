# 08 Demo Review And Beta Guidance

## Correct Demo URL
Use:
- `https://farmapp.kwezitechnologiesltd.africa`

Note:
- `https//farmapp.kwezitechnologiesltd.africa` (missing colon) is invalid.

## Live Endpoint Status Snapshot (19 April 2026)
- Frontend home: reachable (HTTP 200)
- API health: `https://connectapi-joq3.onrender.com/health` -> `{\"status\":\"ok\"}`
- Protected admin API route unauthenticated: HTTP 401 (expected)

## Evaluator Walkthrough (10 Minutes)
1. Open landing page and verify key value proposition sections load correctly.
2. Navigate to Pricing, Signup, and Login pages.
3. Create a non-admin account and test onboarding flow.
4. Confirm protected admin route is blocked for non-admin users (expected).
5. Validate basic interaction responsiveness and error messaging.

## What To Tell Reviewers Up Front
- This is a pre-beta live MVP with core journeys implemented.
- Infrastructure is currently cost-optimized on free tiers.
- Beta is planned in about 2 weeks with a controlled cohort and active monitoring.

## Free-Tier Risks And Mitigations

1. Cold starts and variable latency
- Mitigation: warmup checks, clear user messaging, monitor slow endpoints.

2. Resource limits during spikes
- Mitigation: cap beta cohort size, monitor concurrency, predefine paid-tier upgrade threshold.

3. Queue and worker reliability under load
- Mitigation: monitor queue depth, alert on backlog age, fail-safe retry policies.

4. Database throughput constraints
- Mitigation: index critical queries, track P95 response time, optimize heavy endpoints.

## Beta Go/No-Go Checklist (2 Weeks)

### Must pass before beta launch
- [ ] Home, signup, login, and profile flows pass end-to-end
- [ ] API health stable over 72-hour observation window
- [ ] Critical user journey error rate below agreed threshold
- [ ] Admin and moderation controls verified
- [ ] Incident response owner and escalation channel assigned

### Should pass before scale-up
- [ ] Baseline analytics dashboard in place
- [ ] Beta feedback form and triage process active
- [ ] Daily release/rollback checklist documented
- [ ] Upgrade plan for paid tiers approved

## Guidance For Application Reviewers
When presenting demo results in funding applications:
- Lead with what is currently working in production.
- Acknowledge free-tier constraints transparently.
- Show concrete readiness gates and upgrade triggers.
- Emphasize learning velocity and evidence-backed iteration.

## Suggested Upgrade Triggers
Move to paid infrastructure when any trigger occurs for 3 consecutive days:
- P95 API latency exceeds target threshold
- Error rate exceeds threshold on critical endpoints
- Queue backlog exceeds defined processing window
- Beta cohort concurrency exceeds free-tier comfort limits
