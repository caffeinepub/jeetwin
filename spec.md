# Specification

## Summary
**Goal:** Add entrance/hover animations throughout the entire JeetWin Pro website and redirect every clickable element to a WhatsApp URL in a new tab.

**Planned changes:**
- Add fade-in/slide-up viewport entrance animations to all major sections (hero, stats bar, featured games, promotions, why choose us, footer)
- Add staggered card reveal animations for game cards and promo cards on load
- Add hover scale and glow effects on all interactive cards and buttons
- Add smooth transition effects to the navigation bar
- Add animated text overlays to hero carousel slides
- Replace all link and button click handlers site-wide (navigation links, Login, Register, Play Now, Claim Now, footer links, social media icons, hero CTA buttons, stats bar items) to open `https://api.whatsapp.com/send?phone=917578900242&text=I%20want%20New%20Reddyanna%20%20Id%20!!!!!!!!!!!!!!` in a new tab
- Remove all internal routing and anchor navigation

**User-visible outcome:** Every section of the site animates smoothly as users scroll and interact, and clicking any button or link on the site opens the specified WhatsApp chat in a new browser tab.
