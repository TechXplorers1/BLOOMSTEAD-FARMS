# bloomstead Farms Portal

A responsive Angular standalone application for bloomstead Farms' B2B agribusiness information and trade enquiries. Commodity calls to action open the RFQ form and preselect the commodity; there is no cart, checkout or payment flow.

## Run locally

```bash
npm install
npm start
```

Create a production build with `npm run build`.

## Structure

- `src/app/core/models` defines commodity and enquiry data contracts.
- `src/app/core/services/commodity.service.ts` provides signal-backed in-memory catalogue and enquiry data.
- `src/app/shared/components` contains the navigation, footer and typed reactive RFQ form.
- `src/app/features` contains the six routed pages.
- `tailwind.config.js` defines the bloomstead Farms brand color tokens; global responsive styling lives in `src/styles.css`.

The enquiry service is a mock presentation implementation: submissions exist only in browser memory and are not emailed or persisted. Replace its in-memory storage with a secured API or Firebase/Firestore integration before production. Confirm commodity availability, specifications, company details, contact information and regulatory documentation before publishing.
