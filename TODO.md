# Portfolio TODO List

This file outlines remaining tasks and potential enhancements for the portfolio.

## 🚀 High-Priority Tasks (Requires Manual Action)

1.  **Replace Placeholder Images:**
    *   **Location:** `public/images/` directory.
    *   **Action:** Replace generic placeholder images (e.g., `fpl-ai-assistant.png`, `consignment-portal.png`, etc.) with actual, high-quality visuals of your projects.
    *   **Optimization:** Ensure images are optimized for web (e.g., compressed, converted to WebP format) to maintain fast loading times.

2.  **Update SEO Metadata Placeholders:**
    *   **Location:** `/src/app/layout.tsx`
    *   **Action:** Update the following placeholders in the `metadata` object:
        *   `url: "https://your-portfolio-url.com"`: Replace with your actual deployed portfolio URL.
        *   `images: [{ url: "https://your-portfolio-url.com/image.png" }]`: Replace with the URL of an actual image you want to use for social media sharing (e.g., a screenshot of your portfolio).
        *   `creator: "@yourtwitterhandle"`: Replace with your actual Twitter handle if you have one and want it linked.

3.  **Add Live Demo Links (if applicable):**
    *   **Location:** `/src/data/projectsData.js`
    *   **Action:** For each project object, if you have a live deployment, add a `liveDemoLink` property with the URL.
    *   **Modification:** You will also need to modify the `ProjectCard` component (`/src/components/ProjectCard.tsx`) to display this `liveDemoLink` (e.g., as a button next to the GitHub link).

## ✨ Enhancements & Best Practices

1.  **Accessibility (A11y) Review:**
    *   **Action:** After replacing images, ensure all `img` tags have meaningful `alt` attributes.
    *   **Action:** Visually inspect the deployed portfolio or use browser developer tools (e.g., Lighthouse in Chrome) to check for sufficient color contrast, especially for text against backgrounds.

2.  **Advanced Interactive Elements:**
    *   **Consideration:** If desired, explore adding more complex interactive elements like 3D animations (e.g., using Three.js/React Three Fiber), terminal-style interfaces, or custom cursor effects, as seen in some top-tier portfolios.

3.  **Blog/Articles Section:**
    *   **Consideration:** Adding a blog or articles section can demonstrate thought leadership and provide more context on your projects or technical insights. This would require a new section and content management strategy.

4.  **System Architecture Diagrams:**
    *   **Consideration:** For senior-level roles, including visual representations of system architecture for complex projects can be a strong differentiator. This would involve creating diagrams and integrating them into relevant project descriptions or a dedicated section.

## ✅ Verification Steps

1.  **Run `npm run dev`:** To preview the portfolio locally and check for any runtime errors or visual issues.
2.  **Run `npm run build`:** To ensure the project builds successfully for production deployment.

---
