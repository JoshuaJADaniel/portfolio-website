const AllIcon = (active: boolean) =>
  active ? (
    <svg viewBox="0 0 24 24">
      <path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8" />
      <path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6" />
      <path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6" />
      <path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59" />
    </svg>
  ) : (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6z" />
    </svg>
  );

const SkillsIcon = (active: boolean) =>
  active ? (
    <svg viewBox="0 0 24 24">
      <path fill="#EA4335" d="M6 15.5l-3 2.94V10h3v5.5z" />
      <path fill="#FBBC04" d="M11 13.66l-1.57-1.34L8 13.64V6h3v7.66z" />
      <path fill="#34A853" d="M16 12l-3 3V2h3v10z" />
      <path fill="#4285F4" d="M18.81 11.81L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83z" />
    </svg>
  ) : (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83" />
    </svg>
  );

const ExtracurricularsIcon = (active: boolean) =>
  active ? (
    <svg viewBox="0 0 24 24">
      <path fill="#fbbc04" d="M6 20v-8H4v8c0 1.1.9 2 2 2h6v-2H6" />
      <path fill="#34a853" d="M18 20h-6v2h6a2 2 0 0 0 2-2v-8h-2v8" />
      <path fill="#ea4335" d="M18 2h-5v2h5v8h2V4a2 2 0 0 0-2-2" />
      <path fill="#4285f4" d="M6 2a2 2 0 0 0-2 2v8h2V4h2v8l2.5-1.5L13 12V2H6" />
    </svg>
  ) : (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16" />
    </svg>
  );

export { AllIcon, SkillsIcon, ExtracurricularsIcon };
