# Smaller, balanced director photos on desktop and tablet

Only the Directors section changes. The phone layout stays exactly as it is now.

## What changes
- On tablet and desktop, each director photo gets a fixed maximum size: about 320px wide on tablet and 360px on desktop, keeping its current portrait shape.
- The photo column narrows to fit the photo, and the bio column takes the remaining width. The photo then sits about as tall as the name, bio and project tags beside it, so there are no large empty gaps above or below the text.
- The photo and bio line up at the top and stay visually centred next to each other.
- The zig-zag stays the same: Kiran's photo is on the left and Samir's is on the right. The gentle photo zoom, rounded corners and text are unchanged.

## Technical details
- File: `src/components/site/Founders.tsx` only.
- Article grid: on `md` screens, swap `md:grid-cols-2` for `md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr]`. Samir's row reverses the columns (`md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_360px]`) and keeps the existing order classes.
- Photo wrapper: keep `aspect-[4/5]` and `max-w-sm` for phones. Replace `md:max-w-none` with `md:max-w-full`, and add `md:justify-self-end` on Samir's row.
- Below `md` (phones), no classes change.
- After the change, check with Playwright at 390, 834 and 1280 widths. On tablet and desktop, the photo height should be close to the bio height, with no sideways scrolling.
