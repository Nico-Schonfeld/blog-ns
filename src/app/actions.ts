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

export const saveBlog = async (holderId: string | number, content: any) => {
  try {
    /*   const blog = await prisma.blog.create({
      data: {
        holderId,
        content,
      },
    }); */

    /* console.log("Blog saved:", blog); */

    console.log(`Blog id:`, holderId);
    console.log(`Blog content:`, content);

    return;
  } catch (error) {
    console.error("Error saving blog:", error);
  }
};
