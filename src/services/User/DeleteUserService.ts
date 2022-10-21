import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../../repositories/UsersRepositories';

interface IUserDelete {
	id: string;
}

class DeleteUserService {
	async execute({ id }: IUserDelete) {
		const usersRepository = getCustomRepository(UsersRepositories);

		return await usersRepository.delete({ id });
	}
}

export { DeleteUserService };
