<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# WebGo - Instant Access to Best Websites

This contains everything you need to run your app locally and deploy to Vercel.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and create a new project
3. Import your repository
4. Vercel will automatically detect the Vite framework and configure the build settings
5. Add your `GEMINI_API_KEY` as an environment variable in your Vercel project settings
6. Deploy!

Your site will be live at your-project.vercel.app
