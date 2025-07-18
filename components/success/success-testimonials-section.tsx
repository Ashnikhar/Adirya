export function SuccessTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I have been using this tool for quite some time now and I must say that the experience has been quite amazing. The results are quite satisfactory and I would definitely recommend this to others.",
      author: "A.K Sharma",
      role: "CEO",
    },
    {
      quote:
        "Thanks for developing a revolutionary tool that has completely changed the way we approach healthcare. The AI-powered insights have been invaluable for our decision-making process.",
      author: "S. Patel",
      role: "CTO",
    },
    {
      quote:
        "It has played a key role in the path of growth of our company. The platform has enabled us to scale our operations efficiently while maintaining the highest quality of service.",
      author: "R. Kumar",
      role: "VP Operations",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Users Say About Adirya Health</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl text-[#008080] mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
