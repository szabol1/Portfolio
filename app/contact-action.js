export default async function handler(req, res) {
    try {
      const formData = await req.formData(); // Access form data
  
      // Process form data (e.g., send email, save to database)
      console.log('Form data:', formData.get('name'), formData.get('email'));
  
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to process form' });
    }
  }