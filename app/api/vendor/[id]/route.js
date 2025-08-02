import { connectdb } from "@/lib/db";
import { VendorModel } from "@/model/contact";

export let GET = async(_,{params})=>{
    try{
        await connectdb();
        const {id}=await params;
        let contact = await VendorModel.findById(id);
        return Response.json({
            status:"success",
            data:contact
        },
    {
        status:200
    })
    }catch(err){
        return Response.json({ status: "Fail", msg: `Error in get method ${err}` },
      { status: 500 }
    )
    }
}

export let PUT = async(req,{params})=>{
    try{
        await connectdb();
        const {id}= await params;
        const data = await req.json();
        let contact = await VendorModel.findByIdAndUpdate(id,data,{
            new: true,
            runValidators: true
        });
        return Response.json({
            status:"success",
            data:contact
        },
    {
        status:200
    })
    }catch(err){
         return Response.json({ status: "Fail", msg: `Error in get method ${err}` },
      { status: 500 }
    )
    }
}



export let DELETE = async(_,{params})=>{
    try{
    await connectdb();
    let {id} = await params;
    const data = await VendorModel.findByIdAndDelete(id);
    return Response.json({
            status:"success",
            data:data
        },
    {
        status:200
    })
    }catch(err){
         return Response.json({ status: "Fail", msg: `Error in get method ${err}` },
      { status: 500 }
    )
    }
}