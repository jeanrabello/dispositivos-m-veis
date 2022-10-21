import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface IUserRequest {
	id: string;
	name: string;
	email: string;
	admin?: boolean;
	password: string;
}

class UpdateUserService {
	async execute({ id, name, email, admin = false, password }: IUserRequest) {
		if (!id) {
			throw new Error('id obrigatorio');
		}
		if (!name) {
			throw new Error('Nome obrigatorio');
		}
		if (!password) {
			throw new Error('Password Obrigatorio');
		}

		const passwordHash = await hash(password, 8);

		const usersRepository = getCustomRepository(UsersRepositories);

		const result = await usersRepository
			.createQueryBuilder()
			.update({
				name: name,
				email: email,
				admin: admin,
				password: passwordHash,
			})
			.where({ id: id })
			.execute();

		return result;
	}
}

export { UpdateUserService };
