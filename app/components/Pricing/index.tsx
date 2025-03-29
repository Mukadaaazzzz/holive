"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This platform revolutionized my bill payments—it's fast, secure, and truly hassle-free!",
      author: "John",
      position: "Satisfied Customer",
    },
    {
      quote:
        "I not only pay my bills effortlessly but also earn extra income promoting essential products.",
      author: "Adetunji",
      position: "Happy Reseller",
    },
  ];

  return (
    <section className="py-16 mt-[-20px] ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-midnightblue mt-[-40px]  ">
          Trusted by 100k+ Users for Seamless Bill Payments!
        </h2>
        <p className="mt-4 text-lg text-gray-600 ">
          Join thousands of happy customers enjoying fast, secure, and hassle-free payments every day.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="text-midnightblue font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-electricblue rounded-xl py-12 px-8">
          <h3 className="text-3xl font-bold text-white">
            Ready to Experience Hassle-Free Payments?
          </h3>
          <p className="mt-4 text-white text-lg">
            Join us today and simplify your bill payments while unlocking extra earning opportunities!
          </p>
          <a
            href="/signup"
            className="mt-6 inline-block bg-white text-electricblue font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
