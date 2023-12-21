const loginFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        isRequired: true,
        placeholder: "Username"   
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        isRequired: true,
        placeholder: "Password"   
    }
]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        isRequired: true,
        placeholder: "Username"   
    },
    {
        labelText: "First Name",
        labelFor: "first_name",
        id: "first_name",
        name: "first_name",
        type: "text",
        isRequired: true,
        placeholder: "First Name"   
    },
    {
        labelText: "Last Name",
        labelFor: "last_name",
        id: "last_name",
        name: "last_name",
        type: "text",
        isRequired: true,
        placeholder: "Last Name"   
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        isRequired: true,
        placeholder: "Email address"   
    },
    {
        labelText: "Institution",
        labelFor: "institution",
        id: "institution",
        name: "institution",
        type: "text",
        isRequired: true,
        placeholder: "Institution"   
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        isRequired: true,
        placeholder: "Password"   
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        isRequired: true,
        placeholder: "Confirm Password"   
    },
    {
        labelText: "Consent for data sharing",
        labelFor: "has_consent_for_data_sharing",
        id: "has_consent_for_data_sharing",
        name: "has_consent_for_data_sharing",
        type: "checkbox",
        isRequired:false, 
    },
    {
        labelText: "Terms and conditions",
        labelFor: "has_agreed_terms",
        id: "has_agreed_terms",
        name: "has_agreed_terms",
        type: "checkbox",
        isRequired: true,
        placeholder: "Terms and conditions"   
    }
]

export {loginFields,signupFields}