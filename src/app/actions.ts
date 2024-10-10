"use server";

import { MercadoPagoServices } from "@/services/mercadopago.services";
import { redirect } from "next/navigation";

export const paymentAction = async (data: {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
}) => {
  const mercadoPagoServices = new MercadoPagoServices();
  const res = await mercadoPagoServices.MpPayment(data);

  if (res.error && !res.success) return null;
  if (res.success && !res.error) redirect(res?.preference?.sandbox_init_point!);
};

export const saveBlog = async (
  title: string,
  description: string,
  image: string,
  content: any
) => {
  try {
    /*   const blog = await prisma.blog.create({
      data: {
        holderId,
        content,
      },
    }); */

    /* console.log("Blog saved:", blog); */

    console.log(`Blog title:`, title);
    console.log(`Blog description:`, description);
    console.log(`Blog image:`, image);
    console.log(`Blog content:`, JSON.stringify(content, null, 2));

    return;
  } catch (error) {
    console.error("Error saving blog:", error);
  }
};
