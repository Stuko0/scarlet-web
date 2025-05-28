const apiURL = "https://2jhlkbgj.brs.devtunnels.ms:8000/users";

export const registerUser = async (firstName, lastName, email, password) => {
    try {
        const response = await fetch(`${apiURL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: firstName,
                lastname: lastName,
                email: email,
                psw: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const checkLogin = async (email, pwd) => {
    try {
        const response = await fetch(`${apiURL}/user.v1.UserService/LoginByEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connect-Protocol-Version': '1',
            },
            body: JSON.stringify({
                email: email,
                password: pwd,
            }),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}