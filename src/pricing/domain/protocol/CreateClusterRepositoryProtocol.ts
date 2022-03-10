import { Cluster } from '../model/Cluster';
import { CreateClusterIdentifierProtocol } from './CreateClusterIdentifierProtocol';

export interface CreateClusterRepositoryProtocol {
  save(cluster: Cluster): CreateClusterIdentifierProtocol;
}
