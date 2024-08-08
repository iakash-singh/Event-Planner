import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		fname: {
			type: String,
			required: true,
		},
		lname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			enum: ["Male", "Female", "Rather Not Say"],
		},
		avatar: {
			type: String,
			default:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Feos.org%2Farticles%2Fmassive-stars-may-commit-grand-theft-planet&psig=AOvVaw1yZ3qUzIHvWfn6WxVVvDb-&ust=1671279003436000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiRuMyN_vsCFQAAAAAdAAAAABAd",
		},
		phone: {
			type: String,
			required: false,
		},
		bio: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;
