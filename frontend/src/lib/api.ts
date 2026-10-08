const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1";

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export interface QuotePayload {
  name: string;
  email: string;
  phone: string;
  solution_type: string;
  scale: string;
  addons?: string[];
  estimated_kes: number;
  estimated_usd?: number;
  estimated_weeks?: number;
  notes?: string;
}

export async function submitInquiry(payload: InquiryPayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.warn("Backend API unavailable, offline mode active:", error);
    return { success: true, offline: true };
  }
}

export async function submitQuoteRequest(payload: QuotePayload) {
  try {
    const res = await fetch(`${API_BASE_URL}/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.warn("Backend API unavailable, offline mode active:", error);
    return { success: true, offline: true };
  }
}

