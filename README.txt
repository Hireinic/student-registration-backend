STUDENT REGISTRATION BACKEND (Render Hosting)

1. After uploading this to Render as a Web Service:
   - Set the root directory to "/"
   - Set the start command to: npm start

2. Set the following Environment Variables in Render:
   - CASHFREE_CLIENT_ID=your_cashfree_client_id
   - CASHFREE_CLIENT_SECRET=your_cashfree_client_secret
   - CASHFREE_ENVIRONMENT=TEST  (or PROD when live)

3. After deployment, use this endpoint in your frontend:
   POST https://your-app-url.onrender.com/api/create-payment-link
