// import Slider from "../components/Slider";
// import Card from "../components/Card";

// export default function Home() {
//   return (
//     <div className="space-y-10">
//       <Slider />
//     </div>
//   );
// }


import Slider from "../components/Slider";
import Card from "../components/Card";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Submitted Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-16">

      {/* Slider Section */}
      <Slider />

      {/* Gallery Section */}
      <Card>
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-3d-isometric-illustration-interior-office-room-png-image_3565436.jpg"
            alt="office"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-teamwork-concept-people-work-in-team-build-ideas-flat-vector-illustration-png-image_6667638.jpg"
            alt="team"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-strategy-illustration-download-in-svg-png-gif-file-formats--goals-plan-decision-making-workplace-culture-pack-illustrations-8561796.png"
            alt="business"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20210411/original/pngtree-target-achievement-and-best-teamwork-background-flat-concept-png-image_6212699.jpg"
            alt="achievemnets"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </Card>

      
      {/* Contact Form Section */}
<Card>
  <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">
    Contact Us
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Left Side Image */}
    <div className="flex justify-center md:order-2 order-1">
      <img
        src="https://image.freepik.com/free-vector/contact-us-concept-illustration_278696-3.jpg"
        alt="Contact Illustration"
        className="rounded-2xl shadow-xl w-full max-w-md"
      />
    </div>

    {/* Right Side Form */}
    <form onSubmit={handleSubmit} className="space-y-4 md:order-1 order-2">

      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
        required
      />

      <textarea
        placeholder="Your Message"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        rows="4"
        className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Send Message
      </button>
    </form>

  </div>
</Card>


    </div>
  );
}
