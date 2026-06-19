function Footer() {
    return (
        <>
            <footer
                className="bg-gradient-to-r from-black via-slate-900 to-black text-white"
            >

                <div className="max-w-7xl mx-auto px-6 py-12">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


                        <div>
                            <h2 className="text-4xl font-bold mb-4">
                                My<span className="text-indigo-500">Blog</span>
                            </h2>

                            <p className="text-gray-300 leading-8">
                                A place where I share my learnings about
                                Web Development and Programming.
                            </p>

                            <div className="flex gap-4 mt-6">
                                <a href="#" className="text-2xl"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-2xl"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>

                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Categories</h3>

                            <ul className="space-y-3 text-gray-300">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Contact</h3>

                            <ul className="space-y-4 text-gray-300">
                                <li>Email: info@myblog.com</li>
                                <li>Phone: +91 1234567890</li>
                                <li>Location: India</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="border-t border-gray-700 py-5 text-center text-gray-300">
                    © 2026 My Blog. All rights reserved.
                </div>

            </footer>
        </>
    )
}

export default Footer;