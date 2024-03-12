import profile from "../../assets/images/profile.png";
export default function Header(){
    return(
        <div className="flex justify-between gap-5 py-2 px-2 items-center border-b-2">
           <h2 className="text-2xl font-bold">Knowledge Cafe</h2>
           <img className="h-10 w-10" src={profile} alt={profile} />
        </div>
    )
}