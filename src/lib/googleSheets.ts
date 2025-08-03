export interface WaitlistEntry {
  name: string
  email: string
  linkedin: string
  currentTool: string  // This matches your form field name
  reason: string
}

// Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyf3l7L3Km96NHxcIf62CxOfSzZd3UuyQqpNPi-Jfrkz0nld2SQVVgxwnVcOrUqj-lY/exec'

export const saveToGoogleSheets = async (formData: WaitlistEntry): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        linkedin: formData.linkedin,
        currentTool: formData.currentTool, // Matches your field name
        reason: formData.reason
      })
    })

    // With no-cors, we can't read response, so assume success
    return true
    
  } catch (error) {
    console.error('Error saving to Google Sheets:', error)
    return false
  }
}