export default function AsSeenIn() {
  const publications = [
    'Solar Power World',
    'Energy.gov',
    'EnergySage',
    'Green Builder',
    'Renewable Energy'
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium">As Featured In</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="text-center font-bold text-lg text-gray-700 opacity-60 hover:opacity-100 transition-opacity"
            >
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
