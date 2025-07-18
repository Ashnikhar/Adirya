import { Button } from "@/components/ui/button"

export function ContactFormSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#008080]">Connect</span> with Us
            </h2>
            <p className="text-xl text-gray-300">
              Write us anytime to get to know more about enabling a better and efficient healthcare system as we will be
              glad to help you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#008080] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#008080] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#008080] focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#008080] focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#008080] focus:outline-none resize-none"
                placeholder="Tell us about your project, needs, or questions..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-[#008080] to-[#00AAAA] hover:from-[#006666] hover:to-[#008888] text-white px-12 py-4 text-lg font-semibold">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
