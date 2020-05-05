import { Module } from '@nestjs/common';

import { ProductcategoryService } from './productcategory.service';

@Module({
    providers: [ProductcategoryService],
})
export class ProductcategoryModule {}
