export function AboutMissionSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">Our Mission</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize healthcare by leveraging artificial intelligence and cutting-edge technology to provide
              personalized, accessible, and affordable medical solutions for people around the world.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that everyone deserves access to quality healthcare, regardless of their location, economic
              status, or circumstances. Our AI-powered platform bridges the gap between medical expertise and patient
              needs.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">Our Risk</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We understand the critical nature of healthcare and the responsibility that comes with developing medical
              AI solutions. Our approach prioritizes patient safety, data privacy, and clinical validation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every solution we develop undergoes rigorous testing and validation to ensure it meets the highest
              standards of medical accuracy and safety before deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
