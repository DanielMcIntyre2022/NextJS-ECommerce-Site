import moongoose from "moongoose";

const userSchema = new moongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
}, {
    timeStamps: true,
});

const User = moongoose.models.User || moongoose.model('User', userSchema);

export default User;