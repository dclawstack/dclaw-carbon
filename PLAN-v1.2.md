# DClaw Carbon — v1.2 Feature Roadmap

> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (open-sustainability), AI product research (Persefoni, Watershed, Sweep, CarbonChain, Emitwise)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] Emission source CRUD
- [ ] Carbon calculation
- [ ] Basic reporting
- [ ] Scope tracking (1/2/3)
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI Carbon Copilot (Sustainability Advisor)
**Description:** AI assistant that analyzes emissions data, suggests reduction strategies, and answers ESG questions. "How can we reduce our Scope 3 emissions by 20%?"
- **AI Angle:** Emission analysis + reduction strategy recommendation + ESG Q&A.
- **Backend:** `/api/v1/ai/carbon-chat` endpoint. Reduction strategy engine.
- **Frontend:** Chat with emissions context. Strategy recommendation cards.
- **Files:** `backend/app/services/carbon_ai.py`, `frontend/src/components/carbon-copilot.tsx`

#### 2. Scope 1/2/3 Emission Tracking
**Description:** Comprehensive emission tracking across all scopes with activity data capture.
- **Backend:** Emission calculator with GHG Protocol methodology.
- **Frontend:** Scope breakdown dashboard. Emission factor library.
- **Files:** `backend/app/services/emissions.py`

#### 3. Automated Data Collection
**Description:** Integrate with ERP, utilities, travel, and supply chain systems for auto-capture.
- **Backend:** Integration connectors with data mapping.
- **Frontend:** Integration dashboard with sync status.
- **Files:** `backend/app/integrations/data_collectors.py`

#### 4. Carbon Reporting & Disclosure
**Description:** Generate reports for CDP, TCFD, SASB, GRI with auto-populated data.
- **Backend:** Report templates with standard mappings.
- **Frontend:** Report builder with standard selector.
- **Files:** `backend/app/services/carbon_reporting.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI Reduction Strategy Recommendations
**Description:** AI analyzes emission hotspots and suggests prioritized reduction initiatives.
- **AI Angle:** Hotspot identification + initiative ranking + ROI estimation.
- **Backend:** Strategy recommendation engine.
- **Frontend:** Reduction roadmap with initiative cards.

#### 6. Supplier Engagement & Scoring
**Description:** Assess supplier emissions and engagement. Score and benchmark suppliers.
- **Backend:** Supplier assessment model.
- **Frontend:** Supplier scorecard. Benchmark comparison.

#### 7. Offset & Credit Management
**Description:** Track carbon offset purchases, retirement, and verification.
- **Backend:** Offset registry with credit tracking.
- **Frontend:** Offset portfolio with project details.

#### 8. Scenario & Target Modeling
**Description:** Model decarbonization pathways. Set and track SBTi-aligned targets.
- **Backend:** Scenario modeler with target tracking.
- **Frontend:** Pathway visualization. Target progress tracker.

### P2 — Could Have (v1.3+)

#### 9. Product-Level Carbon Footprint
**Description:** Calculate cradle-to-gate and cradle-to-grave product carbon footprints.

#### 10. AI-Powered Life Cycle Assessment (LCA)
**Description:** Automated LCA for products and services.

#### 11. Real-Time Emission Monitoring
**Description:** IoT-connected emission sensors with real-time dashboards.

#### 12. Regulatory Compliance Automation
**Description:** Auto-track and report compliance with emerging carbon regulations (EU CBAM, SEC climate rules).

---

## Implementation Priority

1. **Week 1–2:** AI Carbon Copilot (P0.1) + Scope Tracking (P0.2)
2. **Week 3–4:** Data Collection (P0.3) + Carbon Reporting (P0.4)
3. **Week 5–6:** Reduction Strategies (P1.5) + Supplier Engagement (P1.6)
4. **Week 7–8:** Offset Management (P1.7) + Scenario Modeling (P1.8)
