function Connectform() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-6 pb-10">
                <div
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8"
                >

                    <div className="flex items-center gap-6">
                        <div className="text-7xl text-indigo-500">
                            <i className="fa-solid fa-envelope-open-text"></i>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-2">Stay Updated!</h3>
                            <p className="text-gray-600 text-lg">
                                Subscribe to our newsletter and get the latest
                                blog posts in your inbox.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full lg:w-auto gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full lg:w-80 px-5 py-4 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition"
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Connectform;