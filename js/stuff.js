  // Availability of `window.PublicKeyCredential` means WebAuthn is usable.  
// `isUserVerifyingPlatformAuthenticatorAvailable` means the feature detection is usable.  
// `​​isConditionalMediationAvailable` means the feature detection is usable.  
if (window.PublicKeyCredential &&  
    PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable &&  
    PublicKeyCredential.​​isConditionalMediationAvailable) {  
  // Check if user verifying platform authenticator is available.  
  Promise.all([  
    PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),  
    PublicKeyCredential.​​isConditionalMediationAvailable(),  
  ]).then(results => {  
    if (results.every(r => r === true)) {  
      // Display "Create a new passkey" button  
    }  
  });  
}  
const publicKeyCredentialCreationOptions = {
  challenge: *****,
  rp: {
    name: "Example",
    id: "example.com",
  },
  user: {
    id: *****,
    name: "john78",
    displayName: "John",
  },
  pubKeyCredParams: [{alg: -7, type: "public-key"},{alg: -257, type: "public-key"}],
  excludeCredentials: [{
    id: *****,
    type: 'public-key',
    transports: ['internal'],
  }],
  authenticatorSelection: {
    authenticatorAttachment: "platform",
    requireResidentKey: true,
  }
};

const credential = await navigator.credentials.create({
  publicKey: publicKeyCredentialCreationOptions
});

// Encode and send the credential to the server for verification.  