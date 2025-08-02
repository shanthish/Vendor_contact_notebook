import { connectdb } from "@/lib/db";
import { VendorModel } from "@/model/contact";


export let POST = async (req) => {
  try {
    console.log("Post is executing");

    await connectdb();
    let request = await req.json();
    console.log(request);
    let contactdetail = await VendorModel.create(request);
    return Response.json(
      {
        status: "Success",
        data: {
          contactdetail,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      {
        status: "Fail",
        message: err,
      },
      { status: 500 }
    );
  }
};

export let GET = async () => {
  try {
    await connectdb();
    let contacts = await VendorModel.find();
    return Response.json({
      status: "succes",
      data: contacts
    },
      {
        status: 201
      })
  } catch (err) {
    console.log("error in get method");
    return Response.json({ status: "Fail", msg: `Error in get method ${err}` },
      { status: 500 }
    )
  }
}