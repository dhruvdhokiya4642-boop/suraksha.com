// Email service using Resend API
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;
const RESEND_API_URL = 'https://api.resend.com/emails';

export const sendSOSEmail = async ({ to, userName, location, timestamp }) => {
  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Suraksha Alert <onboarding@resend.dev>',
        to: [to],
        subject: `🚨 URGENT: SOS Alert from ${userName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #FF4D4D; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .alert-box { background: white; padding: 20px; border-left: 4px solid #FF4D4D; margin: 20px 0; }
                .location { background: #e3f2fd; padding: 15px; border-radius: 4px; margin: 15px 0; }
                .button { display: inline-block; background: #00E5FF; color: #0B0E14; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 10px 0; }
                .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🚨 EMERGENCY SOS ALERT</h1>
                </div>
                <div class="content">
                  <div class="alert-box">
                    <h2>Emergency Alert Triggered</h2>
                    <p><strong>${userName}</strong> has triggered an SOS alert and may need immediate assistance.</p>
                    <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
                  </div>
                  
                  ${location ? `
                    <div class="location">
                      <h3>📍 Location Information</h3>
                      <p><strong>Coordinates:</strong> ${location.latitude}, ${location.longitude}</p>
                      ${location.address ? `<p><strong>Address:</strong> ${location.address}</p>` : ''}
                      <a href="https://www.google.com/maps?q=${location.latitude},${location.longitude}" class="button" target="_blank">
                        View on Google Maps
                      </a>
                    </div>
                  ` : '<p><em>Location information not available</em></p>'}
                  
                  <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 4px;">
                    <strong>⚠️ Important:</strong> This is an automated emergency alert. Please check on ${userName} immediately or contact emergency services if needed.
                  </p>
                </div>
                <div class="footer">
                  <p>This alert was sent from Suraksha Safety App</p>
                  <p>You are receiving this because you are listed as a trusted contact</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error sending SOS email:', error);
    return { success: false, error: error.message };
  }
};

export const sendBulkSOSEmails = async (contacts, userData, location) => {
  const results = await Promise.allSettled(
    contacts.map(contact =>
      sendSOSEmail({
        to: contact.email,
        userName: userData.displayName || userData.email,
        location,
        timestamp: Date.now(),
      })
    )
  );

  const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
  const failed = results.length - successful;

  return {
    total: results.length,
    successful,
    failed,
    results,
  };
};
