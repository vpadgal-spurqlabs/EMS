export default function Submit() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-2xl">

    
      <div className="absolute w-72 h-72 bg-white/20 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-10 right-10 animate-bounce"></div>

      <div className="text-center z-10 px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-bounce">
          Thank You!🎉 
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-white/100 animate-pulse">
          Your submission has been received successfully.
        </p>

        <p className="mt-4 text-white italic font-bold text-lg animate-ping">
          Enjoy your journey with us 🚀
        </p>

      </div>
    </div>
  );
}
