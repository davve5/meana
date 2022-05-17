import {IsOptional, IsString, IsUUID} from "class-validator";

export class CreateNodeDiskPartitionDto {
    @IsUUID(4)
    @IsString()
    nodeDisk: string

    @IsString()
    path?: string

    @IsString()
    @IsOptional()
    usedSpace?: string

    @IsString()
    @IsOptional()
    capacity?: string

    @IsString()
    @IsOptional()
    fileSystem?: string
}
