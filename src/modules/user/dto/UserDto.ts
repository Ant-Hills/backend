'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleEntity } from '../../role/role.entity';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    username: string;

    @ApiPropertyOptional({ enum: RoleEntity })
    role: RoleEntity;

    @ApiPropertyOptional()
    email: string;

    /*    @ApiPropertyOptional()
    avatar: string;*/

    constructor(user: UserEntity) {
        super(user);
        this.username = user.username;
        this.role = user.role;
        this.email = user.email;
        // this.avatar = user.avatar;
    }
}
