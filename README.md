# Tax Loss Harvesting Dashboard

## Overview

Tax loss harvesting is a strategy used to reduce tax liability by offsetting capital gains with capital losses. This application simulates that process by allowing users to interactively select holdings and observe how their capital gains change in real time.

The dashboard displays pre-harvesting and post-harvesting capital gains and dynamically updates results based on user selections.

---

## Features

- Pre-harvesting capital gains view
  - Short-term (STCG) and long-term (LTCG)
  - Profits, losses, net gains
  - Total realised capital gains
- Post-harvesting simulation
  - Updates based on selected holdings
  - Real-time recalculation of gains
- Selection logic
  - Positive gain → added to profits
  - Negative gain → added to losses
- Conditional savings indicator
  - Displays "You're going to save ₹X" when applicable
- Holdings table
  - Asset details with logo and name
  - STCG and LTCG breakdown
  - Checkbox selection per row
  - Select all / deselect all functionality
- Responsive UI
- Loading and error states

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS / Tailwind
- React Hooks (`useState`, `useEffect`, `useMemo`)

---

## API Layer (Mocked)

Two mocked APIs simulate backend responses using Promises and `setTimeout`.

### getHoldings

Returns an array of asset holdings with asset details, prices, and gain data.

### getCapitalGains

Returns short-term and long-term profits and losses.

---

## Core Logic

### Capital Gains Calculation

- Net STCG = stcg.profits - stcg.losses
- Net LTCG = ltcg.profits - ltcg.losses
- Realised Capital Gains = Net STCG + Net LTCG

### Harvesting Logic

On selecting a holding:
- If gain > 0 → added to profits
- If gain < 0 → added to losses

### Savings Calculation

Savings = Pre-harvesting Realised Gains - Post-harvesting Realised Gains

---

## UI Structure

- Pre-Harvesting Card (dark)
- After-Harvesting Card (blue)
- Holdings Table with real-time updates

---

## Project Structure

```
src/
├── components/
├── services/
├── utils/
└── pages/
```

---

## Setup Instructions

```bash
git clone <your-repo-link>
cd <project-folder>
npm install
npm run dev
```

---

## Deployment

https://tax-loss-harvesting-ashen.vercel.app/

---


