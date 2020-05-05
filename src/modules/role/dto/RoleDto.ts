'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { RoleEntity } from '../role.entity';

export class RoleDto extends AbstractDto {
    @ApiPropertyOptional({ enum: RoleType })
    role: RoleType;

    constructor(role: RoleEntity) {
        super(role);
    }
}
