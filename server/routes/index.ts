import { eventHandler } from "#imports"

export default eventHandler((event) => {
  return `
      <h1>This is your brand new Nitro project 🚀 </h1>
      <p>Get started by editing the <code>server/routes/index.ts</code> file.</p>
      <p>Learn more from <a href="https://nitro.unjs.io" target="_blank">📖 Nitro Documentation</a></p>
    `;
});
