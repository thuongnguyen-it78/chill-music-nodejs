import User from '../models/user.model';

class UserService {
	async getOneUser(userId) {
		try {
			return User.findById(userId);
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async getAllUser() {
		try {
			return User.find({});
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async createOneUser(newUser) {
		try {
			return new User({ ...newUser }).save();
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async updateOneUser(userId, userUpdate) {
		try {
			const user = await User.findById(userId);
			user.name = userUpdate.name;
			return user.save();
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async deleteOneUser(userId) {
		try {
			return User.findByIdAndDelete(userId);
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default new UserService();
