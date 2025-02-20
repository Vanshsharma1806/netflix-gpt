
export const checkValidData = (email, password)=>{
    const isMailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isMailValid && !isPasswordValid){
        return "Invalid Email and password";
    }
    if(!isMailValid){
        return "Invalid Email";
    }
    if(!isPasswordValid){
        return "Invalid Password";
    }
    return null;
}