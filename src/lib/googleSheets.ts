export interface WaitlistEntry {
  name: string
  email: string
  linkedin: string
  currentTool: string
  reason: string
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjhQudsoaoqmeBHpLYbniLpqRI5u81sbmb03iDmyy9K9YMaN2Fzd_aqU42VCOkMMcj/exec';

export const saveToGoogleSheets = async (formData: WaitlistEntry): Promise<boolean> => {
  try {
    console.log('🚀 Starting request to Google Sheets...');
    console.log('📤 Data being sent:', formData);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // ✅ This is essential for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin,
        currentTool: formData.currentTool,
        reason: formData.reason
      })
    });

    console.log('📡 Request sent successfully');
    
    // With no-cors, we can't read the response, but if no error was thrown,
    // we assume the request was successful
    return true;
    
  } catch (error) {
    console.error('🔥 Fetch Error:', error);
    return false;
  }
}