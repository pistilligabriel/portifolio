// src/components/ContactFooter.jsx
export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-background text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Vamos conversar?</h3>
        <p className="mb-6">Entre em contato pelo e‑mail: gabriel@email.com</p>
        <div className="space-x-4">
          <a href="https://github.com" className="underline">GitHub</a>
          <a href="https://linkedin.com" className="underline">LinkedIn</a>
        </div>
        <p className="text-sm text-gray-400 mt-8">© 2025 Gabriel. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}