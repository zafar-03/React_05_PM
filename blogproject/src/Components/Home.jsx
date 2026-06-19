function Home() {
    return (
        <>
            <div className="max-w-7xl mx-auto my-10">
                <div className="relative overflow-hidden rounded-3xl">


                    <img
                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                        alt="React Banner"
                        className="w-full h-[500px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-xl px-10 text-white">

                            <span className="inline-block px-4 py-2 text-sm font-medium bg-indigo-600 rounded-xl">
                                Featured Post
                            </span>
                            <h1 className="mt-6 text-5xl font-bold leading-tight">
                                React 2026: Complete <br />
                                Beginner Guide
                            </h1>
                            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                                Learn React from scratch with examples.
                                This complete guide helps you understand
                                React concepts in a simple way.
                            </p>
                            <button className="mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition">
                                Read More →
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;