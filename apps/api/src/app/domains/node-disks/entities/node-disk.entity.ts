import {Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import { v4 } from 'uuid';

@Entity()
export class NodeDisk {
    @PrimaryKey()
    uuid: string = v4();

    @Property({ nullable: true })
    node: string;

    @Property({ nullable: true })
    path?: string;

    @Property({ nullable: true })
    manufacture?: string;

    @Property({ nullable: true })
    model?: string;

    @Property({ nullable: true })
    serialNumber?: string;

    @Property({ nullable: true })
    capacity?: string;

    @Property({ nullable: true })
    firmwareVersion?: string;

    @Property({ nullable: true })
    name?: string;

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}