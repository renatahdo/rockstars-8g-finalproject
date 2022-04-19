import { 
    LoginDTO, 
    LoginEmailDTO, 
    LoginUsernameDTO, 
    UserModel,
    GetUserByIdDTO,
    CreateUserDTO,
    UpdateUserDTO,
    DeleteUserDTO
} from "../models/user";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || "";

export const login = async ({ password, email, username } : LoginDTO ) => {
    if(!password) return {
        status: 400,
        error: "password is required",
    };

    let user = undefined;

    if(email) { 
        user = await loginEmail({email, password})
    }
    else if(username) {
        user = await loginUsername({username, password});
    } else {
        return {
            status: 400,
            error: "email or username is required",
        };
    }

    if(!user) return {
        status: 404,
        error: "user not found",
    };

    const token = jwt.sign(
        {
            _id: user._id,
            email
        },
        SECRET_KEY,
        {
            expiresIn: "3h",
        }
    );

    user = {
        username: user.username,
        email: user.email,
        token: token,
    }
    
    return user;
};

const loginEmail = async ({ email, password } : LoginEmailDTO ) => {
    const user = await UserModel.findOne({ email })
    if(!user || user.password !== password) return;

    return user;
};

const loginUsername = async ({ username, password } : LoginUsernameDTO ) => {
    const user = await UserModel.findOne({ username })
    if(!user || user.password !== password) return;

    return user;
};

export const getAllUsers = async () => {
    return await UserModel.find();
};

export const getUserById = async ({ _id }: GetUserByIdDTO) => {
    return await UserModel.findById(_id);
};

export const createUser = async ({ username, email, password, type }: CreateUserDTO) => {
    if (!username) return {
        status: 400,
        error: "username is required",
    };
    if (!email) return {
        status: 400,
        error: "email is required",
    };
    if (!password) return {
        status: 400,
        error: "password is required",
    };

    return await UserModel.create({
        username,
        email,
        password,
        type,
    });
};

export const updateUser = async ({ _id, username, email, password }: UpdateUserDTO) => {
    if (!_id) return {
        status: 400,
        error: "_id is required",
    };

    return await UserModel.findByIdAndUpdate(
        _id,
        {
            username: username,
            email: email,
            password: password,
        },
        {
            new: true,
        }
    );
};

export const deleteUser = async ({ _id }: DeleteUserDTO) => {
    if (!_id) return {
        status: 400,
        error: "_id is required",
    };

    return await UserModel.findByIdAndDelete(_id, {
        new: true,
    });
};