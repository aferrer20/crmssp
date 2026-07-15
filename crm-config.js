// ============================================================
//  CRM SUITE — per-workspace config (single source of truth)
//  Loaded by both index.html (login gate) and app.html (guard).
//
//  Backend values from: Supabase → Project → Settings → API
//    • Project URL       → SUPABASE_URL
//    • Publishable/anon   → SUPABASE_KEY
//  Confirmed project ref: stpkhpxhqzgruorrupaw  (shared by both CRMs)
// ============================================================
window.__CRM = {
  // ---- Supabase (same project powers both workspaces) ----
  SUPABASE_URL: 'https://stpkhpxhqzgruorrupaw.supabase.co',
  SUPABASE_KEY: 'sb_publishable_v4uwhuJdh4kJQrN1tGSEWA_5rf9Nl7q',

  // ---- This workspace ----
  COMPANY:      'ssp',                              // matches companies.id + RLS
  COMPANY_NAME: 'Strategic Supply Partners',
  TAGLINE:      'Procurement CRM',
  DOMAIN:       'strategicsupplypartners.com.au',   // members with this domain get in
  ICON:         '📦',
  ACCENT:       '#3b82f6',   // SSP = blue
  ACCENT2:      '#2563eb',
  BTN_TEXT:     '#ffffff',

  // ---- Sibling workspace (owner-only switch link) ----
  OTHER_COMPANY: 'chiefneg',
  OTHER_NAME:    'The Chief Negotiators',
  OTHER_URL:     'https://cncrm.thechiefnegotiators.com'
};
