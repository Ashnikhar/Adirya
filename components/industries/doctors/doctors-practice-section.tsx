import Image from "next/image"

export function DoctorsPracticeSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Doctor with tablet"
              width={200}
              height={200}
              className="rounded-xl mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Practice on your terms</h3>
            <p className="text-purple-100">
              Tailor your medical practice to your preferences with our flexible solutions, ensuring you can provide
              optimal care on your own terms.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Medical consultation"
              width={200}
              height={200}
              className="rounded-xl mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Earn extra income</h3>
            <p className="text-blue-100">
              Maximize your income potential by optimizing your practice through our innovative platform, attracting new
              patients through our user-friendly platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
