export type Language = 'en' | 'hi' | 'mr';

export interface Translations {
  // Common
  appName: string;
  tagline: string;
  login: string;
  logout: string;
  email: string;
  password: string;
  name: string;
  cancel: string;
  submit: string;
  back: string;
  
  // Home Page
  homeDescription1: string;
  homeDescription2: string;
  
  // Auth
  dontHaveAccount: string;
  signUp: string;
  alreadyHaveAccount: string;
  createAccount: string;
  confirmPassword: string;
  passwordMismatch: string;
  signupSubtitle: string;
  backToHome: string;
  demoAccounts: string;
  
  // Admin
  adminPortal: string;
  adminSubtitle: string;
  createUserAccount: string;
  role: string;
  insuranceAgent: string;
  hospital: string;
  tempPassword: string;
  createdAccounts: string;
  createdAt: string;
  noAccountsCreated: string;
  
  // Agent
  policyManagement: string;
  claimRequests: string;
  approvedClaims: string;
  searchByPolicy: string;
  policyManagementDesc: string;
  addPolicy: string;
  clientEmail: string;
  policyId: string;
  policyType: string;
  health: string;
  car: string;
  other: string;
  requiredDocuments: string;
  addDocument: string;
  addedPolicies: string;
  noPoliciesFound: string;
  type: string;
  
  // Claims
  claimRequestsDesc: string;
  filterByStatus: string;
  all: string;
  pending: string;
  underReview: string;
  awaitingHospital: string;
  submittedClaims: string;
  clientName: string;
  status: string;
  submitted: string;
  actions: string;
  review: string;
  backToClaimsList: string;
  claimDetails: string;
  submittedDocuments: string;
  hospitalVerification: string;
  documentsVerified: string;
  verificationFailed: string;
  aiVerificationResults: string;
  authenticityScore: string;
  aiRecommendation: string;
  anomaliesDetected: string;
  approveClaim: string;
  rejectClaim: string;
  approve: string;
  reject: string;
  manualReview: string;
  messageToClient: string;
  overrideReason: string;
  submitDecision: string;
  
  // Approved Claims
  approvedClaimsDesc: string;
  processedClaims: string;
  noProcessedClaims: string;
  decisionDate: string;
  message: string;
  approved: string;
  rejected: string;
  
  // Client
  myPolicies: string;
  myClaims: string;
  claimHistory: string;
  myPoliciesDesc: string;
  assignedAgent: string;
  submitClaim: string;
  backToPolicies: string;
  myClaimsDesc: string;
  noActiveClaims: string;
  awaitingHospitalMsg: string;
  underReviewMsg: string;
  claimHistoryDesc: string;
  noClaimHistory: string;
  agentMessage: string;
  decision: string;
  
  // Document Upload
  uploadDocument: string;
  useCamera: string;
  uploadFromDevice: string;
  supportedFormats: string;
  uploaded: string;
  
  // Hospital
  hospitalPortal: string;
  hospitalPortalDesc: string;
  claimsAwaitingVerification: string;
  documents: string;
  verifyDocuments: string;
  noClaimsAwaiting: string;
  documentVerification: string;
  documentsForVerification: string;
  verificationQuestion: string;
  verificationQuestionText: string;
  yesDocumentsValid: string;
  noMismatchFound: string;
  optionalNoteForAgent: string;
  submitVerification: string;
  documentPreview: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    appName: 'AuthenX',
    tagline: 'AI-assisted Insurance Claim Verification',
    login: 'Login',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    name: 'Name',
    cancel: 'Cancel',
    submit: 'Submit',
    back: 'Back',
    
    // Home Page
    homeDescription1: 'AuthenX is a neutral verification and claim management platform that enables insurance companies to manage policies, collect claim documents, and verify authenticity through AI-assisted analysis and hospital confirmation.',
    homeDescription2: 'Streamline your claim verification process with policy-driven document requirements, intelligent fraud detection, and trusted third-party validation.',
    
    // Auth
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign up',
    alreadyHaveAccount: 'Already have an account?',
    createAccount: 'Create Account',
    confirmPassword: 'Confirm Password',
    passwordMismatch: 'Passwords do not match',
    signupSubtitle: 'Sign up as a policy holder',
    backToHome: 'Back to Home',
    demoAccounts: 'Demo accounts: admin@authenx.com, agent@authenx.com, hospital@authenx.com, or any email for client',
    
    // Admin
    adminPortal: 'Admin Portal',
    adminSubtitle: 'Create and manage agent and hospital accounts',
    createUserAccount: 'Create User Account',
    role: 'Role',
    insuranceAgent: 'Insurance Agent',
    hospital: 'Hospital',
    tempPassword: 'Temporary Password',
    createdAccounts: 'Created Accounts',
    createdAt: 'Created At',
    noAccountsCreated: 'No accounts created yet',
    
    // Agent
    policyManagement: 'Policy Management',
    claimRequests: 'Claim Requests',
    approvedClaims: 'Approved Claims',
    searchByPolicy: 'Search by Policy ID',
    policyManagementDesc: 'Define policy-specific document requirements for clients',
    addPolicy: 'Add Policy',
    clientEmail: 'Client Email',
    policyId: 'Policy ID',
    policyType: 'Policy Type',
    health: 'Health',
    car: 'Car',
    other: 'Other',
    requiredDocuments: 'Required Documents',
    addDocument: 'Add Document',
    addedPolicies: 'Added Policies',
    noPoliciesFound: 'No policies found',
    type: 'Type',
    
    // Claims
    claimRequestsDesc: 'Review and process submitted claims',
    filterByStatus: 'Filter by status:',
    all: 'All',
    pending: 'Pending',
    underReview: 'Under Review',
    awaitingHospital: 'Awaiting Hospital',
    submittedClaims: 'Submitted Claims',
    clientName: 'Client Name',
    status: 'Status',
    submitted: 'Submitted',
    actions: 'Actions',
    review: 'Review',
    backToClaimsList: 'Back to Claims List',
    claimDetails: 'Claim Details',
    submittedDocuments: 'Submitted Documents',
    hospitalVerification: 'Hospital Verification',
    documentsVerified: 'Documents Verified',
    verificationFailed: 'Verification Failed',
    aiVerificationResults: 'AI Verification Results',
    authenticityScore: 'Authenticity Score',
    aiRecommendation: 'AI Recommendation',
    anomaliesDetected: 'Anomalies Detected',
    approveClaim: 'Approve Claim',
    rejectClaim: 'Reject Claim',
    approve: 'Approve',
    reject: 'Reject',
    manualReview: 'Manual Review',
    messageToClient: 'Message to Client',
    overrideReason: 'Override Reason',
    submitDecision: 'Submit Decision',
    
    // Approved Claims
    approvedClaimsDesc: 'View all processed claims',
    processedClaims: 'Processed Claims',
    noProcessedClaims: 'No processed claims found',
    decisionDate: 'Decision Date',
    message: 'Message',
    approved: 'Approved',
    rejected: 'Rejected',
    
    // Client
    myPolicies: 'My Policies',
    myClaims: 'My Claims',
    claimHistory: 'Claim History',
    myPoliciesDesc: 'View your insurance policies and submit claims',
    assignedAgent: 'Assigned Agent',
    submitClaim: 'Submit Claim',
    backToPolicies: 'Back to Policies',
    myClaimsDesc: 'Track the status of your submitted claims',
    noActiveClaims: 'No active claims',
    awaitingHospitalMsg: 'Your claim is awaiting hospital verification. This process typically takes 2-3 business days.',
    underReviewMsg: 'Your claim is currently being reviewed by our insurance agent.',
    claimHistoryDesc: 'View your approved and rejected claims',
    noClaimHistory: 'No claim history',
    agentMessage: 'Agent Message:',
    decision: 'Decision',
    
    // Document Upload
    uploadDocument: 'Upload Document',
    useCamera: 'Use Camera',
    uploadFromDevice: 'Upload from Device',
    supportedFormats: 'Supported formats: JPG, PNG, PDF',
    uploaded: 'Uploaded',
    
    // Hospital
    hospitalPortal: 'Hospital Portal',
    hospitalPortalDesc: 'Verify insurance claim documents',
    claimsAwaitingVerification: 'Claims Awaiting Verification',
    documents: 'Documents',
    verifyDocuments: 'Verify Documents',
    noClaimsAwaiting: 'No claims awaiting verification',
    documentVerification: 'Document Verification',
    documentsForVerification: 'Documents for Verification',
    verificationQuestion: 'Verification Question',
    verificationQuestionText: 'Do these documents match your hospital records for this patient?',
    yesDocumentsValid: 'Yes, documents are valid',
    noMismatchFound: 'No, mismatch found',
    optionalNoteForAgent: 'Optional note for insurance agent',
    submitVerification: 'Submit Verification',
    documentPreview: 'Document Preview',
  },
  
  hi: {
    // Common
    appName: 'AuthenX',
    tagline: 'AI-सहायता प्राप्त बीमा दावा सत्यापन',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    email: 'ईमेल',
    password: 'पासवर्ड',
    name: 'नाम',
    cancel: 'रद्द करें',
    submit: 'जमा करें',
    back: 'वापस',
    
    // Home Page
    homeDescription1: 'AuthenX एक तटस्थ सत्यापन और दावा प्रबंधन प्लेटफ़ॉर्म है जो बीमा कंपनियों को पॉलिसियों का प्रबंधन करने, दावा दस्तावेज़ एकत्र करने और AI-सहायता विश्लेषण और अस्पताल की पुष्टि के माध्यम से प्रामाणिकता सत्यापित करने में सक्षम बनाता है।',
    homeDescription2: 'पॉलिसी-संचालित दस्तावेज़ आवश्यकताओं, बुद्धिमान धोखाधड़ी का पता लगाने और विश्वसनीय तृतीय-पक्ष सत्यापन के साथ अपनी दावा सत्यापन प्रक्रिया को सुव्यवस्थित करें।',
    
    // Auth
    dontHaveAccount: 'खाता नहीं है?',
    signUp: 'साइन अप करें',
    alreadyHaveAccount: 'पहले से खाता है?',
    createAccount: 'खाता बनाएं',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    passwordMismatch: 'पासवर्ड मेल नहीं खाते',
    signupSubtitle: 'पॉलिसीधारक के रूप में साइन अप करें',
    backToHome: 'होम पर वापस',
    demoAccounts: 'डेमो खाते: admin@authenx.com, agent@authenx.com, hospital@authenx.com, या क्लाइंट के लिए कोई भी ईमेल',
    
    // Admin
    adminPortal: 'एडमिन पोर्टल',
    adminSubtitle: 'एजेंट और अस्पताल के खाते बनाएं और प्रबंधित करें',
    createUserAccount: 'उपयोगकर्ता खाता बनाएं',
    role: 'भूमिका',
    insuranceAgent: 'बीमा एजेंट',
    hospital: 'अस्पताल',
    tempPassword: 'अस्थायी पासवर्ड',
    createdAccounts: 'बनाए गए खाते',
    createdAt: 'बनाया गया',
    noAccountsCreated: 'अभी तक कोई खाता नहीं बनाया गया',
    
    // Agent
    policyManagement: 'पॉलिसी प्रबंधन',
    claimRequests: 'दावा अनुरोध',
    approvedClaims: 'स्वीकृत दावे',
    searchByPolicy: 'पॉलिसी ID से खोजें',
    policyManagementDesc: 'ग्राहकों के लिए पॉलिसी-विशिष्ट दस्तावेज़ आवश्यकताएं परिभाषित करें',
    addPolicy: 'पॉलिसी जोड़ें',
    clientEmail: 'ग्राहक ईमेल',
    policyId: 'पॉलिसी ID',
    policyType: 'पॉलिसी प्रकार',
    health: 'स्वास्थ्य',
    car: 'कार',
    other: 'अन्य',
    requiredDocuments: 'आवश्यक दस्तावेज़',
    addDocument: 'दस्तावेज़ जोड़ें',
    addedPolicies: 'जोड़ी गई पॉलिसियां',
    noPoliciesFound: 'कोई पॉलिसी नहीं मिली',
    type: 'प्रकार',
    
    // Claims
    claimRequestsDesc: 'सबमिट किए गए दावों की समीक्षा और प्रसंस्करण करें',
    filterByStatus: 'स्थिति के अनुसार फ़िल्टर करें:',
    all: 'सभी',
    pending: 'लंबित',
    underReview: 'समीक्षाधीन',
    awaitingHospital: 'अस्पताल की प्रतीक्षा में',
    submittedClaims: 'सबमिट किए गए दावे',
    clientName: 'ग्राहक का नाम',
    status: 'स्थिति',
    submitted: 'सबमिट किया गया',
    actions: 'कार्रवाई',
    review: 'समीक्षा करें',
    backToClaimsList: 'दावों की सूची में वापस',
    claimDetails: 'दावा विवरण',
    submittedDocuments: 'सबमिट किए गए दस्तावेज़',
    hospitalVerification: 'अस्पताल सत्यापन',
    documentsVerified: 'दस्तावेज़ सत्यापित',
    verificationFailed: 'सत्यापन विफल',
    aiVerificationResults: 'AI सत्यापन परिणाम',
    authenticityScore: 'प्रामाणिकता स्कोर',
    aiRecommendation: 'AI सिफारिश',
    anomaliesDetected: 'विसंगतियां पाई गईं',
    approveClaim: 'दावा स्वीकृत करें',
    rejectClaim: 'दावा अस्वीकार करें',
    approve: 'स्वीकृत करें',
    reject: 'अस्वीकार करें',
    manualReview: 'मैनुअल समीक्षा',
    messageToClient: 'ग्राहक को संदेश',
    overrideReason: 'ओवरराइड कारण',
    submitDecision: 'निर्णय जमा करें',
    
    // Approved Claims
    approvedClaimsDesc: 'सभी प्रोसेस किए गए दावे देखें',
    processedClaims: 'प्रोसेस किए गए दावे',
    noProcessedClaims: 'कोई प्रोसेस किया गया दावा नहीं मिला',
    decisionDate: 'निर्णय तिथि',
    message: 'संदेश',
    approved: 'स्वीकृत',
    rejected: 'अस्वीकृत',
    
    // Client
    myPolicies: 'मेरी पॉलिसियां',
    myClaims: 'मेरे दावे',
    claimHistory: 'दावा इतिहास',
    myPoliciesDesc: 'अपनी बीमा पॉलिसियां देखें और दावे सबमिट करें',
    assignedAgent: 'नियुक्त एजेंट',
    submitClaim: 'दावा सबमिट करें',
    backToPolicies: 'पॉलिसियों पर वापस',
    myClaimsDesc: 'अपने सबमिट किए गए दावों की स्थिति ट्रैक करें',
    noActiveClaims: 'कोई सक्रिय दावा नहीं',
    awaitingHospitalMsg: 'आपका दावा अस्पताल सत्यापन की प्रतीक्षा में है। यह प्रक्रिया आमतौर पर 2-3 कार्य दिवस लेती है।',
    underReviewMsg: 'आपके दावे की हमारे बीमा एजेंट द्वारा समीक्षा की जा रही है।',
    claimHistoryDesc: 'अपने स्वीकृत और अस्वीकृत दावे देखें',
    noClaimHistory: 'कोई दावा इतिहास नहीं',
    agentMessage: 'एजेंट संदेश:',
    decision: 'निर्णय',
    
    // Document Upload
    uploadDocument: 'दस्तावेज़ अपलोड करें',
    useCamera: 'कैमरा उपयोग करें',
    uploadFromDevice: 'डिवाइस से अपलोड करें',
    supportedFormats: 'समर्थित फॉर्मेट: JPG, PNG, PDF',
    uploaded: 'अपलोड किया गया',
    
    // Hospital
    hospitalPortal: 'अस्पताल पोर्टल',
    hospitalPortalDesc: 'बीमा दावा दस्तावेज़ सत्यापित करें',
    claimsAwaitingVerification: 'सत्यापन की प्रतीक्षा में दावे',
    documents: 'दस्तावेज़',
    verifyDocuments: 'दस्तावेज़ सत्यापित करें',
    noClaimsAwaiting: 'कोई दावा सत्यापन की प्रतीक्षा में नहीं',
    documentVerification: 'दस्तावेज़ सत्यापन',
    documentsForVerification: 'सत्यापन के लिए दस्तावेज़',
    verificationQuestion: 'सत्यापन प्रश्न',
    verificationQuestionText: 'क्या ये दस्तावेज़ इस रोगी के लिए आपके अस्पताल के रिकॉर्ड से मेल खाते हैं?',
    yesDocumentsValid: 'हां, दस्तावेज़ मान्य हैं',
    noMismatchFound: 'नहीं, बेमेल पाया गया',
    optionalNoteForAgent: 'बीमा एजेंट के लिए वैकल्पिक नोट',
    submitVerification: 'सत्यापन सबमिट करें',
    documentPreview: 'दस्तावेज़ पूर्वावलोकन',
  },
  
  mr: {
    // Common
    appName: 'AuthenX',
    tagline: 'AI-सहाय्यित विमा दावा सत्यापन',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    email: 'ईमेल',
    password: 'पासवर्ड',
    name: 'नाव',
    cancel: 'रद्द करा',
    submit: 'सबमिट करा',
    back: 'परत',
    
    // Home Page
    homeDescription1: 'AuthenX हे एक तटस्थ सत्यापन आणि दावा व्यवस्थापन प्लॅटफॉर्म आहे जे विमा कंपन्यांना धोरणे व्यवस्थापित करण्यास, दावा कागदपत्रे गोळा करण्यास आणि AI-सहाय्यित विश्लेषण आणि रुग्णालय पुष्टीकरणाद्वारे प्रामाणिकता सत्यापित करण्यास सक्षम करते.',
    homeDescription2: 'धोरण-चालित कागदपत्र आवश्यकता, बुद्धिमान फसवणूक शोध आणि विश्वासार्ह तृतीय-पक्ष प्रमाणीकरणासह आपली दावा सत्यापन प्रक्रिया सुव्यवस्थित करा.',
    
    // Auth
    dontHaveAccount: 'खाते नाही?',
    signUp: 'साइन अप करा',
    alreadyHaveAccount: 'आधीपासून खाते आहे?',
    createAccount: 'खाते तयार करा',
    confirmPassword: 'पासवर्डची पुष्टी करा',
    passwordMismatch: 'पासवर्ड जुळत नाहीत',
    signupSubtitle: 'पॉलिसीधारक म्हणून साइन अप करा',
    backToHome: 'होमवर परत',
    demoAccounts: 'डेमो खाती: admin@authenx.com, agent@authenx.com, hospital@authenx.com, किंवा क्लायंटसाठी कोणताही ईमेल',
    
    // Admin
    adminPortal: 'प्रशासक पोर्टल',
    adminSubtitle: 'एजंट आणि रुग्णालय खाती तयार करा आणि व्यवस्थापित करा',
    createUserAccount: 'वापरकर्ता खाते तयार करा',
    role: 'भूमिका',
    insuranceAgent: 'विमा एजंट',
    hospital: 'रुग्णालय',
    tempPassword: 'तात्पुरता पासवर्ड',
    createdAccounts: 'तयार केलेली खाती',
    createdAt: 'तयार केले',
    noAccountsCreated: 'अद्याप कोणतेही खाते तयार केलेले नाही',
    
    // Agent
    policyManagement: 'पॉलिसी व्यवस्थापन',
    claimRequests: 'दावा विनंत्या',
    approvedClaims: 'मंजूर दावे',
    searchByPolicy: 'पॉलिसी ID द्वारे शोधा',
    policyManagementDesc: 'ग्राहकांसाठी पॉलिसी-विशिष्ट कागदपत्र आवश्यकता परिभाषित करा',
    addPolicy: 'पॉलिसी जोडा',
    clientEmail: 'ग्राहक ईमेल',
    policyId: 'पॉलिसी ID',
    policyType: 'पॉलिसी प्रकार',
    health: 'आरोग्य',
    car: 'कार',
    other: 'इतर',
    requiredDocuments: 'आवश्यक कागदपत्रे',
    addDocument: 'कागदपत्र जोडा',
    addedPolicies: 'जोडलेल्या पॉलिसी',
    noPoliciesFound: 'कोणतीही पॉलिसी आढळली नाही',
    type: 'प्रकार',
    
    // Claims
    claimRequestsDesc: 'सबमिट केलेल्या दाव्यांचे पुनरावलोकन आणि प्रक्रिया करा',
    filterByStatus: 'स्थितीनुसार फिल्टर करा:',
    all: 'सर्व',
    pending: 'प्रलंबित',
    underReview: 'पुनरावलोकनाधीन',
    awaitingHospital: 'रुग्णालयाची प्रतीक्षा',
    submittedClaims: 'सबमिट केलेले दावे',
    clientName: 'ग्राहकाचे नाव',
    status: 'स्थिती',
    submitted: 'सबमिट केले',
    actions: 'क्रिया',
    review: 'पुनरावलोकन करा',
    backToClaimsList: 'दाव्यांच्या यादीवर परत',
    claimDetails: 'दावा तपशील',
    submittedDocuments: 'सबमिट केलेली कागदपत्रे',
    hospitalVerification: 'रुग्णालय सत्यापन',
    documentsVerified: 'कागदपत्रे सत्यापित',
    verificationFailed: 'सत्यापन अयशस्वी',
    aiVerificationResults: 'AI सत्यापन परिणाम',
    authenticityScore: 'प्रामाणिकता स्कोअर',
    aiRecommendation: 'AI शिफारस',
    anomaliesDetected: 'विसंगती आढळल्या',
    approveClaim: 'दावा मंजूर करा',
    rejectClaim: 'दावा नाकारा',
    approve: 'मंजूर करा',
    reject: 'नाकारा',
    manualReview: 'मॅन्युअल पुनरावलोकन',
    messageToClient: 'ग्राहकाला संदेश',
    overrideReason: 'ओव्हरराइड कारण',
    submitDecision: 'निर्णय सबमिट करा',
    
    // Approved Claims
    approvedClaimsDesc: 'सर्व प्रक्रिया केलेले दावे पहा',
    processedClaims: 'प्रक्रिया केलेले दावे',
    noProcessedClaims: 'कोणतेही प्रक्रिया केलेले दावे आढळले नाहीत',
    decisionDate: 'निर्णय तारीख',
    message: 'संदेश',
    approved: 'मंजूर',
    rejected: 'नाकारले',
    
    // Client
    myPolicies: 'माझ्या पॉलिसी',
    myClaims: 'माझे दावे',
    claimHistory: 'दावा इतिहास',
    myPoliciesDesc: 'तुमच्या विमा पॉलिसी पहा आणि दावे सबमिट करा',
    assignedAgent: 'नियुक्त एजंट',
    submitClaim: 'दावा सबमिट करा',
    backToPolicies: 'पॉलिसींवर परत',
    myClaimsDesc: 'तुमच्या सबमिट केलेल्या दाव्यांची स्थिती ट्रॅक करा',
    noActiveClaims: 'कोणतेही सक्रिय दावे नाहीत',
    awaitingHospitalMsg: 'तुमचा दावा रुग्णालय सत्यापनाच्या प्रतीक्षेत आहे. ही प्रक्रिया सामान्यत: 2-3 कामकाजाचे दिवस घेते.',
    underReviewMsg: 'तुमच्या दाव्याचे आमच्या विमा एजंटद्वारे पुनरावलोकन केले जात आहे.',
    claimHistoryDesc: 'तुमचे मंजूर आणि नाकारलेले दावे पहा',
    noClaimHistory: 'कोणताही दावा इतिहास नाही',
    agentMessage: 'एजंट संदेश:',
    decision: 'निर्णय',
    
    // Document Upload
    uploadDocument: 'कागदपत्र अपलोड करा',
    useCamera: 'कॅमेरा वापरा',
    uploadFromDevice: 'डिव्हाइसवरून अपलोड करा',
    supportedFormats: 'समर्थित फॉरमॅट: JPG, PNG, PDF',
    uploaded: 'अपलोड केले',
    
    // Hospital
    hospitalPortal: 'रुग्णालय पोर्टल',
    hospitalPortalDesc: 'विमा दावा कागदपत्रे सत्यापित करा',
    claimsAwaitingVerification: 'सत्यापनाच्या प्रतीक्षेत दावे',
    documents: 'कागदपत्रे',
    verifyDocuments: 'कागदपत्रे सत्यापित करा',
    noClaimsAwaiting: 'कोणतेही दावे सत्यापनाच्या प्रतीक्षेत नाहीत',
    documentVerification: 'कागदपत्र सत्यापन',
    documentsForVerification: 'सत्यापनासाठी कागदपत्रे',
    verificationQuestion: 'सत्यापन प्रश्न',
    verificationQuestionText: 'ही कागदपत्रे या रुग्णासाठी तुमच्या रुग्णालयाच्या नोंदीशी जुळतात का?',
    yesDocumentsValid: 'होय, कागदपत्रे वैध आहेत',
    noMismatchFound: 'नाही, विसंगती आढळली',
    optionalNoteForAgent: 'विमा एजंटसाठी पर्यायी टीप',
    submitVerification: 'सत्यापन सबमिट करा',
    documentPreview: 'कागदपत्र पूर्वावलोकन',
  },
};

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
