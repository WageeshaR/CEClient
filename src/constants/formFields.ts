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
        labelFor: "firstName",
        id: "firstName",
        name: "firstName",
        type: "text",
        isRequired: true,
        placeholder: "First Name"   
    },
    {
        labelText: "Last Name",
        labelFor: "lastName",
        id: "lastName",
        name: "lastName",
        type: "text",
        isRequired: true,
        placeholder: "Last Name"   
    },
    {
        labelText: "Email address",
        labelFor: "email",
        id: "email",
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
        isRequired: false,
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
        labelFor: "confirmPassword",
        id: "confirmPassword",
        name: "confirmPassword",
        type: "password",
        isRequired: true,
        placeholder: "Confirm Password"   
    },
    {
        labelText: "Consent for data sharing",
        labelFor: "hasConsentForDataSharing",
        id: "hasConsentForDataSharing",
        name: "hasConsentForDataSharing",
        type: "checkbox",
        isRequired:false,
        checked: true
    },
    {
        labelText: "Terms and conditions",
        labelFor: "hasAgreedTerms",
        id: "hasAgreedTerms",
        name: "hasAgreedTerms",
        type: "checkbox",
        isRequired: true,
        placeholder: "Terms and conditions"   
    }
]

export {loginFields,signupFields}