#!/usr/bin/env node

/**
 * Test script for the contact form API
 * This will send a test email to verify the contact form is working
 */

const testContactForm = async () => {
  const testData = {
    topic: 'construction',
    name: 'Jean Test',
    email: 'test@example.com', // Change this to your email to receive the confirmation
    phone: '+41 79 123 45 67',
    company: 'Test Company SA',
    contactPreference: 'email',
    message: 'Ceci est un message de test pour vérifier que le formulaire de contact fonctionne correctement.\n\nToutes les données doivent apparaître dans l\'email reçu.'
  };

  console.log('🧪 Testing Contact Form API...');
  console.log('📧 Sending test data:', JSON.stringify(testData, null, 2));
  console.log('\n');

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ SUCCESS! Email sent successfully');
      console.log('📨 Response:', result);
      console.log('\n');
      console.log('Please check these inboxes:');
      console.log('  1. info@sun7piscine.ch - Should receive the business notification');
      console.log(`  2. ${testData.email} - Should receive the confirmation email`);
    } else {
      console.log('❌ ERROR! Failed to send email');
      console.log('Status:', response.status);
      console.log('Error:', result);
    }
  } catch (error) {
    console.log('❌ FATAL ERROR!');
    console.log('Error:', error.message);
    console.log('\nMake sure the dev server is running on http://localhost:3001');
  }
};

// Test all contact preferences
const testAllPreferences = async () => {
  const preferences = ['email', 'phone', 'visio'];
  
  console.log('🧪 Testing all contact preferences...\n');
  
  for (const pref of preferences) {
    const testData = {
      topic: 'renovation',
      name: `Test ${pref.toUpperCase()}`,
      email: 'test@example.com',
      phone: '+41 79 999 88 77',
      company: '',
      contactPreference: pref,
      message: `Test avec préférence: ${pref}`
    };

    console.log(`\n📧 Testing preference: ${pref}...`);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      if (response.ok) {
        console.log(`✅ ${pref} - SUCCESS`);
      } else {
        console.log(`❌ ${pref} - FAILED`);
      }
    } catch (error) {
      console.log(`❌ ${pref} - ERROR: ${error.message}`);
    }

    // Wait a bit between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

// Run the test
const args = process.argv.slice(2);
if (args.includes('--all')) {
  testAllPreferences();
} else {
  testContactForm();
}
