import frofile from "../../assets/images/profile.png";
import blogcover from "../../assets/images/blog-cover.png";
import { CiBookmark } from "react-icons/ci";
export default function Blog({blogInfo}){
    const {post_title,cover_img} = blogInfo
    return(
        <div className="px-2 pb-5">
            <img src={blogcover} className="pb-5" />
            <div className="flex justify-between items-center px-2">
                <div className="flex gap-2 items-center">
                    <img src={frofile} className="w-10 h-10" />
                    <div className="flex flex-col gap-[-5px]">
                        <h4 className="font-bold text-md">Md. Takbir Gazi</h4>
                        <p>Develper</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p>05 min read</p>
                    <CiBookmark />
                </div>
            </div>
            <h2 className="text-xl font-bold py-2 px-2">How to get your first job as a self-taught programmer</h2>
            <p className="px-2">#programming #programming</p>
            <a className="underline px-2" href="#">Mark as read</a>
        </div>
    )
}