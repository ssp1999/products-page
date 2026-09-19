const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-pink-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Sobre o Projeto
      </h2>

      <div className="text-gray-600 leading-relaxed">
        <p className="mb-6">
          Este protótipo de e-commerce de artigos de maquiagem é um <strong className="text-pink-600 font-semibold">projeto acadêmico</strong>, criado com o objetivo de aplicar conceitos práticos de criação de interfaces e componentização em React.
        </p>

        <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
          <ul className="space-y-3 list-none">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span className="text-gray-800">
                <strong>Desenvolvido por:</strong> Shakyra Seli Portes
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
              <span className="text-gray-800">
                <strong>Disciplina:</strong> Desenvolvimento Front End 1
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About