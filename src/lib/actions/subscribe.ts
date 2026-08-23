"use server"; //only allow this to run on the server so the API keys are not exposed

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeEmail(email: string) {
  try {
    const { data: contact, error: createError } = await resend.contacts.create({
      email,
    });

    if (createError || !contact) {
      console.error("Failed to create contact:", createError);
      return { success: false };
    }

    const { error: segmentError } = await resend.contacts.segments.add({
      contactId: contact.id,
      segmentId: process.env.RESEND_COMINGSOON_SEGMENT_ID!,
    });

    if (segmentError) {
      console.error("Failed to add contact to segment:", segmentError);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { success: false };
  }
}