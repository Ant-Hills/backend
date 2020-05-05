import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { RoleDto } from './dto/RoleDto';

@Entity({ name: 'roles' })
export class RoleEntity extends AbstractEntity<RoleDto> {
    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    role: RoleType;

    dtoClass = RoleDto;
}
