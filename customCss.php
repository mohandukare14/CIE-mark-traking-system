<style>
/* Custom Color Tokens & Animations */
:root {
  --color-primary-teal: #003c43;
  --color-dark-teal: #135d66;
  --color-deep-teal: #0c2d31;
  --color-light-mint: #77b0aa;
  --color-off-white: #e3f4f4;
  --color-dark-gray: #1a1a1a;
  --color-neon-lime: #bbf661;
  --color-accent-gold: #fbbf24;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-off-white);
  color: var(--color-dark-gray);
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.glass-card {
  background: rgba(19, 93, 102, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
}

.glass-modal {
  background: rgba(12, 45, 49, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite ease-in-out;
}

/* Scrollbar Customization */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #003c43;
}
::-webkit-scrollbar-thumb {
  background: #77b0aa;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #bbf661;
}
</style>
