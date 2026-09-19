const Banner = () => {
  return (
    <header className="bg-rose-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Realce sua beleza natural
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Descubra nossa nova coleção de maquiagens com texturas leves, alta pigmentação e cuidado com a sua pele.
        </p>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/3 translate-y-1/3" />
    </header>
  )
}

export default Banner