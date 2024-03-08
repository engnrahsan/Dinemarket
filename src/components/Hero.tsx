
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <button style={{background:"lightblue",border:"none",padding:"10px",borderRadius:"10px",width:"30%",marginBottom:"10px"}}>Sale 70%</button>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button style={{background:"black",padding:"20px",border:"2px solid",width:"30%",color:"white",display:"flex",alignItems:"center",marginTop:"10px"}}>
            <ShoppingCart/>
            Start Shopping

        </button>
        <div className="flex items-center gap-5 mt-5">
            <Image alt="" src={"/images/img1.png"} width={90} height={90}/>
            <Image alt="" src={"/images/img2.png"}width={90} height={90}/>
            <Image alt="" src={"/images/img3.png"}width={90} height={90}/>
            <Image alt="" src={"/images/img4.png"}width={90} height={90}/>
        </div>
      </div>
      <div className="w-100 h-100 relative ">
      
        <Image
          src={"/images/heroimg.webp"}
          style={{background:"lightpink",borderRadius:"50%"}}
          width={700}
          height={300}
          alt="image"
        />
    
      </div>
    </div>
  )
}

export default Hero