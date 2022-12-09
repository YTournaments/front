export const getRandomNumberInRange = (lower, upper) => {
  if (isNaN(lower) || isNaN(upper)) {
    console.error("lower and upper must be valid numbers");
    return;
  }
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    console.error(`array expected, ${typeof arr} provided`);
    return;
  }
  return [...new Set(arr)];
};

export const verifyDataForm = (value) => {
  if (value === "") {
    return false;
  }
  return true;
};


export const viewPassword = () => {
  const password = document.getElementById("password");console.log(password.type)
  const confirmPassword = document.getElementById("confirmPassword");
  if (password.type === "password") {
    password.type = "text";
    confirmPassword.type = "text";
  } 
  else {
    password.type = "password";
    confirmPassword.type = "password";
  }
}