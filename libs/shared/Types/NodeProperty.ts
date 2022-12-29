import { NodeCpuPropertiesEnum } from '../Enums/node-cpu-properties.enum';
import { NodeRamPropertiesEnum } from '../Enums/node-ram-properties.enum';
import { NodeDiskPartitionPropertiesEnum } from '../Enums/node-disk-partition-properties.enum';

export enum Domain {
  nodeCpu = 'node_cpu',
  nodeRams = 'node_ram',
  nodeDiskPartitions = 'node_disk_partitions',
}

export interface Property {
  propertyName:
    | NodeCpuPropertiesEnum
    | NodeRamPropertiesEnum
    | NodeDiskPartitionPropertiesEnum;
  domain: Domain;
}

export interface NodeProperty {
  nodeUuid: string;
  property: Property;
}
