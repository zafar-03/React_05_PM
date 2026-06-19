function Header(){
    return(
        <header className="flex px-10 items-center shadow-[0px_2px_10px_#d1d0d0]">
            <div className="grow-[0.1] text-3xl font-bold">
                MY<span className="text-purple-600">BLOG</span>
            </div>
            <div className="grow-1">
                <ul className="flex">
                    <li className="px-2 py-4">Home</li>
                    <li className="px-2 py-4">Blogs</li>
                    <li className="px-2 py-4">Categories</li>
                    <li className="px-2 py-4">About</li>
                    <li className="px-2 py-4">Contact</li>
                </ul>
            </div>
            <div>I</div>
        </header>
    )
}

export default Header;