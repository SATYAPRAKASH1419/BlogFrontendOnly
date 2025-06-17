import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 h-12 items-center">
          <div className="font-bold text-2xl">
            Medium
          </div>
          <div>
            <Avatar size={"big"} name="Satya"/>
          </div>
    </div>
}