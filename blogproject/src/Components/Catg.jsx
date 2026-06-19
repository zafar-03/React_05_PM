function Catg() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-10 px-6">
                <h2 className="text-4xl font-bold mb-8">Categories</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <i className="fa-brands fa-react text-5xl text-cyan-500"></i>
                        <div>
                            <h3 className="font-bold text-xl">React</h3>
                            <p className="text-gray-500">12 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <i className="fa-brands fa-js text-5xl text-yellow-400"></i>
                        <div>
                            <h3 className="font-bold text-xl">JavaScript</h3>
                            <p className="text-gray-500">18 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <i className="fa-brands fa-css3-alt text-5xl text-blue-600"></i>
                        <div>
                            <h3 className="font-bold text-xl">CSS</h3>
                            <p className="text-gray-500">10 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <i className="fa-brands fa-html5 text-5xl text-orange-500"></i>
                        <div>
                            <h3 className="font-bold text-xl">HTML</h3>
                            <p className="text-gray-500">8 Posts</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
                        <i className="fa-brands fa-node-js text-5xl text-green-500"></i>
                        <div>
                            <h3 className="font-bold text-xl">NodeJS</h3>
                            <p className="text-gray-500">9 Posts</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Catg;