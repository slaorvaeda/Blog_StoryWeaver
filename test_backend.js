const fetch = require('node-fetch');

async function testBackend() {
  const baseUrl = 'http://localhost:5001';
  
  try {
    console.log('🧪 Testing backend...');
    
    // Test health endpoint
    console.log('\n1. Testing health endpoint...');
    const healthResponse = await fetch(`${baseUrl}/api/health`);
    console.log('Health status:', healthResponse.status);
    
    if (healthResponse.ok) {
      const healthData = await healthResponse.json();
      console.log('Health data:', healthData);
    }
    
    // Test login endpoint
    console.log('\n2. Testing login endpoint...');
    const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@storyweaver.com',
        password: 'admin123'
      })
    });
    
    console.log('Login status:', loginResponse.status);
    
    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('Login success:', loginData.success);
      console.log('Token received:', !!loginData.token);
      console.log('User data:', loginData.data);
      
      // Test auth/me endpoint with token
      if (loginData.token) {
        console.log('\n3. Testing auth/me endpoint...');
        const meResponse = await fetch(`${baseUrl}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${loginData.token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log('Auth/me status:', meResponse.status);
        
        if (meResponse.ok) {
          const meData = await meResponse.json();
          console.log('User authenticated:', meData.success);
          console.log('User role:', meData.data.role);
        } else {
          const errorData = await meResponse.json();
          console.log('Auth/me error:', errorData);
        }
      }
    } else {
      const errorData = await loginResponse.json();
      console.log('Login error:', errorData);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testBackend();
