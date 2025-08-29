# Adil Ajdaa 

**Senior Mobile Developer** | Building apps that don't suck

🌐 **[Live Portfolio](https://edsteine.github.io)** 

---

## What's this about?

This is my portfolio website built with Next.js. I've been coding for 9+ years, mostly mobile stuff (Android/Flutter), but I dabble in full-stack when needed. 

Currently working on apps that serve 100k+ users daily. Not gonna lie, that's pretty cool.

## Tech I actually use

**Mobile:** Kotlin, Java, Flutter, Swift  
**Web:** React, Next.js, Angular, Spring Boot  
**Database:** PostgreSQL, MongoDB  
**DevOps:** Docker, AWS, GitHub Actions  

And whatever else gets the job done.

## What makes this portfolio different?

- Dark/light mode that actually works
- Responsive design (because it's 2024)
- Smooth animations with Framer Motion
- No hardcoded content - everything's in data files
- Actually loads fast

## Project structure

```
portfolio-site/
├── src/
│   ├── app/           # Next.js 15 app directory
│   ├── components/    # React components
│   └── data/          # All content lives here
├── public/images/     # Photos and stuff
└── next.config.ts     # Next.js config
```

## Running locally

```bash
# Clone it
git clone https://github.com/edsteine/edsteine.github.io.git
cd edsteine.github.io 

# Install stuff
npm install

# Run it
npm run dev
```

Then go to `http://localhost:3000`

## Deployment

This thing deploys automatically to GitHub Pages when I push to main. 

If you want to deploy manually:
```bash
npm run build
npm run export
```

The magic happens in `next.config.ts`:
```typescript
output: 'export',
trailingSlash: true,
images: { unoptimized: true }
```

## Updating content

Want to change something? Don't touch the components. Everything's in `src/data/`:

- `experienceData.js` - Work history
- `skillsData.js` - Technical skills
- `educationData.js` - Education and certs
- `projectsData.js` - Featured projects
- `siteConfig.js` - Personal info

## Performance

Lighthouse score: 100/100 (because I'm obsessive about performance)

## Contact

- **Email:** a.ajdaa@outlook.com
- **LinkedIn:** [linkedin.com/in/edsteine](https://linkedin.com/in/edsteine)  
- **GitHub:** [github.com/edsteine](https://github.com/edsteine)
- **Location:** Morocco/Spain

## License

MIT. Use it, fork it, whatever. Just don't claim you built it from scratch.

---

**PS:** If you're a recruiter reading this, yes I'm available for interesting projects. Let's talk.