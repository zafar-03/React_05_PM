import axios from 'axios';
import { useState } from 'react';
function Blog() {
    const [blogs, setBlog] = useState([]);
    const api = "http://localhost:3001/blogs";
    let count =0;
    const getData = async () => {
        await axios.get(api).then((response) => {
            setBlog(response.data);
        });
    }

    getData();


    return (
        <>
            <section className="max-w-7xl mx-auto py-10 px-6 grid gap-10">
                <main className="bg-red-200 flex justify-between">
                    <h3 className="text-[24px] font-bold">Latest Blog</h3>
                    <p>View All</p>
                </main>
                <main className=" grid grid-cols-3 gap-10 ">
                    {
                        blogs.map((blog) => {
                            
                            if(count< 3){
                                count++;
                            return (
                                <aside key={blog.id} className="bg-white shadow-[0px_2px_10px_#d1d0d0] rounded-[20px] overflow-hidden">
                                    <img src={blog.image} alt="" className='h-[200px] w-100'/>
                                    <div className="p-4 grid gap-3">
                                        <p className="text-purple-600 bg-purple-100 w-max px-2  rounded">{blog.title}</p>
                                        <h4 className="font-bold text-[24px]">{blog.heading}</h4>
                                        <p>{blog.desc}</p>
                                        <article className="flex justify-between">
                                            <aside className="flex gap-1 text-[14px]">
                                                <span>I</span>
                                                {blog.date}
                                            </aside>
                                            <aside className="flex gap-1 text-[14px]">
                                                <span>I</span>
                                                5 min Read
                                            </aside>
                                        </article>
                                        <p className="text-purple-600 font-bold">Read More</p>
                                    </div>
                                </aside>
                            )}else {
                                return;
                            }
                        })

                    }

                </main>
            </section>
        </>
    )
}

export default Blog;