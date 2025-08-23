const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 EmailJS Quick Setup Tool\n');
console.log('This will help you configure your contact form email service.\n');

let serviceId, templateId, publicKey;

rl.question('📧 Enter your EmailJS Service ID: ', (service) => {
  serviceId = service;
  
  rl.question('📋 Enter your EmailJS Template ID: ', (template) => {
    templateId = template;
    
    rl.question('🔑 Enter your EmailJS Public Key: ', (key) => {
      publicKey = key;
      
      const envContent = `# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=${serviceId}
REACT_APP_EMAILJS_TEMPLATE_ID=${templateId}
REACT_APP_EMAILJS_PUBLIC_KEY=${publicKey}
`;

      fs.writeFileSync('.env', envContent);
      
      console.log('\n✅ Configuration saved to .env file!');
      console.log('🔄 Please restart your React app (npm start) to apply changes.');
      console.log('🧪 Then test your contact form!\n');
      
      rl.close();
    });
  });
});

rl.on('close', () => {
  process.exit(0);
});
