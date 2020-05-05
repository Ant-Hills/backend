import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleEntity } from '../role/role.entity';
import { UserDto } from './dto/UserDto';
import { PasswordTransformer } from './password.transformer';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, transformer: new PasswordTransformer() })
    password: string;

    @OneToOne(RoleEntity)
    @JoinColumn()
    role: RoleEntity;

    /*@Column({ nullable: true })
    avatar: string;*/

    dtoClass = UserDto;
}
