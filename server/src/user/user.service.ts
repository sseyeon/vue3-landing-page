import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**
   *  @description 유저 생성
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<User>}
   * @memberof UserService
   * @example
   * const user = await this.userService.createUser({
   *  name: '홍길동',
   * userid: 'hong',
   * password: '1234',
   * });
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;

    // salt를 생성한다.
    const salt = await bcrypt.genSalt();
    // 비밀번호를 해싱한다.
    const hashedPassword = await bcrypt.hash(password, salt);
    // 해싱된 비밀번호와 나머지 유저 정보를 사용하여 새로운 User 엔터티를 생성한다.
    const newUser = this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });

    try {
      // 새로운 유저를 저장하고 반환한다.
      return this.userRepository.save(newUser);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes('UQ_e12875dfb3b1d92d7d7c5377e22')
      ) {
        // 중복된 키 오류가 UQ_e12875dfb3b1d92d7d7c5377e22 제약 조건에 해당하는 경우
        throw new ConflictException('username already exists');
      } else {
        // 다른 유형의 오류인 경우
        throw new InternalServerErrorException(error);
      }
    }
  }

  /**
   *  @description 유저 전체 조회
   * @returns {Promise<User[]>}
   * @memberof UserService
   * @example
   * const users = await this.userService.findAll();
   */
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  /**
   *  @description 유저 아이디로 조회
   * @param {string} userid
   * @returns {Promise<User>}
   * @memberof UserService
   * @example
   * const user = await this.userService.findOneByUserid('hong');
   */
  async findOneByUserid(userid: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { userid: userid },
    });
    return user;
  }

  /**
   *  @description 유저 아이디로 삭제
   * @param {string} userid
   * @returns {Promise<User>}
   * @memberof UserService
   * @example
   * const user = await this.userService.deleteByUserid('hong');
   */
  async deleteByUserid(userid: string): Promise<void> {
    const result = await this.userRepository.delete({ userid: userid });
  }
}
