# Submissions Page Design

Date: 2026-07-15
Status: Approved

## Purpose

Add a public Submissions page where people can submit their material. The page serves three audiences:

1. **Reissue submissions.** Forgotten projects, bedroom recordings, and rediscovered projects from any decade: things that never saw the light of day, or that sparked in a specific scene that time has forgotten. Genres of interest are punk, metal, EBM, synth, new wave, post-punk, and adjacent styles.
2. **Current bands.** Active bands looking for a release. Tape, CD, and digital to start, with vinyl depending on traction.
3. **Compilation call.** An open call for a vinyl compilation of leftist, queer, anti-fascist music spanning synth, industrial, synthpop, techno, and adjacent sounds.

## Constraints

- The site is a static Create React App with no backend. There is no server to receive audio file uploads.
- Submissions are delivered by email using the existing EmailJS integration (the same service already used by the Contact page).
- Submitters provide links to their material rather than uploading files.
- No new EmailJS template is created. The existing template (`template_87ru9na`) renders `from_name`, `reply_to`, and `message`, so all submission fields are composed into a single formatted `message` body.
- Style: no em dashes in any copy.

## Route and Navigation

- New route `/submissions` added to `src/App.js`.
- New entry added to the `pages` array in `src/components/ResponsiveAppBar/index.js` with the label `SUBMIT`. The nav derives its href from the lowercased label, so `SUBMIT` would link to `/submit`. To keep the route at `/submissions`, the nav uses an explicit path rather than the lowercased-label convention (see Implementation Notes).
- The page appears in both the desktop button row and the mobile hamburger menu, consistent with the other pages.

## Page Structure

New files: `src/pages/Submissions/index.js` and `src/pages/Submissions/styles.js`, mirroring the structure and styling patterns of `src/pages/Contact`.

1. **Page title and intro.** Title plus intro copy pitching the call for material: forgotten projects, bedroom recordings, rediscovered tapes, anything from any decade that never saw the light of day or sparked in a scene that time forgot, as well as current bands looking for a release. Lists the genres of interest (punk, metal, EBM, synth, new wave, post-punk, and adjacent).

2. **Current bands call-out.** A highlighted block for active bands seeking a release. Tape, CD, and digital to start, with vinyl depending on traction. Directs them to pick the current-band option in the form.

3. **Compilation call-out.** A visually distinct highlighted block announcing an open call for a vinyl compilation of leftist, queer, anti-fascist music spanning synth, industrial, synthpop, techno, and adjacent sounds. It directs interested submitters to tick the compilation option in the form.

4. **Submission form.** Uses EmailJS via `emailjs.sendForm`, following the exact success, validation, and reset flow of the Contact page. Fields:
   - Your name (required)
   - Email (required)
   - Project / artist name (required)
   - What are you submitting? (required, at least one): a reissue of a forgotten or rediscovered project; a current, active band seeking a release; the leftist, queer, anti-fascist compilation. Rendered as checkboxes so a submission can match more than one.
   - Genre / scene (required)
   - Decade / era
   - Location / scene origin
   - Links to material (required): Bandcamp, SoundCloud, Google Drive, WeTransfer, Dropbox, and similar
   - Tell us about the project (multiline description and story)
   - Checkbox: I own or control the rights to this material
   - Submit button

## Data Flow and Delivery

1. User fills the form and submits.
2. On submit, the handler prevents default, marks the form submitted, and runs `reportValidity()` on the form ref (same pattern as Contact).
3. If valid, the handler composes a single formatted `message` string from all submission fields (submission type selections, project name, genre, decade, location, links, description, rights confirmation).
4. The handler sends the email through the existing EmailJS service and template, passing `from_name` (the name field), `reply_to` (the email field), and the composed `message`.
5. On success, the form resets and a success alert is shown using the same alert component and copy pattern as Contact.

Because the composed body must reach the template's `message` variable, delivery uses `emailjs.send` with an explicit params object (or an equivalent hidden `message` field populated before `sendForm`). The name and email map to `from_name` and `reply_to` so the existing template renders them.

## Error Handling

- Native HTML5 required-field validation gates submission, surfaced through `reportValidity()`, matching Contact.
- The "What are you submitting?" checkbox group cannot be enforced by native validation. A small JavaScript guard in the submit handler checks that at least one option is selected before sending, and surfaces an inline message if none is. Submission does not proceed until at least one is chosen.
- The submit button is disabled while a submission is in flight to prevent duplicate sends.
- On a successful send, show the success alert and reset the form.

## Testing

- Manual verification: load `/submissions`, confirm the page renders, both the current-bands and compilation call-outs are visible, and the nav highlights correctly in both desktop and mobile layouts.
- Manual verification: submit the form and confirm the email arrives with all fields present in the composed body, including the submission-type selections and the rights checkbox.
- Validation check: attempt to submit with required fields empty and confirm submission is blocked.

## Implementation Notes

- The nav bar currently builds hrefs by lowercasing the label (`/${page.toLowerCase()}`). Adding a raw `SUBMIT` string would produce `/submit`, not `/submissions`. Resolve this by making the nav support an explicit path for the new entry (for example, mapping label to path) so the label reads `SUBMIT` while linking to `/submissions`. Keep the change minimal and consistent with the existing rendering for both desktop and mobile.
- Reuse the Contact page's styled-components patterns in `styles.js` for the container, title, intro, form fields, alert, and submit button. Add styles for the compilation call-out block and the checkboxes.

## Out of Scope (YAGNI)

- No file uploads.
- No backend or database.
- No new EmailJS template.
- No admin or moderation interface.
- No changes to the unrelated About page (it exists but is not yet routed; left untouched).
