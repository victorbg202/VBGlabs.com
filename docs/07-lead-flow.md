# Contextual enquiry flow

## Confirmed commercial policy

- Reply by email within one business day.
- Initial email guidance and a brief meeting if needed are free and without obligation.
- A detailed assessment, roadmap or implementation is quoted separately.
- VBG Invoicing demos are 20-minute video calls arranged by email.
- Leads go to info@vbglabs.com through the existing FormSubmit endpoint.
- No booking calendar, required phone, required company or mandatory budget question.
- Postcraft remains in preparation; no trial or finished demo is advertised.

## Page journeys

- Automation, AI consulting, training and invoicing pages in CA/ES/EN have an on-page form. Hero and pricing links lead directly to it.
- The 36 solution and sector pages keep their individual service and source context.
- Name, email, message and privacy acceptance are required. Training participants and monthly supplier invoice volume are optional.
- General contact has an optional interest selector; it accepts only a known interest and a build-time allowlisted source path from contextual links. Unknown query values are ignored. User-written details are never placed in URLs.
- Article CTAs select training, automation or AI consulting according to the article group and pass the actual article path. Existing related solution links remain.
- The cost calculator provides an expandable enquiry form. Before submission it validates calculator values and includes a readable summary of current inputs/results. This is disclosed beside the form. No calculator data is persisted in browser storage.
- Contact-page language switching retains the interest and allowlisted source, without copying personal fields into URLs.

## Submission and measurement

- Validation and the existing honeypot run before a request.
- Repeated submits while a request is running are ignored. Network requests time out after 20 seconds and retain entered data on failure.
- A success message and generate_lead require both an HTTP success and an explicit boolean/string true acceptance from FormSubmit. HTTP 200 with success=false is an error.
- form_start: first field focus in an enquiry attempt.
- form_error: validation, calculator validation, network, HTTP, rejected, invalid_response or timeout. Error text and field contents are excluded.
- generate_lead: accepted submission, with form ID, service interest, enquiry type, source path and language. It indicates provider acceptance, not a confirmed contract or independently verified inbox delivery.
- cta_click and contact_click continue to cover contact links, inline form anchors, calculator CTA, email and phone links.
- All events pass through the existing analytics consent gate. Contact values and calculator figures are not passed to Analytics.

## Maintenance

Commercial promises and contextual labels live in src/data/enquiries.ts. The form submission code is shared in src/scripts/contact-form.ts. Build-time source choices are generated from site routes, solution pages and published articles.

Local QA intercepts FormSubmit requests to exercise acceptance, rejection, HTTP/network/JSON errors, timeout, retry and duplicate prevention without sending test emails. Inbox delivery requires an actual submission and a recipient-side check; it is not established by the browser success state alone.
