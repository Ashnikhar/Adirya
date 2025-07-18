export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "CarePlix has revolutionized how we deliver healthcare to our patients.",
      author: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
    },
    {
      quote: "The AI-powered insights have improved our diagnostic accuracy significantly.",
      author: "Dr. Michael Chen",
      role: "Healthcare Director",
    },
    {
      quote: "Outstanding platform that truly makes a difference in patient care.",
      author: "Dr. Emily Rodriguez",
      role: "Clinical Specialist",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Users Say About CarePlix</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border">
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
